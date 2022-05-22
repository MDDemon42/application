import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import MainPage from './components/mainPage/MainPage';
import AuthorsPage from './components/authorsPage/AuthorsPage';
import BooksPage from "./components/booksPage/BooksPage";
import TopMenu from "./components/topMenu/TopMenu";
import BookLone from "./components/booksPage/singleBook/SingleBook";
import AuthorLone from "./components/authorsPage/singleAuthor/SingleAuthor";
import LinesPage from './components/linesPage/LinesPage';
import OthersPage from './components/othersPage/OthersPage';
import BottomInfo from './components/bottomInfo/BottomInfo';
import store from './redux/store';

render(
    <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                <TopMenu/>
                <Switch>
                    <Route path={'/'} exact component={MainPage}/>
                    <Route path={'/author/:id'} component={AuthorLone}/>
                    <Route path={'/authors/creation'} component={AuthorLone}/>
                    <Route path={'/authors'} component={AuthorsPage}/>
                    <Route path={'/book/:id'} component={BookLone}/>
                    <Route path={'/books/creation'} component={BookLone}/>
                    <Route path={'/books'} component={BooksPage}/>
                    <Route path={'/others'} exact component={OthersPage}/>
                    <Route path={'/others/lines'} component={LinesPage}/>
                    <Redirect to={'/'}/>
                </Switch>
                <BottomInfo/>
            </React.StrictMode>
        </Provider>
    </BrowserRouter>,
document.getElementById('root'));