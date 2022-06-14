import { connect } from 'react-redux';
import { useState } from 'react';
import actions from '../../redux/actions';
import Button from 'react-bootstrap/Button';
import styles from './SquadPage.module.css';
import WizardAnswer from './WizardAnswer';

const WizardRiddle = ({TDGClass, forceReload, addTDGClass}) => {
    const [letterOne, setLetterOne] = useState('');
    const [letterTwo, setLetterTwo] = useState('');
    const [letterThree, setLetterThree] = useState('');
    const [letterFour, setLetterFour] = useState('');
    const [letterFive, setLetterFive] = useState('');
    const [letterSix, setLetterSix] = useState('');
    const [letterSeven, setLetterSeven] = useState('');

    const letters = [
        letterOne, letterTwo, letterThree, letterFour, letterFive, letterSix, letterSeven
    ];

    const letterSetters = [
        setLetterOne, setLetterTwo, setLetterThree, setLetterFour, setLetterFive, setLetterSix, setLetterSeven
    ];

    const approveDisabling = () => {
        const sumLength = letters.reduce( (length, letter) => {
            return length + letter.length;
        }, 0);

        if (sumLength === 7) {
            return false
        };

        return true
    };

    const denyDisabling = () => {
        let sumLength = letters.reduce( (length, letter) => {
            return length + letter.length;
        }, 0);

        if (sumLength) {
            return false
        };

        return true
    };

    const denying = () => {
        letterSetters.forEach( letterSetter => letterSetter(''));

        const inputs = document.querySelectorAll("input");
        inputs.forEach( input => input.disabled = true);
        inputs[0].disabled = false;
        inputs[0].focus();
    };

    const answerValidation = () => {
        const answer = letters.reduce( (initialAnswer, letter) => {
            return initialAnswer + letter;
        }, '');

        if (answer === 'RAINBOW') {
            addTDGClass(TDGClass);
            forceReload();
        } else {
            denying();
        };
    };

    return (
        <div className={styles.SquadPage_WizardRiddle}>
            <span className={styles.SquadPage_WizardRiddle_Text}>
                RAINBOW or UNICORN?
            </span>
            <WizardAnswer
                letters={letters}
                letterSetters={letterSetters}
            />
            <div className={styles.SquadPage_WizardRiddle_Buttons}>
                <Button variant={'success'}
                        disabled={approveDisabling()}
                        onClick={answerValidation}
                        className={styles.SquadPage_WizardRiddle_Buttons_Button}
                >
                    Approve!
                </Button>
                <Button variant={'danger'}
                        disabled={denyDisabling()}
                        onClick={denying}
                        className={styles.SquadPage_WizardRiddle_Buttons_Button}
                >
                    Deny!
                </Button>
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

export default connect(null, mapDispatchToProps)(WizardRiddle);