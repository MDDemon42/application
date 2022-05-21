import {connect} from 'react-redux';
import classes from './AuthorsPage.module.css';
import {NavLink} from "react-router-dom";
import Button from "react-bootstrap/Button";
import React, {useEffect} from "react";

import loadable from '@loadable/component';
// active loading
const AuthorInfo = loadable( () =>
    import(/*webpackChunkName: "AuthorInfo"*/ './authorInfo/AuthorInfo'));
const AuthorHeader = loadable( () =>
    import(/*webpackChunkName: "AuthorHeader"*/ './authorInfo/AuthorHeader'));

// passive preloading
const SaveButton = loadable( () =>
    import(/*webpackChunkName: "SaveAuthorButton"*/ '../loneComponents/SaveButton'));
const LoneInput = loadable( () =>
    import(/*webpackChunkName: "LoneInput"*/ '../loneComponents/LoneInput'));
const LoneDeleted = loadable( () =>
    import(/*webpackChunkName: "LoneDeleted"*/ '../loneComponents/LoneDeleted'));
const preload = component => component.preload && component.preload();

const AuthorsPage = ({authors}) => {

    useEffect( () => {
        preload(SaveButton);
        preload(LoneInput);
        preload(LoneDeleted);
    }, []);

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