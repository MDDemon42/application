import React from 'react';
import classes from './Lines.module.css';

const InnerCircle = ({low, high}) => {
    console.log('rendering circle');
    let circleClasses = [classes.InnerCircle];
    if (low) {
        circleClasses.push(classes.InnerCircle__OnLow)
    };
    if (high) {
        circleClasses.push(classes.InnerCircle__OnHigh)
    };

    return (
        <div className={circleClasses.join(' ')}>

        </div>
    )
};

export default React.memo(InnerCircle);