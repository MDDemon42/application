import React, { useState } from 'react';
import Lines from './Lines';
import ButtonsDuo from './ButtonsDuo';
import classes from './Lines.module.css';
import InnerCircle from './InnerCircle';

const ComplexPart = ({direction}) => {
    const [amount, setAmount] = useState(3);
    const [low, setLow] = useState(false);
    const [high, setHigh] = useState(false);

    const increaseValue = () => {
        setAmount(amount + 1);
        if (amount === 9) {
            setHigh(true)
        } else {
            setHigh(false)
        };
        setLow(false);
    };
    const decreaseValue = () => {
        setAmount(amount - 1);
        if (amount === 1) {
            setLow(true)
        } else {
            setLow(false)
        };
        setHigh(false);
    };
    
    return (
        <div className={classes.ComplexPart}>
            <Lines amount={amount} direction={direction}/>
            <InnerCircle low={low} high={high}/>
            <ButtonsDuo low={low}
                        high={high}
                        increaseValue={increaseValue}
                        decreaseValue={decreaseValue}
            />
        </div>
    )
};

export default ComplexPart;