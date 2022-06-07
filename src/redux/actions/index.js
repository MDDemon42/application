import delBook from "./book/delBook";
import saveBook from './book/saveBook';
import addBook from "./book/addBook";
import delAuthor from "./author/delAuthor";
import saveAuthor from "./author/saveAuthor";
import addAuthor from "./author/addAuthor";
import setExternalData from './externalData/setExternalData';
import getExternalData from './externalData/getExternalData';
import makeTDGClassAvailable from './TDGClass/makeTDGClassAvailable';

const actions = {
    delBook,
    saveBook,
    addBook,
    delAuthor,
    saveAuthor,
    addAuthor,
    setExternalData,
    getExternalData,
    makeTDGClassAvailable
};

export default actions;