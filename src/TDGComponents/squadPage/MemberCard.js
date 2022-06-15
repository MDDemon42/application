import images from '../../uploads/images';
import styles from './SquadPage.module.css';
const noIcon = images.classIcons.noIcon;

const MemberCard = ({member}) => {
    

    return (
        <div className={styles.SquadModule_MemberCard}>
            <img 
                className={styles.SquadModule_MemberCard_Image}
                src={
                    member ? 
                    member.TDGClass.icon : 
                    noIcon
                } 
                title={
                    member ? 
                    member.nick_name : 
                    'No one'
                }
                alt='icon'
            />
        </div>
    )
};

export default MemberCard;