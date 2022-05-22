import classes from './OthersPage.module.css';
import { NavLink } from 'react-router-dom';

const OthersPage = () => {
    const items = [
        {path: '/others/lines', text: 'Линии'}
    ];

    return (
        <div className={classes.OthersPage}>
            <h1>Это страница прочего.</h1>
            {
                items.map( (item, index) => (
                    <div key={index}>
                        <NavLink to={item.path}>
                            {item.text}
                        </NavLink>
                    </div> 
                ))
            }
        </div>
    )
};

export default OthersPage;