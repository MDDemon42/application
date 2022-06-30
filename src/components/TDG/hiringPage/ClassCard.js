import { useState } from 'react';
import { connect } from 'react-redux';
import AbilityCard from './AbilityCard';
import styles from './ClassCard.module.css';
import Button from 'react-bootstrap/Button';
import WizardRiddle from './wizardRiddleModule/WizardRiddle';
import HiringCard from './HiringCard';
import ClassCardHeader from './ClassCardHeader';

const ClassCard = ({TDGClass, TDGSquad}) => {
    const keys = Object.keys(TDGClass.TDGClass.abilities);
    const {icon, title, description, price, color} =  TDGClass.TDGClass;
    const { available } = TDGClass;
    const {money, members} = TDGSquad;

    const hiringIsPossible = (members[6].level < 0) || (members[7].level < 0) || (members[8].level < 0);

    const [reload, forceReload] = useState(false);
    const [visible, setVisible] = useState(false);
    const [hiring, setHiring] = useState(false);

    return (
        <div className={styles.ClassCard}>
            {
                !available &&
                <div className={styles.ClassCard_Shadow}>
                    {
                        visible ?
                        <WizardRiddle 
                            TDGClass={TDGClass}
                            forceReload={() => forceReload(!reload)}
                        /> :
                        <Button variant={'success'}
                                onClick={() => {
                                    setVisible(true)
                                }}
                        >
                            Try to make available
                        </Button>
                    }
                </div>
            }
            <ClassCardHeader 
                icon={icon} 
                title={title}
                description={description}
            />
            <div className={styles.ClassCard_AbilitiesPool}>
                {
                    keys.map( singleKey => (
                        <AbilityCard 
                            category={TDGClass.TDGClass.abilities[singleKey]} 
                            key={TDGClass.TDGClass.icon + singleKey}
                            color={color}
                        />
                    ))
                }
            </div>
            <div className={styles.ClassCard_PriceBlock}>
                <Button variant={'success'}
                    className={styles.ClassCard_PriceBlock_HireButton}
                    disabled={ (money < price) || !available || !hiringIsPossible}
                    onClick={ () => setHiring(true) }
                >
                    Hire!
                </Button>
                <span style={{color: (money < price) && 'red'}}>
                    {price} coins
                </span>
            </div>
            
            {
                hiring && 
                    <HiringCard 
                        TDGClass={TDGClass.TDGClass}
                        onClose={() => setHiring(false)}
                    />
            }
        </div>
    )
};

function mapStateToProps (state) {
    return {
        TDGSquad: state.TDGSquadReducer.TDGSquad
    };
};

export default connect(mapStateToProps, null)(ClassCard);