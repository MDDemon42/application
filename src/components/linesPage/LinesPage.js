import React, { useEffect } from 'react';
import classes from './LinesPage.module.css';

import loadable from '@loadable/component';
// active loading
const ComplexPart = loadable( () =>
    import(/*webpackChunkName: "ComplexPart"*/ './blocks/ComplexPart'));

// passive preloading
const ButtonsDuo = loadable( () =>
    import(/*webpackChunkName: "ButtonDuo"*/ './blocks/ButtonsDuo'));
const Lines = loadable( () =>
    import(/*webpackChunkName: "Lines"*/ './blocks/Lines'));
const InnerCircle = loadable( () =>
    import(/*webpackChunkName: "InnerCircle"*/ './blocks/InnerCircle'));
const preload = component => component.preload && component.preload();

const LinesPage = () => {
    useEffect( () => {
        preload(ButtonsDuo);
        preload(Lines);
        preload(InnerCircle);
    }, []);

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