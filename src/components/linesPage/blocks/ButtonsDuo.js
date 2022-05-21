import React from 'react';
import Button from "react-bootstrap/Button";

const ButtonsDuo = ({changeValue, low, high}) => {
    console.log('rendering buttons duo')
    const increase = () => {
        changeValue( val => val++); 
    };

    const decrease = () => {
        changeValue( val => val--);
    };

    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Button variant={'success'} 
                    onClick={() => increase()}
                    disabled={high}
            >
                Больше!
            </Button>
            <Button variant={'danger'}  
                    onClick={() => decrease()}
                    disabled={low}
            >
                Меньше
            </Button>
        </div>
    )
};

export default ButtonsDuo;