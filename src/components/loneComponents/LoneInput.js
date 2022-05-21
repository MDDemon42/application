import React, {useCallback} from "react";

const LoneInput = ({value, name, handler, className='', text}) => {
    return (
        <div>
            <p>
                {text}
            </p>
            <input value={value}
                   name={name}
                   type={'text'}
                   className={className}
                   onChange={useCallback(event => handler(event.target.value), [])}
            />
        </div>
    )
};

export default LoneInput;