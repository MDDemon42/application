import { NavLink } from 'react-router-dom';
import styles from './AABPage.module.css';

const AABPage = () => {
    const items = [
        {path: '/AAB/authors', text: 'Авторы'},
        {path: '/AAB/books', text: 'Книги'}
    ];

    return (
        <div className={styles.AABPage}>
            <h1>Это страница библиотеки.</h1>
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

export default AABPage;