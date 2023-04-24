import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import MainPage from './components/general/mainPage/MainPage';
import AABPage from './components/AAB/AABPage';

import AuthorsPage from './components/AAB/authorsPage/AuthorsPage';
import BooksPage from "./components/AAB/booksPage/BooksPage";
import TopMenu from "./components/general/topMenu/TopMenu";
import BookLone from "./components/AAB/booksPage/singleBook/SingleBook";
import AuthorLone from "./components/AAB/authorsPage/singleAuthor/SingleAuthor";
import LinesPage from './components/general/linesPage/LinesPage';
import OthersPage from './components/general/othersPage/OthersPage';
import BottomInfo from './components/general/bottomInfo/BottomInfo';
import store from './redux/store';

render(
    <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                <TopMenu/>
                <Switch>
                    <Route path={'/'} exact component={MainPage}/>
                    <Route path={'/AAB'} exact component={AABPage}/>
                    <Route path={'/AAB/author/:id'} component={AuthorLone}/>
                    <Route path={'/AAB/authors/creation'} component={AuthorLone}/>
                    <Route path={'/AAB/authors'} component={AuthorsPage}/>
                    <Route path={'/AAB/book/:id'} component={BookLone}/>
                    <Route path={'/AAB/books/creation'} component={BookLone}/>
                    <Route path={'/AAB/books'} component={BooksPage}/>
                    <Route path={'/others'} exact component={OthersPage}/>
                    <Route path={'/others/lines'} component={LinesPage}/>
                    <Redirect to={'/'}/>
                </Switch>
                <BottomInfo/>
            </React.StrictMode>
        </Provider>
    </BrowserRouter>,
document.getElementById('root'));