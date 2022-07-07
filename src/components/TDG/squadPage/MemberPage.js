import styles from './MemberPage.module.css';
import ImageBlock from './ImageBlock';
import InfoBlock from './InfoBlock';

import images from '../../../uploads/images';
const { 
    standartBody, standartHead, standartLeftHand,
    standartRightHand, horns, leftClaw, rightClaw,
    psiPushLeftHand, psiPushRightHand
} = images;

const MemberPage = ({member}) => {
    const {nick_name, id, armor, melee, range, flying, special, level} = member;
    
    if (MemberPage[nick_name]) {
        return MemberPage[nick_name];
    };

    console.log('rendering MemberPage', nick_name);

    const color = member.TDGClass.color;

    const hornsImage = {
        image: horns,
        title: 'Horns'
    };

    const leftClawImage = {
        image: leftClaw,
        title: 'Left Claw'
    };

    const rightClawImage = {
        image: rightClaw,
        title: 'Right Claw'
    };

    const psiPushLeftHandImage = {
        image: psiPushLeftHand,
        title: 'Psi Push Left Hand'
    };

    const psiPushRightHandImage = {
        image: psiPushRightHand,
        title: 'Psi Push Right Hand'
    };

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
            { 
                (
                    melee.title !== 'Power Fist' &&
                    melee.title !== 'Energy Whip' &&
                    melee.title !== 'Psi-Push' &&
                    melee.title !== 'Claws and Horns' &&
                    melee.title !== 'Tail with Sting'
                ) &&
                <img src={standartLeftHand} 
                    className={styles.MemberPage_ImagesBlock_StandartLeftHand}
                    alt='leftHand'
                    title={nick_name}
                />
            }
            {
                (
                    melee.title !== 'Psi-Push' &&
                    melee.title !== 'Claws and Horns' &&
                    melee.title !== 'Tail with Sting'
                ) &&
                <img src={standartRightHand} 
                    className={styles.MemberPage_ImagesBlock_StandartRightHand}
                    alt='rightHand'
                    title={nick_name}
                />
            }
            
            {
                (
                    melee.title !== 'Psi-Push' &&
                    melee.title !== 'Claws and Horns'
                ) &&
                <ImageBlock image={melee} item={'melee'}/>
            }
        
            {
                (
                    melee.title === 'Tail with Sting' ||
                    melee.title === 'Claws and Horns'
                ) && (
                <>
                    <ImageBlock image={hornsImage} item={'melee'}/>
                    <ImageBlock image={leftClawImage} item={'melee'}/>
                    <ImageBlock image={rightClawImage} item={'melee'}/>
                </>
                )
            }

            {
                (
                    melee.title === 'Psi-Push'
                ) && (
                <>
                    <ImageBlock image={psiPushLeftHandImage} item={'melee'}/>
                    <ImageBlock image={psiPushRightHandImage} item={'melee'}/>
                </>
                )
            }
        </div>
    </div>

    return (
        MemberPage[nick_name]
    )
};

export default MemberPage;