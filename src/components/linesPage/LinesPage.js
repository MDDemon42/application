import React, { useState } from 'react';
import classes from './LinesPage.module.css';
import ComplexPart from './blocks/ComplexPart';

const LinesPage = () => {
    const [verticalLines, setVerticalLines] = useState(3);
    const [horizontalLines, setHorizontalLines] = useState(3);

    const verticalProps = {
        amount: verticalLines,
        changeValue: () => setVerticalLines,
        className_line: classes.VerticalLine,
        className_block: classes.VerticalLines_Block,
        className_part: classes.ComplexPart
    };

    const horizontalProps = {
        amount: horizontalLines,
        changeValue: () => setHorizontalLines,
        className_line: classes.HorizontalLine,
        className_block: classes.HorizontalLines_Block,
        className_part: classes.ComplexPart
    };

    return (
        <div className={classes.LinesPage}>
            <h1>
                Отыграйтесь на линиях
            </h1>
            <div className={classes.LinesPage_Block}>
                <ComplexPart props={verticalProps}/>
                <ComplexPart props={horizontalProps}/>
            </div>
            
        </div>
    )
};

export default LinesPage;