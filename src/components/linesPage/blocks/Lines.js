import React from "react";

const Lines = ({amount, className_line, className_block}) => {
    console.log('rendering lines')

    const linesArray = [];

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