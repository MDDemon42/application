import classes from './Author.module.css';

const AuthorHeader = () => {
    const items = ['Фамилия автора', 'Имя автора']
    return (
        <div className={classes.AuthorHeader}>
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

export default AuthorHeader;