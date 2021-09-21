import classes from "./BookLone.module.css";
import {useState} from "react";
import {getValidationResult} from '../../helpFunctions/helpFunctions'

const SaveBookButton = (props) => {
    const {id,
        itemLastName,
        itemFirstName,
        bookTitle,
        bookCreatedAt,
        bookImage} = props.bookData
    const {readyText, toMakeText, func} = props.initialSaveButtonData

    const saveClasses = [classes.buttonSave]
    const [saved,setSaved] = useState(false)
    saved && saveClasses.push(classes.grayBackground)

    const defaultClasses = [classes.buttonSave,classes.grayBackground].join(' ')

    const handlerButtonClick = () => {
        func(id, bookTitle, itemLastName, itemFirstName, bookCreatedAt, bookImage)
        setSaved(true)
        setTimeout(() => setSaved(false),1000)
    }

    const valid = getValidationResult(bookTitle, itemLastName, bookCreatedAt)

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

export default SaveBookButton