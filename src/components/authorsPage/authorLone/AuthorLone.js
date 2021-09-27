import {connect} from 'react-redux'
import classes from './AuthorLone.module.css'
import React, {useState, lazy, Suspense} from "react";
import Button from "react-bootstrap/Button";
import {addAuthor, delAuthor, saveAuthor} from "../../../redux/actions";
import {
    setFinalItemData,
    setSaveButtonData,
    setStartingItemData
} from "../../helpFunctions/helpFunctions";
import C from '../../../redux/constants'

import loadable from '@loadable/component'
// active loading
const SaveAuthorButton = loadable( () =>
    import(/*webpackChunkName: "SaveAuthorButton"*/ './SaveAuthorButton'))
const LoneInput = loadable( () =>
    import(/*webpackChunkName: "LoneInput"*/ '../../helpFunctions/LoneInput'))
const LoneDeleted = loadable( () =>
    import(/*webpackChunkName: "LoneDeleted"*/ '../../helpFunctions/LoneDeleted'))


const AuthorLone = (props) => {
    const theAuthor = setStartingItemData(props.match.params.id, props.authors, C.AUTHOR)

    const [deleted, setDeleted] = useState(false)

    const [authorLastName, setAuthorLastName] = useState(theAuthor.last_name)
    const [authorFirstName, setAuthorFirstName] = useState(theAuthor.first_name)

    const creation = props.match.path === C.authorCreationURL
    const initialSaveButtonData = setSaveButtonData(props.onSave, props.onAdd, creation, 'author')

    const authorData = setFinalItemData(C.AUTHOR, theAuthor.id, authorLastName, authorFirstName)

    if (deleted)
        return <Suspense fallback={<div>Загрузка...</div>}>
            <LoneDeleted text={'Автор удалён'}
                         className={classes.AuthorLone}
            />
    </Suspense>

    return (
        <div className={classes.AuthorLone}>
            <LoneInput value={authorLastName}
                       name={'authorLastName'}
                       handler={setAuthorLastName}
                       text={'Фамилия автора:'}
            />
            <LoneInput value={authorFirstName}
                       name={'authorFirstName'}
                       handler={setAuthorFirstName}
                       text={'Имя автора:'}
            />
            <span className={classes.buttonDiv}>
                <SaveAuthorButton authorData={authorData}
                                  initialSaveButtonData={initialSaveButtonData}
                />
                {
                    !creation && <Button onClick={() => {
                        props.onDelete(theAuthor.id)
                        setDeleted(true)
                    }}
                                         variant={'danger'}
                    >
                        Удалить автора
                    </Button>
                }
            </span>
        </div>
    )
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