import {NavLink} from 'react-router-dom'
import classes from './Book.module.css';

const BookInfo = ({id,title,last_name,first_name,year}) => (
    <div className={classes.BookInfo}>
        <div>
            <p>
                <NavLink to={'/books/book/'+id}>
                    {title}
                </NavLink>
            </p>
        </div>
        <div>
            <p>
                {last_name}
            </p>
        </div>
        <div>
            <p>
                {first_name}
            </p>
        </div>
        <div>
            <p>
                {year}
            </p>
        </div>
    </div>
  )

export default BookInfo
