import images from '../../../uploads/images';
import styles from '../SquadPage.module.css';
const noIcon = images.classIcons.noIcon;

const MemberCard = ({member}) => {

    let meleeText;
    let armorText;
    let rangeText;
    let flightText;
    let nickName;
    let titleText = 'No one';

    if (member.level > 0) {
        meleeText = 'Melee: ' + member.melee.level;
        armorText = 'Armor: ' + member.armor.level;
        rangeText = 'Range: ' + member.range.level;
        flightText = 'Flight: ' + member.flight.level;
        nickName = '«' + member.nick_name + '»';
        titleText = nickName + '\n' + meleeText + '\n' + armorText + '\n' + flightText + '\n' + rangeText;
    };    

    return (
        <div className={styles.SquadModule_MemberCard}>
            <img 
                className={styles.SquadModule_MemberCard_Image}
                src={
                    member.level > 0 ? 
                    member.TDGClass.icon : 
                    noIcon
                } 
                title={titleText}
                alt='icon'
            />
        </div>
    )
};

export default MemberCard;