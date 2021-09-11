import {connect} from 'react-redux'
import classes from './BooksPage.module.css';
import BookInfo from "./bookInfo/BookInfo";
import BookHeader from "./bookInfo/BookHeader";

const BooksPage = (props) => (
    <div className={classes.BooksPage}>
        {
            props.books.length ?
                <>
                    <h1>
                        Книги нашей библиотеки:
                    </h1>
                    <div>
                        <BookHeader/>
                        {

                            props.books.map((item)=> {
                                return <BookInfo
                                    key={item.id}
                                    title={item.title}
                                    id={item.id}
                                    last_name={item.last_name}
                                    first_name={item.first_name}
                                    year={item.year}
                                />
                            })
                        }
                    </div>
                </> :
                <h1>
                    Книги отсутствуют
                </h1>
        }
    </div>
  )

function mapStateToProps (state) {
    return {
        books:state.books
    }
}

export default connect(mapStateToProps,null)(BooksPage)
