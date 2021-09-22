import {useState} from "react";
import Button from "react-bootstrap/Button";
import {getValidationResult} from "../../helpFunctions/helpFunctions";

const SaveAuthorButton = (props) => {
    const {id, itemLastName, itemFirstName} = props.authorData
    const {readyText, toMakeText, func} = props.initialSaveButtonData

    const [saveButtonVariant, setSaveButtonVariant] = useState('success')

    const handlerButtonClick = () => {
        func(id, itemLastName, itemFirstName)
        setSaveButtonVariant('secondary')
        setTimeout(() => setSaveButtonVariant('success'),1000)
    }

    const valid = getValidationResult(itemLastName, itemFirstName)

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
}

export default SaveAuthorButton