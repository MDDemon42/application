import C from './constants'

let initialState

if (localStorage['garpix-test']) {
    initialState = JSON.parse(localStorage['garpix-test'])
} else {
    initialState = {
        authors:[
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
        ],
        books: [
            {
                id: 110101,
                title: 'Керри',
                last_name: 'Кинг',
                first_name: 'Стивен',
                created_at: 1974,
                year: 2021,
                image: '',
            },
            {
                id: 110102,
                title: 'Противостояние',
                last_name: 'Кинг',
                first_name: 'Стивен',
                created_at: 1978,
                year: 2021,
                image: '',
            },
            {
                id: 110201,
                title: 'Стража! Стража!',
                last_name: 'Пратчетт',
                first_name: 'Терри',
                created_at: 1989,
                year: 2021,
                image: '',
            }
        ]
    }
    localStorage['garpix-test']=JSON.stringify(initialState)
}

const rootReducer = (state=initialState,action) => {
    switch (action.type) {
        case C.DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter(b=>b.id!==action.id)
            }
        case C.SAVE_BOOK:
            const {id,title,last_name,first_name,created_at,image} = action
            const books = [...state.books]
            books.forEach(b=>{
                if (b.id===id) {
                    b.title=title
                    b.last_name=last_name
                    b.first_name=first_name
                    b.created_at=created_at
                    b.image=image
                }
            })

            return {
                ...state,
                books
            }
        default:
            return state
    }
}

export default rootReducer