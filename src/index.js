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

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                <TopMenu/>
                <Switch>
                    <Route path={'/'} exact component={MainPage}/>
                    <Route path={'/authors'} component={AuthorsPage}/>
                    <Route path={'/books'} component={BooksPage}/>
                    <Route path={'/book/:id'} component={BookLone}/>
                    <Redirect to={'/'}/>
                </Switch>
            </React.StrictMode>
        </Provider>
    </BrowserRouter>
  ,
  document.getElementById('root')
);

