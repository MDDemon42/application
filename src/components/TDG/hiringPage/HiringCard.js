import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
// import { useState } from 'react';
import actions from '../../../redux/actions';
import styles from './HiringCard.module.css';
import Button from 'react-bootstrap/Button';
// import PerksOnLevelUp from './PerksOnLevelUp';
// import LoneAbility from './LoneAbility';
import createTDGCharacterOnHire from '../functions/more/createTDGCharacterOnHire';

const HiringCard = ({TDGClass, onClose, onAdd, members}) => {
    console.log('rendering HiringCard')
    const history = useHistory();

    const reserveMembers = [members[6], members[7], members[8]];
    const id = reserveMembers.find( member => member.level < 0).id;

    const {price, possibleNickNames} = TDGClass;
    const randomNumber = Math.floor(Math.random()*(possibleNickNames.length));
    const nick_name = possibleNickNames[randomNumber];

    const {character, startingAbility} = createTDGCharacterOnHire(nick_name, TDGClass);
    // console.log(character)

    return (
        <div className={styles.HiringCard}>
            <span className={styles.HiringCard_Header}>
                You're hiring:
            </span>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span>
                    «{nick_name}» 
                    {/* What is going on??? */}
                </span>
                <span>
                    with {startingAbility.title}
                </span>
                {/* <LoneAbility level={randomPerk.perk}/> */}
            </div>
            {/* <PerksOnLevelUp perkPack={character.Packs}/> */}
            <div className={styles.HiringCard_Buttons}>
                <Button
                    variant={'success'}
                    onClick={ () => {
                        onAdd(
                            price, id, 1, nick_name, TDGClass, character.melee,
                            character.armor, character.range,
                            character.flight,
                            character.special
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