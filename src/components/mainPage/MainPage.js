import classes from './MainPage.module.css';
import Button from "react-bootstrap/Button";
import { NavLink } from 'react-router-dom';
import actions from "../../redux/actions";
import { connect } from "react-redux";
import { useCallback } from "react";
import ComponentPreloader from '../loneComponents/ComponentPreloader';

const MainPage = ({externalData, onGetData}) => {
    const dependency = externalData[0];
    const getExternalDataCallback = useCallback( () => onGetData(), [onGetData, dependency]);

    const items = [
        {path: '/authors', text: 'Авторы'},
        {path: '/books', text: 'Книги'},
        {path: '/others', text: 'Прочее'}
    ];

    return (
        <div className={classes.MainPage}>
            <ComponentPreloader/>
            <h1>Это главная страница.</h1>
            {
                items.map( (item, index) => (
                    <div key={index}>
                        <NavLink to={item.path}>
                            {item.text}
                        </NavLink>
                    </div> 
                ))
            }
            {
                !externalData[0]?.birthdate ?
                    <Button onClick={() => getExternalDataCallback()}
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
};

function mapStateToProps (state) {
    return {
        externalData: state.externalDataReducer.externalData
    };
};

const { getExternalData } = actions;
function mapDispatchToProps(dispatch) {
    return {
        onGetData: () => dispatch(getExternalData('https://5d610fd7c2ca490014b27388.mockapi.io/api/users'))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
