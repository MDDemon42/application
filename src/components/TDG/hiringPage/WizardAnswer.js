import { useEffect } from 'react';
import WizardLetter from './WizardLetter';

const WizardAnswer = ({letters, letterSetters}) => {
    useEffect( () => {
        const inputs = document.querySelectorAll("input");

        inputs.forEach( input => {            
            input.onkeyup = function() {
                if (input.nextSibling) {
                    input.nextSibling.disabled = false;
                    input.nextSibling.focus();
                };
            };

            input.onfocus = function() {
                if (input.value) {
                    if (input.nextSibling) {
                        input.nextSibling.focus();
                    };
                };
            };
        });

        inputs[0].disabled = false;
        inputs[0].focus();
    }, []);

    return (
        <div>
            {
                letters.map( (value, index) => 
                    <WizardLetter 
                        key={index}
                        letter={letters[index]}
                        letterSetter={(e) => letterSetters[index](e.target.value.toUpperCase())}
                    />
                )
            }
        </div>
    )
};

export default WizardAnswer;