import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import MainPage from './AABComponents/mainPage/MainPage';
import AuthorsPage from './AABComponents/authorsPage/AuthorsPage';
import BooksPage from "./AABComponents/booksPage/BooksPage";
import TopMenu from "./AABComponents/topMenu/TopMenu";
import BookLone from "./AABComponents/booksPage/singleBook/SingleBook";
import AuthorLone from "./AABComponents/authorsPage/singleAuthor/SingleAuthor";
import LinesPage from './AABComponents/linesPage/LinesPage';
import OthersPage from './AABComponents/othersPage/OthersPage';
import BottomInfo from './AABComponents/bottomInfo/BottomInfo';
import SquadPage from './TDGComponents/squadPage/SquadPage';
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
                    <Route path={'/others/TDG'} component={SquadPage}/>
                    <Redirect to={'/'}/>
                </Switch>
                <BottomInfo/>
            </React.StrictMode>
        </Provider>
    </BrowserRouter>,
document.getElementById('root'));