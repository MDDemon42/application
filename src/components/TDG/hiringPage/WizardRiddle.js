import { connect } from 'react-redux';
import { useState } from 'react';
import actions from '../../../redux/actions';
import Button from 'react-bootstrap/Button';
import styles from './WizardRiddle.module.css';
import WizardAnswer from './WizardAnswer';

import denyDisabling from '../functions/more/denyDisabling';
import approveDisabling from '../functions/more/approveDisabling';

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

    const denying = () => {
        letterSetters.forEach( letterSetter => letterSetter(''));

        const inputs = document.querySelectorAll("input");
        inputs.forEach( input => input.disabled = true);
        inputs[0].disabled = false;
        inputs[0].focus();
    };

    const answerValidation = (letters) => {
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
        <div className={styles.WizardRiddle}>
            <span className={styles.WizardRiddle_Text}>
                RAINBOW or UNICORN?
            </span>
            <WizardAnswer
                letters={letters}
                letterSetters={letterSetters}
            />
            <div className={styles.WizardRiddle_Buttons}>
                <Button variant={'success'}
                        disabled={approveDisabling(letters)}
                        onClick={answerValidation}
                >
                    Approve!
                </Button>
                <Button variant={'danger'}
                        disabled={denyDisabling(letters)}
                        onClick={denying}
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