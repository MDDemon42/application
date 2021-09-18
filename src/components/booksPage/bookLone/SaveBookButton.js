import classes from "./BookLone.module.css";
import {useState} from "react";
import {getValidationResult} from './bookLoneHelpers'

const SaveBookButton = (props) => {
    const {id, bookTitle, bookLastName, bookFirstName, bookCreatedAt, bookImage} = props.bookData
    const {readyText, toMakeText, func} = props.initialSaveButtonData

    let newId = id ?? Math.floor(Math.random()*100000+Math.random()*100)

    const saveClasses = [classes.buttonSave]
    const [saved,setSaved] = useState(false)
    saved && saveClasses.push(classes.grayBackground)

    const defaultClasses = [classes.buttonSave,classes.grayBackground].join(' ')

    const handlerButtonClick = () => {
        func(newId, bookTitle, bookLastName, bookFirstName, bookCreatedAt, bookImage)
        setSaved(true)
        setTimeout(() => setSaved(false),1000)
    }

    const valid = getValidationResult(bookTitle, bookLastName, bookCreatedAt)

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