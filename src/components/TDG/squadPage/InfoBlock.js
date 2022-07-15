import styles from './InfoBlock.module.css';

const InfoBlock = (
    {
        nick, level, armorTitle, meleeTitle, 
        rangeTitle, special, flight, color
    }
) => {
    if (InfoBlock[nick]) {
        return InfoBlock[nick];
    };

    console.log('rendering InfoBlock', nick);

    const spanStyle = {textShadow: '1px 1px ' + color, color: 'black'};

    InfoBlock[nick] = <div className={styles.InfoBlock}>
        <h4 style={spanStyle}>
            {nick}
        </h4>
        <p>
            <span className={styles.InfoBlock_Category}>
                Level:
            </span> 
            <span style={spanStyle}>
                {level}
            </span>
        </p>
        <p>
            <span className={styles.InfoBlock_Category}>
                Armor:
            </span>
            <span style={spanStyle}>
                {armorTitle}
            </span>
        </p>
        <div>
            <p className={styles.InfoBlock_Category}>
                Weapon:
            </p>
            <ul>
                <li>
                    <span className={styles.InfoBlock_Category}>
                        In melee:
                    </span>
                    <span style={spanStyle}>
                        {meleeTitle}
                    </span>
                </li>
                <li>
                    <span className={styles.InfoBlock_Category}>
                        In range:
                    </span>
                    <span style={spanStyle}>
                        {rangeTitle}
                    </span>
                </li>
            </ul>
        </div>
        <p>
            <span className={styles.InfoBlock_Category}>
                Flight:
            </span>
            <span style={spanStyle}>
                {flight}
            </span>
        </p>
        {
            (special[0].level + special[1].level > 0) &&
            <div>
                <p className={styles.InfoBlock_Category}>
                    Special:
                </p>
                <ul>
                    {
                        special[0].level > 0 &&
                            <li>
                                <span style={spanStyle}>{special[0].title}</span>
                            </li>
                    }
                    {
                        special[1].level> 0 &&
                            <li>
                                <span style={spanStyle}>{special[1].title}</span>
                            </li>
                    }
                </ul>
            </div>
        }
    </div>

    return (
        InfoBlock[nick]
    )
};

export default InfoBlock;