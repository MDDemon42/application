import React, {lazy, Suspense} from "react"
import {connect} from 'react-redux'
import classes from './BooksPage.module.css'
import Button from "react-bootstrap/Button";
import {NavLink} from "react-router-dom"

const BookInfo = lazy( () => import("./bookInfo/BookInfo"))
const BookHeader = lazy( () => import("./bookInfo/BookHeader"))

const BooksPage = ({books}) => (
    <div className={classes.BooksPage}>
        {
            books.length ?
                <>
                    <span style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
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
                        <Suspense fallback={<div>Загрузка...</div>}>
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
                        </Suspense>
                    </div>
                </> :
                <h1>
                    Книги отсутствуют
                </h1>
        }
    </div>
)

function mapStateToProps (state) {
    return {
        books: state.bookReducer.books,
    }
}

export default connect(mapStateToProps,null)(BooksPage)
