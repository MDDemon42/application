import styles from './InfoBlock.module.css';

const InfoBlock = (
    {nick, level, armorTitle, meleeTitle, rangeTitle, special}
) => {

    return (
        <div className={styles.InfoBlock}>
            <p>
                {nick}
            </p>
            <p>
                Level: {level}
            </p>
            <p>
                Armor: {armorTitle}
            </p>
            <div>
                Weapon: 
                <p>
                    In melee: {meleeTitle}
                </p>
                <p>
                    In range: {rangeTitle}
                </p>
            </div>
            {
                (special[0].level + special[1].level > 0) &&
                <div>
                    Special:
                    {
                        special[0].level &&
                            <p>
                                {special[0].title}
                            </p>
                    }
                    {
                        special[1].level &&
                            <p>
                                {special[1].title}
                            </p>
                    }
                </div>
            }
        </div>
    )
};

export default InfoBlock;