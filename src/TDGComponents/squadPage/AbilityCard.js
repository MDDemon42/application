import LoneAbility from "./LoneAbility";
import styles from './SquadPage.module.css';

const AbilityCard = ({category}) => {
    const {title, basic, advanced} = category;
    
    if (!basic) {
        return <></>
    };

    return (
        <div>
            <p className={styles.SquadPage_ClassesBlock_AbilitiesPool_CategoryTitle}>
                {title}
            </p>
            <LoneAbility level={basic}/>
            {
                advanced &&
                <LoneAbility level={advanced}/>
            }
        </div>   
    )
};

export default AbilityCard;