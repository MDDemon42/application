import C from '../../constants';

function addAuthor(
    id: number, last_name: string, first_name: string
) {
    return {
        type: C.ADD_AUTHOR,
        id, last_name, first_name
    };
};

export default addAuthor;