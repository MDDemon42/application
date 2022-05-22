import React from 'react';
import Button from "react-bootstrap/Button";

const ButtonsDuo = ({increaseValue, decreaseValue, low, high}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Button variant={'success'} 
                    onClick={() => increaseValue()}
                    disabled={high}
            >
                Больше!
            </Button>
            <Button variant={'danger'}  
                    onClick={() => decreaseValue()}
                    disabled={low}
            >
                Меньше
            </Button>
        </div>
    )
};

export default ButtonsDuo;