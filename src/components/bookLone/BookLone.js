import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import classes from './BookLone.module.css'
import {delBook} from '../../redux/actions'

const BookLone = (props) => {
    const {id} = props.match.params
    const {last_name,first_name} = props.authors.filter(o=>o.id===Math.floor(id/100))[0]
    const {title,created_at,image} = props.books.filter(o=>o.id===Number(id))[0]
    return (
        <div className={classes.BookLone}>
            <div className={classes.buttonDiv}>
                <div>
                    <p>Название:</p>
                    <input value={title}
                           type={'text'}
                    />
                </div>
                <div>
                    <button onClick={()=>props.onDelete(id)}>Удалить книгу</button>
                </div>
            </div>
            <div>
                <p>Автор:</p>
                <select>
                    <option> {first_name+' '+last_name}</option>
                    {props.authors.filter(o=>o.id!==Math.floor(id/100)).map((a)=>(
                        <option value={a.id}
                                key={a.id}
                        >
                            {a.first_name+' '+a.last_name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <p>Первая публикация:</p>
                <input value={created_at}
                       type={'text'}
                       className={classes.started_at}
                />
            </div>
            <div>
                <img src={image} alt={title+'_image'}/>
                <button>Сменить обложку</button>
            </div>

        </div>
    )
}


function mapStateToProps (state) {
    return {
        authors:state.authors,
        books:state.books
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onDelete: id => dispatch(delBook(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookLone)