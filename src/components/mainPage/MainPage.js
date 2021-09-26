import classes from './MainPage.module.css';
import Button from "react-bootstrap/Button";
import {NavLink} from 'react-router-dom'
import {getExternalData} from "../../redux/actions";
import {connect} from "react-redux";
import {useCallback} from "react";

const MainPage = ({externalData, onGetData}) => {

    const dependency = externalData[0]
    const getExternalData = useCallback( () => onGetData(), [dependency])

    return (
        <div className={classes.MainPage}>
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
            {
                !externalData[0]?.birthdate ?
                    <Button onClick={() => getExternalData()}
                            variant={'primary'}
                            size="sm"
                    >
                        Хотите загрузить дополнительные данные?
                    </Button> :
                    <Button variant={'primary'}
                            size="sm"
                            disabled
                    >
                        Дополнительные данные успешно загружены!
                    </Button>
            }
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
        onGetData: () => dispatch(getExternalData('https://5d610fd7c2ca490014b27388.mockapi.io/api/users'))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPage)
