import C from '../../constants';

function addBook(
    id: number, last_name: string, first_name: string, 
    title: string, created_at: number, image: string
) {
    return {
        type: C.ADD_BOOK,
        id, last_name, first_name, title, created_at, image
    };
};

export default addBook;