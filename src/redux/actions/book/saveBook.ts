import C from '../../constants';

function saveBook(
    id: number, last_name: string, first_name: string, 
    title: string, created_at: number, image: string
) {
    return {
        type: C.SAVE_BOOK,
        id, title, last_name, first_name, created_at, image
    };
};

export default saveBook;