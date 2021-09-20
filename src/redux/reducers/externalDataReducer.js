import C from '../constants'

let initialState = (localStorage['garpix-test'] && JSON.parse(localStorage['garpix-test']).externalData)
    || { id: 0 }

const externalDataReducer = (state= {externalData: initialState}, action) => {
    switch (action.type) {
        case C.ADD_EX_DATA:
            return {
                ...state,
                externalData: action.data
            }
        default:
            return state
    }
}

export default externalDataReducer