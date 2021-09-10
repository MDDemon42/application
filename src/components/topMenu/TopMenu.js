import classes from './TopMenu.module.css';
import {NavLink} from 'react-router-dom'

const TopMenu = () => (
    <div className={classes.TopMenu}>
        <div>
            <NavLink to={'/'}>
                Главная страница
            </NavLink>
        </div>
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

export default TopMenu
