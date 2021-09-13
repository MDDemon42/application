import {connect} from 'react-redux'
import classes from './BookLone.module.css'
import {addBook, delBook, saveBook} from '../../../redux/actions'
import {useState} from "react";
import SaveBookButton from "./SaveBookButton";
import axios from 'axios'

const emptyBook = {
    title:'',
    last_name:'',
    first_name:'',
    created_at:'',
    image:''
}

const BookLone = (props) => {
    const id = Number(props.match.params.id)

    const book = id && props.books.filter(o=>o.id===id)[0]
    let {title, last_name, first_name, created_at, image} = emptyBook
    if (book) {
        title=book.title
        last_name=book.last_name
        first_name=book.first_name
        created_at=book.created_at
        image=book.image
    }

    const [bookTitle, setBookTitle] = useState(title)
    const [bookCreatedAt, setBookCreatedAt] = useState(created_at)
    const [bookLastName, setBookLastName] = useState(last_name)
    const [bookFirstName, setBookFirstName] = useState(first_name)

    const [valid,setValid] = useState(false)

    const yearValidation = (value) => {
        setBookCreatedAt(value)
        console.log('y',!!value)
        validAll(bookLastName.length>0,bookTitle.length>0,Number(value)<=new Date().getFullYear() &&
            value.length>0)
    }
    const titleValidation = (value) => {
        setBookTitle(value)
        console.log('t',!!value)
        validAll(bookLastName.length>0,!!value,Number(bookCreatedAt)<=new Date().getFullYear() &&
            bookCreatedAt.length>0)
    }
    const authorValidation = (value) => {
        setBookFirstName(value.split(' ')[0])
        setBookLastName(value.split(' ')[1])
        console.log('a',!!value)
        validAll(!!value,bookTitle.length>0,Number(bookCreatedAt)<=new Date().getFullYear() &&
            bookCreatedAt.length>0)

    }
    const validAll = (a,t,y) => {
        if (a && t && y) {
            setValid(true)
        }
        else {
            setValid(false)
        }
        console.log('valid?', valid, a,t,y)
    }

    const [file,setFile] = useState('')
    const imageChanger = (e) => {
        console.log(e.target.files[0])
        if (e.target.files[0] && e.target.files[0].type==='image/jpeg') {
            setFile(e.target.files[0])
        }
        else {
            alert('Не jpeg!')
        }
    }
    const imageLoader = () => {
        const data = new FormData()
        data.append('file', file)
        axios.post('http://localhost:3005/api/upload', data, {})
            .then(res => { // then print response status
                console.log(res.statusText)
            })
    }

    let creation = false
    let readyText='Изменения сохранены!'
    let toMakeText='Сохранить изменения'
    let func = props.onSave

    if (props.match.path==='/books/creation') {
        creation = true
        readyText='Книга добавлена!'
        toMakeText='Добавить книгу'
        func=props.onAdd
    }

    if (book || creation) {
        const otherAuthors = props.authors.filter(o => o.id !== Math.floor(id / 100))
        return (
            <div className={classes.BookLone}>
                <div>
                    <p>Название:</p>
                    <input value={bookTitle}
                           name={'title'}
                           type={'text'}
                           onChange={e => titleValidation(e.target.value)}
                    />
                </div>
                <div>
                    <p>Автор:</p>
                    <select onChange={e=> authorValidation(e.target.value)}>
                        {
                            !creation ?
                                <option value={first_name + ' ' + last_name}> {first_name + ' ' + last_name}</option> :
                                <option disabled
                                        selected
                                        value={''}
                                >
                                    Выберите автора
                                </option>
                        }
                        {otherAuthors.map((a) => (
                            <option value={a.first_name + ' ' + a.last_name}
                                    key={a.id}
                            >
                                {a.first_name + ' ' + a.last_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <p>Первая публикация:</p>
                    <input value={bookCreatedAt}
                           name={'started_at'}
                           type={'text'}
                           className={classes.started_at}
                           onChange={(e => yearValidation(e.target.value))}
                    />
                </div>
                <div style={{justifyContent:'space-between'}}>
                    {
                        !creation ?
                            <>
                                <img src={image} alt={title + '_image'}/>
                                <span className={classes.spanAddImage}>
                                    <input type={'file'} onChange={imageChanger}/>
                                    <button onClick={()=>imageLoader}>Сменить обложку</button>
                                </span>
                            </>
                            :
                            <span className={classes.spanAddImage}>
                                <input type={'file'} onChange={imageChanger}/>
                                <button onClick={imageLoader}>Добавить обложку</button>
                            </span>
                    }
                </div>
                <span className={classes.buttonDiv}>
                    <SaveBookButton onFunc={func}
                                    id={id}
                                    bookTitle={bookTitle}
                                    bookLastName={bookLastName}
                                    bookFirstName={bookFirstName}
                                    bookCreatedAt={bookCreatedAt}
                                    bookImage={image}
                                    readyText={readyText}
                                    toMakeText={toMakeText}
                                    isValid={valid}
                    />
                    {
                        !creation ?
                            <button onClick={() => props.onDelete(id)}
                                    className={classes.buttonDel}
                            >
                                Удалить книгу
                            </button> :
                            null
                    }
                </span>
            </div>
        )
    }
    else {
        return (
            <div className={classes.BookLone}>
                <h1>
                    Книга удалена
                </h1>
            </div>
        )
    }
}


function mapStateToProps (state) {
    return {
        authors:state.authors,
        books:state.books
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onDelete: id => dispatch(delBook(id)),
        onSave: (id,title,last_name,first_name,created_at,image)=> dispatch(saveBook(id,title,last_name,first_name,created_at,image)),
        onAdd: (id,title,last_name,first_name,created_at,image) => dispatch(addBook(id,title,last_name,first_name,created_at,image))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookLone)