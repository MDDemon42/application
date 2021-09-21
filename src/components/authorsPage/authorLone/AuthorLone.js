import {connect} from 'react-redux'
import classes from './AuthorLone.module.css'
import {useState} from "react";
import SaveAuthorButton from "./SaveAuthorButton";
import {addAuthor, delAuthor, saveAuthor} from "../../../redux/actions";
import {
    setFinalItemData,
    setSaveButtonData,
    setStartingItemData
} from "../../helpFunctions/helpFunctions";
import C from '../../../redux/constants'

const emptyAuthor = {
    first_name:'',
    last_name:''
}

const AuthorLone = (props) => {
    const theAuthor = setStartingItemData(props.match.params.id, props.authors, C.AUTHOR)

    const [authorLastName, setAuthorLastName] = useState(theAuthor.last_name)
    const [authorFirstName, setAuthorFirstName] = useState(theAuthor.first_name)

    const creation = props.match.path === C.authorCreationURL
    const initialSaveButtonData = setSaveButtonData(props.onSave, props.onAdd, creation, 'author')

    const authorData = setFinalItemData(C.AUTHOR, theAuthor.id, authorLastName, authorFirstName)

    if (theAuthor || creation) {
        return (
            <div className={classes.AuthorLone}>
                <div>
                    <p>
                        Фамилия автора:
                    </p>
                    <input value={authorLastName}
                           type={'text'}
                           onChange={e => setAuthorLastName(e.target.value)}
                    />
                </div>
                <div>
                    <p>
                        Имя автора:
                    </p>
                    <input value={authorFirstName}
                           type={'text'}
                           onChange={e => setAuthorFirstName(e.target.value)}
                    />
                </div>
                <span className={classes.buttonDiv}>
                    <SaveAuthorButton authorData={authorData}
                                      initialSaveButtonData={initialSaveButtonData}
                    />
                    {
                        !creation ?
                            <button onClick={() => props.onDelete(theAuthor.id)}
                                    className={classes.buttonDel}
                            >
                                Удалить автора
                            </button> :
                            null
                    }
                </span>
            </div>
        )
    } else {
        return (
            <div className={classes.AuthorLone}>
                <h1>
                    Автор удалён
                </h1>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        authors: state.authorReducer.authors
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onDelete: id => dispatch(delAuthor(id)),
        onSave: (id,last_name,first_name) => dispatch(saveAuthor(id,last_name,first_name)),
        onAdd: (id,last_name,first_name) => dispatch(addAuthor(id,last_name,first_name))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthorLone)