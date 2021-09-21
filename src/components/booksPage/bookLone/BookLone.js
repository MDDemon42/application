import {connect} from 'react-redux'
import classes from './BookLone.module.css'
import {addBook, delBook, saveBook} from '../../../redux/actions'
import {useState} from "react";
import SaveBookButton from "./SaveBookButton";
import {
    setSaveButtonData,
    setFinalItemData,
    getFullName,
    imageLoader,
    imageChanger,
    getOtherAuthors,
    setStartingItemData
} from '../../helpFunctions/helpFunctions'
import C from '../../../redux/constants'

const BookLone = (props) => {
    const theBook = setStartingItemData(props.match.params.id, props.books, C.BOOK)

    const [bookTitle, setBookTitle] = useState(theBook.title)
    const [bookCreatedAt, setBookCreatedAt] = useState(theBook.created_at)
    const [bookLastName, setBookLastName] = useState(theBook.last_name)
    const [bookFirstName, setBookFirstName] = useState(theBook.first_name)
    const [bookImage, setBookImage] = useState(theBook.image)

    const handlerAuthorChange = value => {
        setBookFirstName(value.split(' ')[0])
        setBookLastName(value.split(' ')[1])
    }

    const [file,setFile] = useState('')

    const bookData = setFinalItemData(C.BOOK, theBook.id, bookLastName, bookFirstName, bookTitle, bookCreatedAt, bookImage)

    const creation = props.match.path === C.bookCreationURL
    const initialSaveButtonData = setSaveButtonData(props.onSave, props.onAdd, creation, 'book')

    const defaultAuthor = getFullName(theBook)

    if (theBook || creation) {
        const otherAuthors = getOtherAuthors(props.authors, theBook.last_name, theBook.first_name)
        return (
            <div className={classes.BookLone}>
                <div>
                    <p>
                        Название:
                    </p>
                    <input value={bookTitle}
                           name={'title'}
                           type={'text'}
                           onChange={event => setBookTitle(event.target.value)}
                    />
                </div>
                <div>
                    <p>
                        Автор:
                    </p>
                    <select onChange={event => handlerAuthorChange(event.target.value)}
                            value={''}
                    >
                        {
                            creation ?
                                <option disabled
                                        // selected
                                        value={''}
                                >
                                    Выберите автора
                                </option> :
                                <option value={defaultAuthor}>
                                    {defaultAuthor}
                                </option>
                        }
                        {otherAuthors.map(author => (
                            <option value={getFullName(author)}
                                    key={author.id}
                            >
                                {getFullName(author)}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <p>
                        Первая публикация:
                    </p>
                    <input value={bookCreatedAt}
                           name={'started_at'}
                           type={'text'}
                           className={classes.started_at}
                           onChange={event => setBookCreatedAt(event.target.value)}
                    />
                </div>
                <div style={{justifyContent:'space-between'}}>
                    {
                        creation ?
                            <span className={classes.spanAddImage}>
                                <input type={'file'}
                                       onChange={event => {
                                           const newFile = imageChanger(event)
                                           setFile(newFile)
                                       }}
                                />
                                <button onClick={() => imageLoader(file)}>
                                    Добавить обложку
                                </button>
                            </span>
                            :
                            <>
                                <img src={theBook.image} alt={theBook.title + '_image'}/>
                                <span className={classes.spanAddImage}>
                                    <input type={'file'}
                                           onChange={event => {
                                               const newFile = imageChanger(event)
                                               setFile(newFile)
                                           }}
                                    />
                                    <button onClick={() => imageLoader(file)}>
                                        Сменить обложку
                                    </button>
                                </span>
                            </>
                    }
                </div>
                <span className={classes.buttonDiv}>
                    <SaveBookButton bookData={bookData}
                                    initialSaveButtonData={initialSaveButtonData}
                    />
                    {
                        !creation && <button onClick={() => props.onDelete(theBook.id)}
                                             className={classes.buttonDel}>
                            Удалить книгу
                        </button>
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
        authors: state.authorReducer.authors,
        books: state.bookReducer.books
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onDelete: id => dispatch(delBook(id)),
        onSave: (id,title,last_name,first_name,created_at,image) => dispatch(saveBook(id,title,last_name,first_name,created_at,image)),
        onAdd: (id,title,last_name,first_name,created_at,image) => dispatch(addBook(id,title,last_name,first_name,created_at,image))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookLone)