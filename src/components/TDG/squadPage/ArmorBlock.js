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
        case 'Nano Matrix':
            style.push(styles.NanoMatrixStyle);
            break
        case 'Scales':
            style.push(styles.ScalesStyle);
            break
        default:
            break              
    };

    return style.join(' ')
};

const ArmorBlock = ({armor}) => {

    return (
        <img src={armor.image}
            className={armorStyle(armor.title)}
            alt='armor'
            title={armor.title}
        />
    )
};

export default ArmorBlock;