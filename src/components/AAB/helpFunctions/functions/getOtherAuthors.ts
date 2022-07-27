import { OneAABAuthor } from "./createOneAABAuthor";
import { OneAABBook } from "./createOneAABBook";

const getOtherAuthors = (
    authors: OneAABAuthor[], theBook: OneAABBook
) => {
    return authors.filter(author => 
        author.last_name !== theBook.last_name && 
        author.first_name !== theBook.first_name);
};

export default getOtherAuthors;