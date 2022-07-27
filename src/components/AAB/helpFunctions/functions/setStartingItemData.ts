import C from '../../../../redux/constants';
import { OneAABAuthor } from './createOneAABAuthor';
import { OneAABBook } from './createOneAABBook';

interface TheItem {
    id: number,
    title?: string,
    last_name: string,
    first_name: string,
    created_at?: number,
    image?: string
}

const setStartingItemData = (
    URLid: string, 
    content: OneAABAuthor[] | OneAABBook[], 
    type: string
): OneAABAuthor | OneAABBook => {
    
    const id = Number(URLid) ||
        Math.floor(Math.random()*10000) * (type === C.BOOK ? 100 : 1);
    
    let theItem: TheItem;
    if (id) {
        theItem = content.filter(item => item.id === id)[0];
    } else {
        theItem = {
            id,
            last_name: '',
            first_name: '',
            title: '',
            created_at: 0,
            image: ''
        }
    }

    if (type === C.AUTHOR) {
        return {
            id,
            last_name: theItem.last_name,
            first_name: theItem.first_name
        };
    };

    return {
        id,
        title: theItem.title,
        last_name: theItem.last_name,
        first_name: theItem.first_name,
        created_at: theItem.created_at,
        image: theItem.image
    };
};

export default setStartingItemData;