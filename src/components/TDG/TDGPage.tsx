import { NavLink } from 'react-router-dom';
import styles from './TDGPage.module.css';

interface PathItem {
    path: string,
    text: string
}

const TDGPage = () => {
    const pathItems: PathItem[] = [
        {path: '/TDG/squad', text: 'Squad'},
        {path: '/TDG/hiring', text: 'Hiring'}
    ];

    return (
        <div className={styles.TDGPage}>
            <h1>This is Tech Dungeon Game page</h1>
            {
                pathItems.map( (item, index) => (
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

export default TDGPage;