import React from 'react';
import classes from './LinesPage.module.css';
import ComplexPart from './blocks/ComplexPart';

const LinesPage = () => {
    return (
        <div className={classes.LinesPage}>
            <h1>
                Отыграйтесь на линиях
            </h1>
            <div className={classes.LinesPage_Block}>
                <ComplexPart direction={'vertical'}/>
                <ComplexPart direction={'horizontal'}/>
            </div>
            
        </div>
    )
};

export default LinesPage;