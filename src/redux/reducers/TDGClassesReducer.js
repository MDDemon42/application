import C from '../constants';
import initialTDGClasses from '../../components/TDG/functions/TDGClasses';

let initialState = (localStorage['MDDemon42-application'] && JSON.parse(localStorage['MDDemon42-application']).TDGClasses) || initialTDGClasses;

const TDGClassesReducer = (state= {TDGClasses: initialState}, action) => {
    let TDGClasses = [...state.TDGClasses];
    switch (action.type) {
        case C.MAKE_TDG_CLASS_AVAILABLE:
            const thatTDGClass = TDGClasses.find( singleTDGClass => 
                    singleTDGClass.TDGClass.title === action.TDGClass.TDGClass.title)
            thatTDGClass.available = true;
            return {
                ...state,
                TDGClasses
            };
        default:
            return state
    };
};

export default TDGClassesReducer;