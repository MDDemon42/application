import React from "react";
import { connect } from 'react-redux';
import classes from './BooksPage.module.css';
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import C from '../../redux/constants';
import Info from './blocks/Info';
import Header from '../loneComponents/LoneHeader';

const BooksPage = ({books}) => {
    const headerItems = ['Название книги', 'Фамилия автора', 'Имя автора', 'Первая публикация'];

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
                            <Header type={C.BOOK} items={headerItems}/>
                            {
                                books.map((item) => {
                                    return <Info
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
