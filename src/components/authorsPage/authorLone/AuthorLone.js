import {connect} from 'react-redux'
import classes from './AuthorLone.module.css'
import {useState} from "react";
import SaveAuthorButton from "./SaveAuthorButton";
import {addAuthor, delAuthor, saveAuthor} from "../../../redux/actions";

const emptyAuthor = {
    first_name:'',
    last_name:''
}

const AuthorLone = (props) => {
    const id = Number(props.match.params.id)

    const author = id && props.authors.filter(o => o.id === id)[0]
    let {last_name, first_name} = emptyAuthor

    if (author) {
        last_name=author.last_name
        first_name=author.first_name
    }

    const [authorLastName, setAuthorLastName] = useState(last_name)
    const [authorFirstName, setAuthorFirstName] = useState(first_name)

    let creation = false
    let readyText = 'Изменения сохранены!'
    let toMakeText = 'Сохранить изменения'
    let func = props.onSave

    if (props.match.path === '/authors/creation') {
        creation = true
        readyText = 'Автор добавлен!'
        toMakeText = 'Добавить автора'
        func = props.onAdd
    }

    if (author || creation) {
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
                    <SaveAuthorButton onFunc={func}
                                      id={id}
                                      authorLastName={authorLastName}
                                      authorFirstName={authorFirstName}
                                      readyText={readyText}
                                      toMakeText={toMakeText}
                    />
                    {
                        !creation ?
                            <button onClick={() => props.onDelete(id)}
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
        authors: state.rootReducer.authors
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