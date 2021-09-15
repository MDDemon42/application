import classes from "./BookLone.module.css";
import {useState} from "react";

const SaveBookButton = (props) => {
    const {id, bookTitle, bookLastName, bookFirstName, bookCreatedAt, bookImage, isValid} = props
    let newId = id
    if (!newId) {
        newId = Math.floor(Math.random()*100000+Math.random()*100)
    }
    const saveClasses = [classes.buttonSave]
    const [saved,setSaved] = useState(false)
    if (saved) {
        saveClasses.push(classes.grayBackground)
    }
    return (
        <>
            {
                isValid ?
                    <button className={saveClasses.join(' ')}
                            onClick={() => {
                                props.onFunc(newId, bookTitle, bookLastName, bookFirstName, bookCreatedAt, bookImage)
                                setSaved(true)
                                setTimeout(() => setSaved(false),1000)
                            }}
                    >
                        {
                            saved ?
                                <span>
                                    {props.readyText}
                                </span> :
                                <span>
                                    {props.toMakeText}
                                </span>
                        }
                    </button> :
                    <button className={classes.buttonSave + ' ' + classes.grayBackground}
                            style={{cursor:'default'}}
                            disabled
                    >
                        Введите верные значения
                    </button>
            }
        </>
    )
}

export default SaveBookButton