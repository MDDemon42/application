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
    let books = [...state.books]
    let authors = [...state.authors]
    switch (action.type) {
        case C.DELETE_BOOK:
            return {
                ...state,
                books: books.filter(b=>b.id!==action.id)
            }
        case C.SAVE_BOOK:
            books.forEach(b=>{
                if (b.id===action.id) {
                    b.title=action.title
                    b.last_name=action.last_name
                    b.first_name=action.first_name
                    b.created_at=action.created_at
                    b.image=action.image
                }
            })
            return {
                ...state,
                books
            }
        case C.ADD_BOOK:
            const year = new Date().getFullYear()
            books = books.concat({
                id:action.id,
                title:action.title,
                last_name:action.last_name,
                first_name:action.first_name,
                created_at:action.created_at,
                image:action.image,
                year
            })
            return {
                ...state,
                books
            }
        case C.DELETE_AUTHOR:
            return {
                ...state,
                authors: authors.filter(a=>a.id!==action.id)
            }
        case C.SAVE_AUTHOR:
            authors.forEach(a=>{
                if (a.id===action.id) {
                    a.last_name=action.last_name
                    a.first_name=action.first_name
                }
            })
            return {
                ...state,
                authors
            }
        case C.ADD_AUTHOR:
            authors = authors.concat({
                id:action.id,
                last_name:action.last_name,
                first_name:action.first_name,
            })
            return {
                ...state,
                authors
            }
        default:
            return state
    }
}

export default rootReducer