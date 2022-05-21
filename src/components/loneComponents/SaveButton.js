import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import helpFunctions from "../helpFunctions";
import C from '../../redux/constants';

const SaveButton = ({itemData, initialSaveButtonData, type}) => {
    const { getValidationResult } = helpFunctions;
    
    const {itemLastName, itemFirstName} = itemData;
    const {readyText, toMakeText, func} = initialSaveButtonData;
    let valid = false;

    if (type === C.BOOK) {
        const {bookTitle, bookCreatedAt} = itemData;
        valid = getValidationResult(bookTitle, itemLastName, bookCreatedAt);
    } else {
        valid = getValidationResult(itemLastName, itemFirstName);
    };

    const [saved, setSaved] = useState(false);

    const history = useHistory();

    const handlerButtonClick = () => {
        console.log(itemData, ...Object.values(itemData))
        func(...Object.values(itemData));
        setSaved(true);
        setTimeout(() => history.goBack(), 1000);
    };

    return (
        <>  
            <Button variant={valid ? 'success' : 'secondary'}
                    disabled={!valid || saved}
                    onClick={() => handlerButtonClick()}
            >
                {
                    !valid ? 
                        <span>
                            Введите верные значения
                        </span> :
                    saved ?
                        <span>
                            {readyText}
                        </span> :
                        <span>
                            {toMakeText}
                        </span>
                }
            </Button>            
        </>
    )
};

export default SaveButton;