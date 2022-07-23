import C from '../../constants';

function saveAuthor(
    id: number, last_name: string, first_name: string
) {
    return {
        type: C.SAVE_AUTHOR,
        id, last_name, first_name
    };
};

export default saveAuthor;