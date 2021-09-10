import C from './constants'

const initialState = {
    authors:[
        {
            id: 1101,
            last_name: 'Кинг',
            first_name: 'Стивен',
            books: [
                110101,
                110102
            ]
        },
        {
            id: 1102,
            last_name: 'Пратчетт',
            first_name: 'Терри',
            books: [
                110201
            ]
        }
    ],
    books: [
        {
            id: 110101,
            title: 'Керри',
            author: 1101,
            created_at: 1974,
            year: 2021,
            image: '',
        },
        {
            id: 110102,
            title: 'Противостояние',
            author: 1101,
            created_at: 1978,
            year: 2021,
            image: '',
        },
        {
            id: 110201,
            title: 'Стража! Стража!',
            author: 1102,
            created_at: 1989,
            year: 2021,
            image: '',
        }
    ]
}

const rootReducer = (state=initialState,action) => {
    switch (action.type) {
        case C.DELETE_BOOK:
            return {
                books: state.books.filter(b=>b.id!==action.id)
            }
        default:
            return state
    }
}

export default rootReducer