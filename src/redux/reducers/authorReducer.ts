import C from '../constants';
import createInitialAABAuthors from '../../components/AAB/helpFunctions/functions/createInitialAABAuthors';
import { OneAABAuthor } from '../../components/AAB/helpFunctions/functions/createOneAABAuthor';

export interface Action {
    type: string,
    id: number,
    last_name?: string,
    first_name?: string
}

export interface AuthorState {
    authors: OneAABAuthor[]
}

let initialState = (localStorage['MDDemon42-application'] && JSON.parse(localStorage['MDDemon42-application']).authors) || createInitialAABAuthors(); 

const authorReducer = (state: AuthorState = {authors: initialState}, action: Action) => {
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
                    author.last_name = action.last_name ? action.last_name : '';
                    author.first_name = action.first_name ? action.first_name: '';
                }
            })
            return {
                ...state,
                authors
            }
        case C.ADD_AUTHOR:
            const newAuthor: OneAABAuthor = {
                id: action.id,
                last_name: action.last_name ? action.last_name : '',
                first_name: action.first_name ? action.first_name: ''
            }
            authors = authors.concat(newAuthor)
            return {
                ...state,
                authors
            }
        default:
            return state
    }
};

export default authorReducer;