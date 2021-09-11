import {connect} from 'react-redux'
import classes from './BookLone.module.css'
import {delBook, saveBook} from '../../redux/actions'
import {useState} from "react";

const emptyBook = {
    title:'',
    last_name:'',
    first_name:'',
    created_at:'',
    image:''
}

const BookLone = (props) => {
    const id = Number(props.match.params.id)
    const book = props.books.filter(o=>o.id===id)[0]
    const {title, last_name, first_name, created_at, image} = book ?? emptyBook

    const [bookTitle, setBookTitle] = useState(title)
    const [bookCreatedAt, setBookCreatedAt] = useState(created_at)
    const [bookLastName, setBookLastName] = useState(last_name)
    const [bookFirstName, setBookFirstName] = useState(first_name)
    const [bookImage, setBookImage] = useState(image)

    const [saved,setSaved]=useState(false)
    const saveClasses = [classes.buttonSave]

    if (saved) {
        saveClasses.push(classes.grayBackground)
    }

    if (book) {
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
                    <button className={saveClasses.join(' ')}
                            onClick={() => {
                                props.onSave(id, bookTitle, bookLastName, bookFirstName, bookCreatedAt, bookImage)
                                setSaved(true)
                                setTimeout(()=>setSaved(false),1000)
                            }}
                    >
                        {
                            saved ?
                                <span>
                                    Изменения сохранены!
                                </span> :
                                <span>
                                    Сохранить изменения
                                </span>
                        }
                    </button>
                    <button onClick={() => props.onDelete(id)}
                            className={classes.buttonDel}
                    >
                        Удалить книгу
                    </button>
                </div>
                <div>
                    <p>Автор:</p>
                    <select onChange={e=> {
                        setBookFirstName(e.target.value.split(' ')[0])
                        setBookLastName(e.target.value.split(' ')[1])
                    }
                        }>
                        <option> {first_name + ' ' + last_name}</option>
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
                    <img src={image} alt={title + '_image'}/>
                    <button>Сменить обложку</button>
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
        onSave: (id,title,last_name,first_name,created_at,image)=> dispatch(saveBook(id,title,last_name,first_name,created_at,image))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookLone)