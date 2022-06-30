import styles from './LoneAbility.module.css';

const LoneAbility = ({level, color}) => {
    
    return (
        <div className={styles.LoneAbility}>
            <span className={styles.LoneAbility_Title}>
                {level.title}
            </span>
            <div style={{backgroundColor: color}}>
                <img src={level.image} 
                    alt={level.description}
                    title={level.description}
                    className={styles.LoneAbility_Image}
                />
            </div>
            
        </div>
    )
};

export default LoneAbility;