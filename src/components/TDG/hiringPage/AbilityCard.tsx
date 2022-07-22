import LoneAbility from "./LoneAbility";
import styles from './AbilityCard.module.css';
import { TDGAbility } from '../functions/more/createTDGAbility';

interface AbilityCardProps {
    category: {
        title: String,
        basic: TDGAbility,
        advanced: TDGAbility
    },
    color: string
}

const AbilityCard = (props: AbilityCardProps) => {
    const {category, color} = props;
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