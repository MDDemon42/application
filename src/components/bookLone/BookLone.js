import {connect} from 'react-redux'
import classes from './BookLone.module.css'
import {addBook, delBook, saveBook} from '../../redux/actions'
import {useState} from "react";
import SaveBookButton from "./SaveBookButton";

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
    const [bookImage, setBookImage] = useState(image)

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
                <div className={classes.buttonDiv}>
                    <div>
                        <p>Название:</p>
                        <input value={bookTitle}
                               type={'text'}
                               onChange={e => setBookTitle(e.target.value)}
                        />
                    </div>
                    <SaveBookButton onFunc={func}
                                id={id}
                                bookTitle={bookTitle}
                                bookLastName={bookLastName}
                                bookFirstName={bookFirstName}
                                bookCreatedAt={bookCreatedAt}
                                bookImage={bookImage}
                                readyText={readyText}
                                toMakeText={toMakeText}
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
                </div>
                <div>
                    <p>Автор:</p>
                    <select onChange={e=> {
                        setBookFirstName(e.target.value.split(' ')[0])
                        setBookLastName(e.target.value.split(' ')[1])
                    }
                        }>
                        {
                            !creation ?
                                <option> {first_name + ' ' + last_name}</option> :
                                <option disabled selected>Выберите автора</option>
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
                           type={'text'}
                           className={classes.started_at}
                           onChange={(e => setBookCreatedAt(e.target.value))}
                    />
                </div>
                <div>
                    {
                        !creation ?
                            <>
                                <img src={image} alt={title + '_image'}/>
                                <button>Сменить обложку</button>
                            </>:
                            <button>Добавить обложку</button>
                    }
                </div>
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