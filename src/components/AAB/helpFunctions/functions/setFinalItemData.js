import C from '../../../../redux/constants';

const setFinalItemData = (
    type, id, itemLastName, itemFirstName, ...bookData
) => {
    if (type === C.AUTHOR) {
        return {
            id,
            itemLastName,
            itemFirstName
        };
    };

    const [bookTitle, bookCreatedAt, bookImage] = bookData;
    return {
        id,
        itemLastName,
        itemFirstName,
        bookTitle,
        bookCreatedAt,
        bookImage
    };
};

export default setFinalItemData;