import C from '../../constants';

function saveBook(id,title,last_name,first_name,created_at,image) {
    return {
        type: C.SAVE_BOOK,
        id, title, last_name, first_name, created_at, image
    };
};

export default saveBook;