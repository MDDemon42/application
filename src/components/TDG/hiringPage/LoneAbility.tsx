import styles from './LoneAbility.module.css';
import { TDGAbility } from '../functions/more/createTDGAbility';

interface LoneAbilityProps {
    level: TDGAbility, 
    color: string
}

const LoneAbility = (props: LoneAbilityProps) => {
    const {level, color} = props;

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