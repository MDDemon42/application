import classes from "./AuthorLone.module.css";
import {useState} from "react";
import {getValidationResult} from "../../helpFunctions/helpFunctions";

const SaveAuthorButton = (props) => {
    const {id, itemLastName, itemFirstName} = props.authorData
    const {readyText, toMakeText, func} = props.initialSaveButtonData

    const saveClasses = [classes.buttonSave]
    const [saved,setSaved] = useState(false)
    saved && saveClasses.push(classes.grayBackground)

    const defaultClasses = [classes.buttonSave,classes.grayBackground].join(' ')

    const handlerButtonClick = () => {
        func(id, itemLastName, itemFirstName)
        setSaved(true)
        setTimeout(() => setSaved(false),1000)
    }

    const valid = getValidationResult(itemLastName, itemFirstName)

    return (
        <>
            {
                valid ?
                    <button className={saveClasses.join(' ')}
                            onClick={() => handlerButtonClick()}
                    >
                        {
                            saved ?
                                <span>
                        {readyText}
                    </span> :
                                <span>
                        {toMakeText}
                    </span>
                        }
                    </button> :
                    <button className={defaultClasses}
                            disabled
                    >
                        Введите верные значения
                    </button>
            }
        </>
    )
}

export default SaveAuthorButton