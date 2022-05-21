import classes from './Book.module.css';

const BookHeader = () => (
    <div className={classes.BookHeader}>
        <div>
            <p>
                Название книги
            </p>
        </div>
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
        <div>
            <p>
                Первая публикация
            </p>
        </div>
    </div>
);

export default BookHeader;