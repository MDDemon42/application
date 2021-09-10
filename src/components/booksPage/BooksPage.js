import {connect} from 'react-redux'
import './BooksPage.css';
import BookInfo from "./bookInfo/BookInfo";
import BookHeader from "./bookInfo/BookHeader";

const BooksPage = (props) => (
    <div>
        <h1>
            Книги нашей библиотеки:
        </h1>
        <div>
            <BookHeader/>
            {
                props.books.map((item)=> {
                    const {last_name,first_name} = props.authors.filter(o=>o.id===item.author)[0]
                    return <BookInfo
                        key={item.id}
                        title={item.title}
                        id={item.id}
                        last_name={last_name}
                        first_name={first_name}
                        year={item.year}
                    />
                })
            }
        </div>
    </div>
  )

function mapStateToProps (state) {
    return {
        authors:state.authors,
        books:state.books
    }
}

export default connect(mapStateToProps,null)(BooksPage)
