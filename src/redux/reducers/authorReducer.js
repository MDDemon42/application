import C from '../constants'

let initialState = (localStorage['garpix-test'] && JSON.parse(localStorage['garpix-test']).authors)
    || [
        {
            id: 1101,
            last_name: 'Кинг',
            first_name: 'Стивен'
        },
        {
            id: 1102,
            last_name: 'Пратчетт',
            first_name: 'Терри'
        }
    ]

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
}

export default authorReducer