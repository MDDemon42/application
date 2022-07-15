import C from '../constants';

let initialState = (localStorage['MDDemon42-application'] && JSON.parse(localStorage['MDDemon42-application']).externalData)
    || { id: 0 };

const externalDataReducer = (state= {externalData: initialState}, action) => {
    switch (action.type) {
        case C.ADD_EX_DATA:
            return {
                ...state,
                externalData: action.data
            }
        default:
            return state
    };
};

export default externalDataReducer;