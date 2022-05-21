import classes from './Book.module.css';

const BookHeader = () => {
    const items = ['Название книги', 'Фамилия автора', 'Имя автора', 'Первая публикация'];
    return (
        <div className={classes.BookHeader}>
            {
                items.map( item => (
                    <div key={item[0]}>
                        <p>
                            {item}
                        </p>
                    </div>
                ))
            }            
        </div>
    )
};

export default BookHeader;