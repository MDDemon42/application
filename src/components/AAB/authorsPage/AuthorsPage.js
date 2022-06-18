import { connect } from 'react-redux';
import classes from './AuthorsPage.module.css';
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import React from "react";
import C from '../../redux/constants';
import Info from './blocks/Info';
import Header from '../loneComponents/LoneHeader';

const AuthorsPage = ({authors}) => {
    const headerItems = ['Фамилия автора', 'Имя автора'];

    return (
        <div className={classes.AuthorsPage}>
            {
                authors.length ?
                <>
                    <span className={classes.AuthorsPage_Header}>
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
                        <Header type={C.AUTHOR} items={headerItems}/>
                        {
                            authors.map((item) => {
                                return <Info
                                    key={item.id}
                                    id={item.id}
                                    last_name={item.last_name}
                                    first_name={item.first_name}
                                />
                            })
                        }
                    </div>
                </> :
                <h1>
                    Авторы отсутствуют
                </h1>
            }
        </div>
    )
};

function mapStateToProps (state) {
    return {
        authors: state.authorReducer.authors
    };
};

export default connect(mapStateToProps,null)(AuthorsPage);