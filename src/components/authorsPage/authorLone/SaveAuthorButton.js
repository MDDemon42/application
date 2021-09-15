import classes from "./AuthorLone.module.css";
import {useState} from "react";

const SaveAuthorButton = (props) => {
    const {id, authorLastName, authorFirstName} = props
    let newId = id
    if (!newId) {
        newId = Math.floor(Math.random()*1000 + Math.random()*10)
    }
    const saveClasses = [classes.buttonSave]
    const [saved,setSaved] = useState(false)
    if (saved) {
        saveClasses.push(classes.grayBackground)
    }

    return (
        <button className={saveClasses.join(' ')}
                onClick={() => {
                    props.onFunc(newId, authorLastName, authorFirstName)
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
        </button>
    )
}

export default SaveAuthorButton