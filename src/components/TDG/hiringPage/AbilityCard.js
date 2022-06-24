import LoneAbility from "./LoneAbility";
import styles from './AbilityCard.module.css';

const AbilityCard = ({category}) => {
    const {title, basic, advanced} = category;
    
    if (!basic) {
        return <></>
    };

    return (
        <div>
            <p className={styles.AbilityCard_Title}>
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