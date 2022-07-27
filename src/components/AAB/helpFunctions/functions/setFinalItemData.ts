import C from '../../../../redux/constants';
import { OneAABAuthor } from './createOneAABAuthor';
import { OneAABBook } from './createOneAABBook';

const setFinalItemData = (
    type: string, id: number, 
    last_name: string, first_name: string, 
    ...bookData: [string, number, string]
): OneAABAuthor | OneAABBook => {
    if (type === C.AUTHOR) {
        return {
            id,
            last_name,
            first_name
        };
    };

    const [bookTitle, bookCreatedAt, bookImage] = bookData;
    return {
        id,
        last_name,
        first_name,
        title: bookTitle,
        created_at: bookCreatedAt,
        image: bookImage
    };
};

export default setFinalItemData;