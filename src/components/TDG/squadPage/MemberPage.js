import styles from './MemberPage.module.css';
import ImageBlock from './ImageBlock';
import InfoBlock from './InfoBlock';

import images from '../../../uploads/images';
const { 
    standartBody, standartHead, standartLeftHand,
    standartRightHand, horns, leftClaw, rightClaw,
    psiPushLeftHand, psiPushRightHand,
    fireBreathingMouth, cyborgSkull
} = images;

const MemberPage = ({member}) => {
    const {nick_name, id, armor, melee, range, flight, special, level} = member;
    
    if (MemberPage[nick_name]) {
        return MemberPage[nick_name];
    };

    console.log('rendering MemberPage', nick_name);
    console.log(member)

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

    const fireBreathingMouthImage = {
        image: fireBreathingMouth,
        title: 'Fire Breathing Mouth'
    };

    const cyborgSkullImage = {
        image: cyborgSkull,
        title: 'Cyborg Skull'
    };

    MemberPage[nick_name] = <div className={styles.MemberPage}>
        <InfoBlock nick={nick_name}
            level={level}
            armorTitle={armor.title}
            meleeTitle={melee.title}
            rangeTitle={range.title}
            special={special}
            flight={flight.title}
            color={color}
        />
        <div className={styles.MemberPage_ImagesBlock}
            style={{backgroundColor: color}}        
        >
            <img src={standartBody} 
                className={styles.MemberPage_ImagesBlock_StandartBody}
                alt='body'
                title={nick_name}
            />
            {
                member.TDGClass.title === 'Cyborg' &&
                <ImageBlock image={cyborgSkullImage} item={'skull'}/>
            }
            <ImageBlock image={flight} item={'flight'}/>
            <ImageBlock image={armor} item={'armor'}/>

            {
                special[0].title !== 'Fire Breathing' ?
                <ImageBlock image={special[0]} item={'special'}/>:
                <ImageBlock image={fireBreathingMouthImage} item={'special'}/>
            }
            {
                special[1].title !== 'Fire Breathing' ?
                <ImageBlock image={special[1]} item={'special'}/>:
                <ImageBlock image={fireBreathingMouthImage} item={'special'}/>
            }

            {
                range.title !== 'Rocket' ?
                <ImageBlock image={range} item={'range'}/> :
                <>
                    <ImageBlock image={member.TDGClass.abilities.range.basic} item={'range'}/>
                    <ImageBlock image={range} item={'range'}/>
                </>
            }            
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
                    melee.title !== 'Tail with Sting' &&
                    range.title !== 'Laser' &&
                    range.title !== 'Rocket'
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