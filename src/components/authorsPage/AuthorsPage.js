import {connect} from 'react-redux'
import './AuthorsPage.css';

import AuthorHeader from "./authorInfo/AuthorHeader";
import AuthorInfo from "./authorInfo/AuthorInfo";

const AuthorsPage = (props) => (
    <div>
        <h1>
            Авторы в нашей библиотеке:
        </h1>
        <div>
            <AuthorHeader/>
            {
                props.authors.map((item)=> {
                    return <AuthorInfo
                        key={item.id}
                        last_name={item.last_name}
                        first_name={item.first_name}
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

export default connect(mapStateToProps,null)(AuthorsPage)
