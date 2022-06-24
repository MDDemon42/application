import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
// import { useState } from 'react';
import actions from '../../../redux/actions';
import styles from '../squadPage/SquadPage.module.css';
import Button from 'react-bootstrap/Button';
import commonAbilities from '../functions/TDGClasses/common/commonAbilities';
import deepClone from '../functions/more/deepClone';
// import PerksOnLevelUp from './PerksOnLevelUp';
import LoneAbility from './LoneAbility';

const HiringCard = ({TDGClass, onClose, onAdd, members}) => {
    const history = useHistory();

    const reserveMembers = [members[6], members[7], members[8]];
    const id = reserveMembers.find( member => member.level < 0).id;

    const {abilities, price, possibleNickNames} = TDGClass;
    const randomNumber = Math.floor(Math.random()*(possibleNickNames.length));
    const nick_name = possibleNickNames[randomNumber];

    // const startPacks = [];
    const possiblePerks = [];

    const startAbilities = deepClone(commonAbilities);
    
    const keys = Object.keys(abilities).filter( key => key !== 'special' && key !== 'flight');
    keys.forEach( key => {
        const perk = abilities[key].basic;
        if (perk) {
            possiblePerks.push({
                category: key,
                perk
            })
            // startPacks.push({
            //     category: key,
            //     perk,
            //     setter: null
            // });
        } else {
            startAbilities[key].basic = null;
        }
    });

    // const [startMelee, setStartMelee] = useState(startAbilities.melee.basic);
    // const [startArmor, setStartArmor] = useState(startAbilities.armor.basic);
    // const [startRange, setStartRange] = useState(startAbilities.range.basic);

    let startMelee = startAbilities.melee.basic;
    let startArmor = startAbilities.armor.basic;
    let startRange = startAbilities.range.basic;

    const randomPerkNumber = Math.floor(Math.random()*possiblePerks.length);
    const randomPerk = possiblePerks[randomPerkNumber];

    switch (randomPerk.category) {
        case 'melee':
            startMelee = randomPerk.perk;
            break;
        case 'range':
            startRange = randomPerk.perk;
            break;
        case 'armor':
            startArmor = randomPerk.perk;
            break;
        default:
            break;
    };

    // function meleeSetter(perk) {
    //     setStartMelee(perk);
    //     setStartArmor(startAbilities.armor.basic);
    //     setStartRange(startAbilities.range.basic);
    // };

    // function armorSetter(perk) {
    //     setStartMelee(startAbilities.melee.basic);
    //     setStartArmor(perk);
    //     setStartRange(startAbilities.range.basic);
    // };

    // function rangeSetter(perk) {
    //     setStartMelee(startAbilities.melee.basic);
    //     setStartArmor(startAbilities.armor.basic);
    //     setStartRange(perk);
    // };

    // startPacks.forEach( pack => {
    //     switch (pack.category) {
    //         case 'melee':
    //             pack.setter = meleeSetter;
    //             break;
    //         case 'range':
    //             pack.settet = rangeSetter;
    //             break;
    //         case 'armor':
    //             pack.setter = armorSetter;
    //             break;
    //         default:
    //             break;
    //     };
    // })

    return (
        <div className={styles.SquadPage_HiringCard}>
            <span className={styles.SquadPage_HiringCard_Header}>
                {/* Choose starting perk */}
                You're hiring:
            </span>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span>
                    {'«' + nick_name + '»'}
                </span>
                <span>
                    with
                </span>
                <LoneAbility level={randomPerk.perk}/>
            </div>
            {/* <PerksOnLevelUp perkPack={startPacks}/> */}
            <div className={styles.SquadPage_HiringCard_Buttons}>
                <Button
                    variant={'success'}
                    onClick={ () => {
                        onAdd(
                            price, id, 1, nick_name, TDGClass, startMelee,
                            startArmor, startRange,
                            startAbilities.flight.basic,
                            startAbilities.special.basic
                        );
                        onClose();
                        setTimeout(() => history.goBack(), 1000);
                        }
                    }
                >
                    Hire!
                </Button>
                <Button 
                    variant={'danger'}
                    onClick={() => onClose()}
                >
                    Nah
                </Button>
            </div>
            
        </div>
    )
};

function mapStateToProps (state) {
    return {
        members: state.TDGSquadReducer.TDGSquad.members
    };
};

const { addMember } = actions;
function mapDispatchToProps (dispatch) {
    return {
        onAdd: (price, id, level, nick_name, TDGClass, melee, armor, range, flight, special) => dispatch(
                addMember(price, id, level, nick_name, TDGClass, melee, armor, range, flight, special)
            )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HiringCard);