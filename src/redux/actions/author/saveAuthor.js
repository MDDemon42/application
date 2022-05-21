import C from '../../constants';

function saveAuthor(id,last_name,first_name) {
    return {
        type: C.SAVE_AUTHOR,
        id, last_name, first_name
    };
};

export default saveAuthor;