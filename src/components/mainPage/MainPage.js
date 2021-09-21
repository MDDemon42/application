import classes from './MainPage.module.css';
import {NavLink} from 'react-router-dom'
import {getExternalData} from "../../redux/actions";
import {connect} from "react-redux";
import {useEffect} from "react";

const MainPage = ({externalData, onGetData}) => {

    useEffect(() => {
        onGetData()
    },[])

    return (
        <div className={classes.MainPage}>
            {
                externalData[0] && console.log(new Date(externalData[0].birthdate*1000).toDateString())
            }
            <h1>Это главная страница.</h1>
            <div>
                <NavLink to={'/authors'}>
                    Авторы
                </NavLink>
            </div>
            <div>
                <NavLink to={'/books'}>
                    Книги
                </NavLink>
            </div>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        externalData: state.externalDataReducer.externalData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onGetData: () => dispatch (getExternalData('https://5d610fd7c2ca490014b27388.mockapi.io/api/users'))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPage)
