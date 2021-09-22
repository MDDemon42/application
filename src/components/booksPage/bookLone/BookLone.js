import {connect} from 'react-redux'
import classes from './BookLone.module.css'
import {addBook, delBook, saveBook} from '../../../redux/actions'
import {useState} from "react";
import SaveBookButton from "./SaveBookButton";
import AuthorSelect from "./AuthorSelect";
import Button from "react-bootstrap/Button";
import {
    setSaveButtonData,
    setFinalItemData,
    imageLoader,
    imageChanger,
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

    if (theBook || creation) {
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
                <AuthorSelect handlerAuthorChange={handlerAuthorChange}
                              creation={creation}
                              theBook={theBook}
                              authors={props.authors}
                />
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
                                <Button onClick={() => imageLoader(file)}
                                        variant={'secondary'}
                                >
                                    Добавить обложку
                                </Button>
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
                                    <Button onClick={() => imageLoader(file)}
                                            variant={'secondary'}
                                    >
                                        Сменить обложку
                                    </Button>
                                </span>
                            </>
                    }
                </div>
                <span className={classes.buttonDiv}>
                    <SaveBookButton bookData={bookData}
                                    initialSaveButtonData={initialSaveButtonData}
                    />
                    {
                        !creation && <Button onClick={() => props.onDelete(theBook.id)}
                                             variant="danger"
                        >
                            Удалить книгу
                        </Button>
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