import React, { useState } from 'react';
import Lines from './Lines';
import ButtonsDuo from './ButtonsDuo';

const ComplexPart = ({props}) => {
    console.log('rendering complex part')
    const {
        amount, 
        changeValue, 
        className_line, 
        className_block, 
        className_part
    } = props;
    
    const [low, setLow] = useState(false);
    const [high, setHigh] = useState(false);

    return (
        <div className={className_part}>
            <Lines amount={amount} 
                    className_line={className_line} 
                    className_block={className_block}
            />
            <ButtonsDuo low={low}
                        high={high}
                        changeValue={changeValue}
            />
        </div>
    )
};

export default ComplexPart;