import { connect } from 'react-redux';
import {useParams, useLocation} from "react-router-dom";
import classes from './SingleBook.module.css';
import actions from '../../../redux/actions';
import React, {useState, Suspense} from "react";
// import Button from "react-bootstrap/Button";
import helpFunctions from '../../helpFunctions';
import C from '../../../redux/constants';
import SaveButton from '../../loneComponents/SaveButton';
import DeleteButton from '../../loneComponents/DeleteButton';
import AuthorSelect from './AuthorSelect';
import LoneInput from '../../loneComponents/LoneInput';
import LoneDeleted from '../../loneComponents/LoneDeleted';

const BookLone = ({books, authors, onAdd, onSave, onDelete}) => {
    const { id } = useParams();
    const location = useLocation();

    const {
        setSaveButtonData,
        setFinalItemData,
        // imageLoader,
        // imageChanger,
        setStartingItemData,
    } = helpFunctions;

    const theBook = setStartingItemData(id, books, C.BOOK);

    const [deleted, setDeleted] = useState(false);

    const [bookTitle, setBookTitle] = useState(theBook.title);
    const [bookCreatedAt, setBookCreatedAt] = useState(theBook.created_at);
    const [authorLastName, setAuthorLastName] = useState(theBook.last_name);
    const [authorFirstName, setAuthorFirstName] = useState(theBook.first_name);
    // const [bookImage, setBookImage] = useState(theBook.image);

    const handlerAuthorChange = value => {
        setAuthorFirstName(value.split(' ')[0]);
        setAuthorLastName(value.split(' ')[1]);
    };

    // const [file, setFile] = useState('');

    const bookData = setFinalItemData(C.BOOK, theBook.id, authorLastName, authorFirstName, bookTitle, bookCreatedAt, theBook.image);

    const creation = location.pathname === C.bookCreationURL;
    const initialSaveButtonData = setSaveButtonData(onSave, onAdd, creation, C.BOOK);

    // const handleFileChange = useCallback(event => {
    //     const newFile = imageChanger(event);
    //     setFile(newFile);
    // }, [imageChanger]);

    if (deleted) {
        return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <LoneDeleted text={'Книга удалена'}
                        className={classes.BookLone}
            />
        </Suspense>
        )
    };

    const onDeleteButtonClick = () => {
        onDelete(theBook.id)
        setDeleted(true)
    };

    return (
        <div className={classes.BookLone}>
            <LoneInput value={bookTitle}
                       name={'title'}
                       handler={setBookTitle}
                       text={'Название:'}
            />
            <AuthorSelect handlerAuthorChange={handlerAuthorChange}
                          creation={creation}
                          theBook={theBook}
                          authors={authors}
            />
            <LoneInput value={bookCreatedAt}
                       name={'started_at'}
                       className={classes.started_at}
                       handler={setBookCreatedAt}
                       text={'Первая публикация:'}
            />
            <div style={{justifyContent:'space-between'}}>
                {
                    !creation && <img src={theBook.image} alt={theBook.title + '_image'}/>
                }
                {/* <span className={classes.spanAddImage}>
                    <input type={'file'}
                           onChange={handleFileChange}
                    />
                    <Button onClick={() => imageLoader(file)}
                            variant={'secondary'}
                    >
                        Сменить обложку
                    </Button>
                </span> */}
            </div>
            <span className={classes.buttonDiv}>
                <SaveButton itemData={bookData}
                            initialSaveButtonData={initialSaveButtonData}
                            type={C.BOOK}
                />
                {
                    !creation && 
                    <DeleteButton delFunction={onDeleteButtonClick}
                                    delText={'Удалить книгу'}
                    />
                }
            </span>
        </div>
    )
};


function mapStateToProps (state) {
    return {
        authors: state.authorReducer.authors,
        books: state.bookReducer.books
    };
};

const {addBook, delBook, saveBook} = actions;
function mapDispatchToProps (dispatch) {
    return {
        onDelete: id => dispatch(delBook(id)),
        onSave: (id, title, last_name, first_name, created_at, image) => dispatch(saveBook(id, title, last_name, first_name, created_at, image)),
        onAdd: (id, title, last_name, first_name, created_at, image) => dispatch(addBook(id, title, last_name, first_name, created_at, image))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(BookLone);