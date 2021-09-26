import {connect} from 'react-redux'
import classes from './AuthorsPage.module.css';
import {NavLink} from "react-router-dom";
import Button from "react-bootstrap/Button";
import React, {lazy, Suspense} from "react";

const AuthorHeader = lazy( () => import("./authorInfo/AuthorHeader"))
const AuthorInfo = lazy( () => import("./authorInfo/AuthorInfo"))

const AuthorsPage = ({authors}) => (
    <div className={classes.AuthorsPage}>
    {
        authors.length ?
            <>
                <span style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
                    <h1>
                        Авторы в нашей библиотеке:
                    </h1>
                    <NavLink to={'/authors/creation'}>
                        <Button variant={'success'}>
                            <p>
                                Добавить автора
                            </p>
                        </Button>
                    </NavLink>
                </span>
                <div>
                    <Suspense fallback={<div>Загрузка...</div>}>
                        <AuthorHeader/>
                        {
                            authors.map((item) => {
                                return <AuthorInfo
                                    key={item.id}
                                    id={item.id}
                                    last_name={item.last_name}
                                    first_name={item.first_name}
                                />
                            })
                        }
                    </Suspense>
                </div>
            </> :
            <h1>
                Авторы отсутствуют
            </h1>
    }
</div>
)

function mapStateToProps (state) {
    return {
        authors: state.authorReducer.authors
    }
}

export default connect(mapStateToProps,null)(AuthorsPage)
