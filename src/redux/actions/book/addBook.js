import C from '../../constants';

function addBook(id,title,last_name,first_name,created_at,image) {
    return {
        type: C.ADD_BOOK,
        id, title, last_name, first_name, created_at, image
    };
};

export default addBook;