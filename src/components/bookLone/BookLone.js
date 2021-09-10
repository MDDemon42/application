import {connect} from 'react-redux'
import classes from './BookLone.module.css'

const BookLone = () => (
    <div className={classes.BookLone}>

    </div>
)

function mapStateToProps (state) {
    return {
        authors:state.authors,
        books:state.books
    }
}

export default connect(mapStateToProps,null)(BookLone)