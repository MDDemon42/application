import {NavLink} from 'react-router-dom';
import classes from './Book.module.css';

const BookInfo = ({id, title, last_name, first_name, created_at}) => {
    const items = [last_name, first_name, created_at];
    return (
        <div className={classes.BookInfo}>
            <div>
                <p>
                    <NavLink to={'/book/' + id}>
                        {title}
                    </NavLink>
                </p>
            </div>
            {
                items.map( (item, index) => (
                    <div key={index}>
                        <p>
                            {item}
                        </p>
                    </div>
                ))
            }
        </div>
    )
};

export default BookInfo;
