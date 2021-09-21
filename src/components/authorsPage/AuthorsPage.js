import {connect} from 'react-redux'
import classes from './AuthorsPage.module.css';
import AuthorHeader from "./authorInfo/AuthorHeader";
import AuthorInfo from "./authorInfo/AuthorInfo";
import {NavLink} from "react-router-dom";

const AuthorsPage = ({authors}) => (
    <div className={classes.AuthorsPage}>
    {
        authors.length ?
            <>
                <span style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
                    <h1>
                        Авторы в нашей библиотеке:
                    </h1>
                    <NavLink to={'/authors/creation'}>
                        <button className={classes.buttonAdd}>
                            <p>
                                Добавить автора
                            </p>
                        </button>
                    </NavLink>
                </span>
                <div>
                    <AuthorHeader/>
                    {
                        authors.map((item) => {
                            return <AuthorInfo
                                key={item.id}
                                id={item.id}
                                last_name={item.last_name}
                                first_name={item.first_name}
                            />
                        })
                    }
                </div>
            </> :
            <h1>
                Авторы отсутствуют
            </h1>
    }
</div>
)

function mapStateToProps (state) {
    return {
        authors: state.authorReducer.authors
    }
}

export default connect(mapStateToProps,null)(AuthorsPage)
