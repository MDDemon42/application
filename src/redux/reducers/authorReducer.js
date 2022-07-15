import C from '../constants';
import createInitialAABAuthors from '../../components/AAB/helpFunctions/functions/createInitialAABAuthors';

let initialState = (localStorage['MDDemon42-application'] && JSON.parse(localStorage['MDDemon42-application']).authors) || createInitialAABAuthors(); 

const authorReducer = (state= {authors: initialState}, action) => {
    let authors = [...state.authors]
    switch (action.type) {
        case C.DELETE_AUTHOR:
            return {
                ...state,
                authors: authors.filter(author => author.id !== action.id)
            }
        case C.SAVE_AUTHOR:
            authors.forEach(author => {
                if (author.id === action.id) {
                    author.last_name = action.last_name
                    author.first_name = action.first_name
                }
            })
            return {
                ...state,
                authors
            }
        case C.ADD_AUTHOR:
            authors = authors.concat({
                id: action.id,
                last_name: action.last_name,
                first_name: action.first_name,
            })
            return {
                ...state,
                authors
            }
        default:
            return state
    }
};

export default authorReducer;