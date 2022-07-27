import classes from './Author.module.css';
import { NavLink } from "react-router-dom";
import { OneAABAuthor } from '../../helpFunctions/functions/createOneAABAuthor'; 

const AuthorInfo = ({id, last_name, first_name}: OneAABAuthor) => (
    <div className={classes.AuthorInfo}>
        <div>
            <p>
                <NavLink to={'/author/' + id}>
                    {last_name}
                </NavLink>
            </p>
        </div>
        <div>
            <p>
                {first_name}
            </p>
        </div>
    </div>
);

export default AuthorInfo;
