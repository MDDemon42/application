import C from '../constants';
import images from '../../uploads/images/images';

let initialState = (localStorage['garpix-test'] && JSON.parse(localStorage['garpix-test']).books)
    || [
        {
            id: 110101,
            title: 'Керри',
            last_name: 'Кинг',
            first_name: 'Стивен',
            created_at: 1974,
            year: 2021,
            image: images.carry,
        },
        {
            id: 110102,
            title: 'Противостояние',
            last_name: 'Кинг',
            first_name: 'Стивен',
            created_at: 1978,
            year: 2021,
            image: images.protiv,
        },
        {
            id: 110201,
            title: 'Стража! Стража!',
            last_name: 'Пратчетт',
            first_name: 'Терри',
            created_at: 1989,
            year: 2021,
            image: images.guard,
        }
    ];

const bookReducer = (state= {books: initialState}, action) => {
    let books = [...state.books];
    switch (action.type) {
        case C.DELETE_BOOK:
            return {
                ...state,
                books: books.filter(book => book.id !== action.id)
            };
        case C.SAVE_BOOK:
            books.forEach(book => {
                if (book.id === action.id) {
                    book.title = action.title
                    book.last_name = action.last_name
                    book.first_name = action.first_name
                    book.created_at = action.created_at
                    book.image = action.image
                }
            });
            return {
                ...state,
                books
            };
        case C.ADD_BOOK:
            const year = new Date().getFullYear()
            books = books.concat({
                id: action.id,
                title: action.title,
                last_name: action.last_name,
                first_name: action.first_name,
                created_at: action.created_at,
                image: action.image,
                year
            });
            return {
                ...state,
                books
            };
        default:
            return state
    };
};

export default bookReducer;
