import styles from './PerksOnLevelUp.module.css';
import SinglePerk from './SinglePerk';

const PerksOnLevelUp = ({perkPack}) => {
    
    return (
        <div className={styles.PerksOnLevelUp}>
            {
                perkPack.map( (pack, index) => 
                    <div key={pack.category}>
                        <SinglePerk 
                            pack={pack}
                            chosen={index === 0}
                        />
                    </div>
                )
            }
        </div>
    )
};

export default PerksOnLevelUp;