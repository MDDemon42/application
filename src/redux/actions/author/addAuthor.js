import C from '../../constants';

function addAuthor(id,last_name,first_name) {
    return {
        type: C.ADD_AUTHOR,
        id, last_name, first_name
    };
};

export default addAuthor;