import LoneAbility from "./LoneAbility";
import styles from './AbilityCard.module.css';

const AbilityCard = ({category, color}) => {
    const {title, basic, advanced} = category;
    
    if (!basic) {
        return <></>
    };

    return (
        <div>
            <p className={styles.AbilityCard_Title}>
                {title}
            </p>
            <LoneAbility level={basic} color={color}/>
            {
                advanced &&
                <LoneAbility level={advanced} color={color}/>
            }
        </div>   
    )
};

export default AbilityCard;