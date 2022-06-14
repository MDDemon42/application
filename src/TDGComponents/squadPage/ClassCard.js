import { connect } from 'react-redux';
import { useState } from 'react';
import AbilityCard from './AbilityCard';
import actions from '../../redux/actions';
import styles from './SquadPage.module.css';
import Button from 'react-bootstrap/Button';
import WizardRiddle from './WizardRiddle';

const ClassCard = ({TDGClass, addTDGClass}) => {
    const keys = Object.keys(TDGClass.TDGClass.abilities);
    const {icon, title, description} =  TDGClass.TDGClass;
    const { available } = TDGClass;

    const [reload, forceReload] = useState(false);
    const [visible, setVisible] = useState(false);
    return (
        <div>
            {
                !available &&
                <div className={styles.SquadPage_ClassesBlock_Shadow}>
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
            <div className={styles.SquadPage_ClassesBlock_ClassHeader}>
                <img src={icon} 
                    alt={'icon'}
                    title={title}
                    className={styles.SquadPage_ClassesBlock_ClassHeader_Icon}
                />
                <div className={styles.SquadPage_ClassesBlock_ClassHeader_Text}>
                    <span className={styles.SquadPage_ClassesBlock_ClassHeader_Text_Header}>
                        {title}
                    </span>
                    <span className={styles.SquadPage_ClassesBlock_ClassHeader_Text_Mass}>
                        {description}
                    </span>
                </div>
            </div>
            <div className={styles.SquadPage_ClassesBlock_AbilitiesPool}>
                {
                    keys.map( singleKey => (
                        <AbilityCard 
                            category={TDGClass.TDGClass.abilities[singleKey]} 
                            key={TDGClass.TDGClass.icon + singleKey}
                        />
                    ))
                }
            </div>
        </div>
    )
};

const { makeTDGClassAvailable } = actions;
function mapDispatchToProps (dispatch) {
    return {
        addTDGClass: TDGClass => dispatch(makeTDGClassAvailable(TDGClass))
    };
};


export default connect(null, mapDispatchToProps)(ClassCard);