import styles from './ClassCardHeader.module.css';

const ClassCardHeader = ({icon, title, description}) => {
    return (
        <div className={styles.ClassCardHeader}>
                <img src={icon} 
                    alt={'icon'}
                    title={title}
                    className={styles.ClassCardHeader_Icon}
                />
                <div className={styles.ClassCardHeader_Text}>
                    <span className={styles.ClassCardHeader_Text_Header}>
                        {title}
                    </span>
                    <span className={styles.ClassCardHeader_Text_Mass}>
                        {description}
                    </span>
                </div>
            </div>
    )
};

export default ClassCardHeader;