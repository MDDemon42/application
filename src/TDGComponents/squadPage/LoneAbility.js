import styles from './SquadPage.module.css';

const LoneAbility = ({level}) => {
    return (
        <div className={styles.SquadPage_ClassesBlock_AbilitiesPool_Ability}>
            <span className={styles.SquadPage_ClassesBlock_AbilitiesPool_Ability_Description}>
                {level.title}
            </span>
            <img src={level.image} 
                alt={level + ''}
                title={level.description}
                className={styles.SquadPage_ClassesBlock_AbilitiesPool_Ability_Image}
            />
        </div>
    )
};

export default LoneAbility;