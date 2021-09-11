import React from 'react'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import './index.css'
import MainPage from './components/mainPage/MainPage'
import AuthorsPage from './components/authorsPage/AuthorsPage'
import BooksPage from "./components/booksPage/BooksPage";
import TopMenu from "./components/topMenu/TopMenu";
import BookLone from "./components/bookLone/BookLone";
import store from './redux/store'
import AuthorLone from "./components/authorsPage/authorLone/AuthorLone";

ReactDOM.render(
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
                    <Redirect to={'/'}/>
                </Switch>
            </React.StrictMode>
        </Provider>
    </BrowserRouter>
  ,
  document.getElementById('root')
);

