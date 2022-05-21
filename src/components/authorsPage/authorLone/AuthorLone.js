import {connect} from 'react-redux';
import classes from './AuthorLone.module.css';
import React, {useState, Suspense} from "react";
import actions from "../../../redux/actions";
import helpFunctions from '../../helpFunctions';
import C from '../../../redux/constants';

import loadable from '@loadable/component'
// active loading
const SaveButton = loadable( () =>
    import(/*webpackChunkName: "SaveAuthorButton"*/ '../../loneComponents/SaveButton'));
const DeleteButton = loadable( () =>
    import(/*webpackChunkName: "DeleteButton"*/ '../../loneComponents/DeleteButton'));
const LoneInput = loadable( () =>
    import(/*webpackChunkName: "LoneInput"*/ '../../loneComponents/LoneInput'));
const LoneDeleted = loadable( () =>
    import(/*webpackChunkName: "LoneDeleted"*/ '../../loneComponents/LoneDeleted'));


const AuthorLone = (props) => {
    const {
        setStartingItemData,
        setSaveButtonData,
        setFinalItemData
    } = helpFunctions;

    const theAuthor = setStartingItemData(props.match.params.id, props.authors, C.AUTHOR);

    const [deleted, setDeleted] = useState(false);

    const [authorLastName, setAuthorLastName] = useState(theAuthor.last_name);
    const [authorFirstName, setAuthorFirstName] = useState(theAuthor.first_name);

    const creation = props.match.path === C.authorCreationURL;
    const initialSaveButtonData = setSaveButtonData(props.onSave, props.onAdd, creation, C.AUTHOR);

    const authorData = setFinalItemData(C.AUTHOR, theAuthor.id, authorLastName, authorFirstName);

    if (deleted) {
        return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <LoneDeleted text={'Автор удалён'}
                         className={classes.AuthorLone}
            />
        </Suspense>
        )
    };

    const onDeleteButtonClick = () => {
        props.onDelete(theAuthor.id)
        setDeleted(true)
    };

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
                <SaveButton itemData={authorData}
                            initialSaveButtonData={initialSaveButtonData}
                            type={C.AUTHOR}
                />
                {
                    !creation && 
                    <DeleteButton delFunction={onDeleteButtonClick}
                                    delText={'Удалить автора'}
                    />
                }
            </span>
        </div>
    );
};

function mapStateToProps (state) {
    return {
        authors: state.authorReducer.authors
    };
};

const {addAuthor, delAuthor, saveAuthor} = actions;
function mapDispatchToProps (dispatch) {
    return {
        onDelete: id => dispatch(delAuthor(id)),
        onSave: (id,last_name,first_name) => dispatch(saveAuthor(id,last_name,first_name)),
        onAdd: (id,last_name,first_name) => dispatch(addAuthor(id,last_name,first_name))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(AuthorLone);