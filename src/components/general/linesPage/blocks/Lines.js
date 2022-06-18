import React from "react";
import classes from './Lines.module.css';

const Lines = ({amount, direction}) => {
    const linesArray = [];

    let className_line;
    let className_block;
    if (direction === 'vertical') {
        className_line = classes.VerticalLine;
        className_block = classes.VerticalLines_Block;
    } else {
        className_line = classes.HorizontalLine;
        className_block = classes.HorizontalLines_Block;
    }

    for (let i=0; i<amount; i++) {
        const line = React.createElement('div', { className: className_line, key: i}, null);
        linesArray.push(line);
    };

    return (
        <div className={className_block}>
            { linesArray }
        </div>
    )
};

export default Lines;