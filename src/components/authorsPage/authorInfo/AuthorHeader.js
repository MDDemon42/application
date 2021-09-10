import classes from './Author.module.css';

const AuthorHeader = () => (
    <div className={classes.AuthorHeader}>
        <div>
            <p>
                Фамилия автора
            </p>
        </div>
        <div>
            <p>
                Имя автора
            </p>
        </div>
    </div>
)

export default AuthorHeader