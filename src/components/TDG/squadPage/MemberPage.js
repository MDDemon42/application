import styles from './MemberPage.module.css';
import ArmorBlock from './ArmorBlock';
import InfoBlock from './InfoBlock';

import images from '../../../uploads/images';
const { standartBody } = images;

const MemberPage = ({member}) => {
    const {nick_name, id, armor, melee, range, flying, special, level} = member;
    console.log(member)

    return (
        <div className={styles.MemberPage}>
            <InfoBlock nick={nick_name}
                level={level}
                armorTitle={armor.title}
                meleeTitle={melee.title}
                rangeTitle={range.title}
                special={special}
            />
            <div className={styles.MemberPage_ImagesBlock}>
                <img src={standartBody} 
                    className={styles.MemberPage_ImagesBlock_StandartBody}
                    alt='body'
                    title={nick_name}
                />
                <ArmorBlock armor={armor}/>
            </div>
        </div>
    )
};

export default MemberPage;