import {useState} from "react";
import helpFunctions from '../../helpFunctions';
import Button from "react-bootstrap/Button";

const SaveBookButton = (props) => {
    const { getValidationResult } = helpFunctions;

    const {id,
        itemLastName,
        itemFirstName,
        bookTitle,
        bookCreatedAt,
        bookImage} = props.bookData;

    const {readyText, toMakeText, func} = props.initialSaveButtonData;

    const [saveButtonVariant, setSaveButtonVariant] = useState('success');

    const handlerButtonClick = () => {
        func(id, bookTitle, itemLastName, itemFirstName, bookCreatedAt, bookImage);
        setSaveButtonVariant('secondary');
        setTimeout(() => setSaveButtonVariant('success'),1000);
    };

    const valid = getValidationResult(bookTitle, itemLastName, bookCreatedAt);

    return (
        <>
            {
                 valid ?
                    <Button variant={saveButtonVariant}
                            onClick={() => handlerButtonClick()}
                    >
                        {
                            saveButtonVariant === 'secondary' ?
                                <span>
                                    {readyText}
                                </span> :
                                <span>
                                    {toMakeText}
                                </span>
                        }
                    </Button> :
                    <Button variant={'secondary'}
                            disabled
                    >
                        Введите верные значения
                    </Button>
            }
        </>
    )
};

export default SaveBookButton;