import classes from './MainPage.module.css';
import {NavLink} from 'react-router-dom'

const MainPage = () => (
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
    </div>
  )

export default MainPage
