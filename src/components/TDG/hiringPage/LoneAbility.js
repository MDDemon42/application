import styles from './LoneAbility.module.css';

const LoneAbility = ({level}) => {
    return (
        <div className={styles.LoneAbility}>
            <span className={styles.LoneAbility_Title}>
                {level.title}
            </span>
            <img src={level.image} 
                alt={level.description}
                title={level.description}
                className={styles.LoneAbility_Image}
            />
        </div>
    )
};

export default LoneAbility;