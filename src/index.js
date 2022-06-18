import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import MainPage from './mainComponents/mainPage/MainPage';
import AABPage from './AABComponents/AABPage/AABPage';
import TDGPage from './TDGComponents/TDGPage/TDGPage';

import AuthorsPage from './AABComponents/authorsPage/AuthorsPage';
import BooksPage from "./AABComponents/booksPage/BooksPage";
import TopMenu from "./mainComponents/topMenu/TopMenu";
import BookLone from "./AABComponents/booksPage/singleBook/SingleBook";
import AuthorLone from "./AABComponents/authorsPage/singleAuthor/SingleAuthor";
import LinesPage from './AABComponents/linesPage/LinesPage';
import OthersPage from './mainComponents/othersPage/OthersPage';
import BottomInfo from './mainComponents/bottomInfo/BottomInfo';
import SquadPage from './TDGComponents/squadPage/SquadPage';
import HiringModule from './TDGComponents/squadPage/hiringModule/HiringModule';
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
                    <Route path={'/TDG'} exact component={TDGPage}/>
                    <Route path={'/TDG/squad'} component={SquadPage}/>
                    <Route path={'/TDG/hiring'} component={HiringModule}/>
                    <Redirect to={'/'}/>
                </Switch>
                <BottomInfo/>
            </React.StrictMode>
        </Provider>
    </BrowserRouter>,
document.getElementById('root'));