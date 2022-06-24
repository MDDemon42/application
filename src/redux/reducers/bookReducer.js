import C from '../constants';
import initialBooks from '../../components/AAB/helpFunctions/functions/createInitialAABBooks';

let initialState = (localStorage['garpix-test'] && JSON.parse(localStorage['garpix-test']).books) || initialBooks();

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
