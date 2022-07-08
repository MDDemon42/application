import styles from './InfoBlock.module.css';

const InfoBlock = (
    {nick, level, armorTitle, meleeTitle, rangeTitle, special, flight}
) => {
    if (InfoBlock[nick]) {
        return InfoBlock[nick];
    };

    console.log('rendering InfoBlock', nick);

    InfoBlock[nick] = <div className={styles.InfoBlock}>
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
        <p>
            Flight: {flight}
        </p>
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

    return (
        InfoBlock[nick]
    )
};

export default InfoBlock;