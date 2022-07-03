import styles from './ArmorBlock.module.css';

function armorStyle (title) {
    const style = [styles.armor]; 

    switch (title) {
        case 'Steel Armor':
            style.push(styles.SteelArmorStyle);
            break
        case 'Leather Armor':
            style.push(styles.LeatherArmorStyle);
            break
        case 'Nothing':
            style.push(styles.NothingStyle);
            break
        case 'Nano Vest':
            style.push(styles.NanoVestStyle);
            break
        case 'Nano Matrix':
            style.push(styles.NanoMatrixStyle);
            break
        case 'Fur':
            style.push(styles.FurStyle);
            break
        case 'Scales':
            style.push(styles.ScalesStyle);
            break
        case 'Defensive Charms':
            style.push(styles.DefensiveCharmsStyle);
            break
        case 'Guardian Aura':
            style.push(styles.GuardianAuraStyle);
            break
        case 'Titan Skin Ritual':
            style.push(styles.TitanSkinRitualStyle);
            break
        default:
            break              
    };

    return style.join(' ')
};

const ArmorBlock = ({armor}) => {
    if (ArmorBlock[armor.title]) {
        return ArmorBlock[armor.title];
    };
    
    console.log('rendering ArmorBlock', armor.title);

    ArmorBlock[armor.title] = <img src={armor.image}
            className={armorStyle(armor.title)}
            alt='armor'
            title={armor.title}
        />

    return (
        ArmorBlock[armor.title]
    )
};

export default ArmorBlock;