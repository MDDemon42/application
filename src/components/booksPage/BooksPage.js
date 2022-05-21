import React, {useEffect} from "react";
import {connect} from 'react-redux';
import classes from './BooksPage.module.css';
import Button from "react-bootstrap/Button";
import {NavLink} from "react-router-dom";

import loadable from '@loadable/component';
// active loading
const BookInfo = loadable( () =>
    import(/*webpackChunkName: "BookInfo"*/ './bookInfo/BookInfo'));
const BookHeader = loadable( () =>
    import(/*webpackChunkName: "BookHeader"*/ './bookInfo/BookHeader'));

// passive preloading
const SaveButton = loadable( () =>
    import(/*webpackChunkName: "SaveBookButton"*/ '../loneComponents/SaveButton'));
const AuthorSelect = loadable( () =>
    import(/*webpackChunkName: "AuthorSelect"*/ './bookLone/AuthorSelect'));
const LoneInput = loadable( () =>
    import(/*webpackChunkName: "LoneInput"*/ '../loneComponents/LoneInput'));
const LoneDeleted = loadable( () =>
    import(/*webpackChunkName: "LoneDeleted"*/ '../loneComponents/LoneDeleted'));
const preload = component => component.preload && component.preload();

const BooksPage = ({books}) => {

    useEffect( () => {
        preload(SaveButton);
        preload(AuthorSelect);
        preload(LoneInput);
        preload(LoneDeleted);
    }, []);

    return (
        <div className={classes.BooksPage}>
            {
                books.length ?
                    <>
                    <span className={classes.BooksPage_Header}>
                        <h1>
                            Книги нашей библиотеки:
                        </h1>
                        <NavLink to={'/books/creation'}>
                            <Button variant={'success'}>
                                <p>
                                    Добавить книгу
                                </p>
                            </Button>
                        </NavLink>
                    </span>
                        <div className={classes.mobileScroll}>
                            <BookHeader/>
                            {
                                books.map((item) => {
                                    return <BookInfo
                                        key={item.id}
                                        title={item.title}
                                        id={item.id}
                                        last_name={item.last_name}
                                        first_name={item.first_name}
                                        created_at={item.created_at}
                                    />
                                })
                            }
                        </div>
                    </> :
                    <h1>
                        Книги отсутствуют
                    </h1>
            }
        </div>
    )
};

function mapStateToProps (state) {
    return {
        books: state.bookReducer.books,
    };
};

export default connect(mapStateToProps,null)(BooksPage);
