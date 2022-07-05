import styles from './MemberPage.module.css';
import ImageBlock from './ImageBlock';
import InfoBlock from './InfoBlock';

import images from '../../../uploads/images';
const { standartBody, standartHead } = images;

const MemberPage = ({member}) => {
    const {nick_name, id, armor, melee, range, flying, special, level} = member;
    
    if (MemberPage[nick_name]) {
        return MemberPage[nick_name];
    };

    console.log('rendering MemberPage', nick_name);

    const color = member.TDGClass.color;

    MemberPage[nick_name] = <div className={styles.MemberPage}>
        <InfoBlock nick={nick_name}
            level={level}
            armorTitle={armor.title}
            meleeTitle={melee.title}
            rangeTitle={range.title}
            special={special}
        />
        <div className={styles.MemberPage_ImagesBlock}
            style={{backgroundColor: color}}        
        >
            <img src={standartBody} 
                className={styles.MemberPage_ImagesBlock_StandartBody}
                alt='body'
                title={nick_name}
            />
            <ImageBlock image={armor} item={'armor'}/>
            <img src={standartHead} 
                className={styles.MemberPage_ImagesBlock_StandartHead}
                alt='head'
                title={nick_name}
            />
        </div>
    </div>

    return (
        MemberPage[nick_name]
    )
};

export default MemberPage;