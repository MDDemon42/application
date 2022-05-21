import classes from './MainPage.module.css';
import Button from "react-bootstrap/Button";
import { NavLink } from 'react-router-dom';
import actions from "../../redux/actions";
import { connect } from "react-redux";
import {useCallback, useEffect} from "react";

import loadable from '@loadable/component';
// passive preloading
const BookInfo = loadable( () =>
    import(/*webpackChunkName: "BookInfo"*/ '../booksPage/blocks/Info'));
const BookHeader = loadable( () =>
    import(/*webpackChunkName: "BookHeader"*/ '../booksPage/blocks/Header'));
const AuthorInfo = loadable( () =>
    import(/*webpackChunkName: "AuthorInfo"*/ '../authorsPage/blocks/Info'));
const AuthorHeader = loadable( () =>
    import(/*webpackChunkName: "AuthorHeader"*/ '../authorsPage/blocks/Header'));
const preload = component => component.preload && component.preload();

const MainPage = ({externalData, onGetData}) => {
    const dependency = externalData[0];
    const getExternalDataCallback = useCallback( () => onGetData(), [dependency]);

    useEffect( () => {
        preload(BookInfo);
        preload(BookHeader);
        preload(AuthorInfo);
        preload(AuthorHeader);
    }, []);

    return (
        <div className={classes.MainPage}>
            <h1>Это главная страница.</h1>
            <div>
                <NavLink to={'/authors'}>
                    Авторы
                </NavLink>
            </div>
            <div>
                <NavLink to={'/books'}>
                    Книги
                </NavLink>
            </div>
            {
                !externalData[0]?.birthdate ?
                    <Button onClick={() => getExternalDataCallback()}
                            variant={'primary'}
                            size="sm"
                    >
                        Хотите загрузить дополнительные данные?
                    </Button> :
                    <Button variant={'primary'}
                            size="sm"
                            disabled
                    >
                        Дополнительные данные успешно загружены!
                    </Button>
            }
        </div>
    )
};

function mapStateToProps (state) {
    return {
        externalData: state.externalDataReducer.externalData
    };
};

const { getExternalData } = actions;
function mapDispatchToProps(dispatch) {
    return {
        onGetData: () => dispatch(getExternalData('https://5d610fd7c2ca490014b27388.mockapi.io/api/users'))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
