import C from '../../../../redux/constants';

const setStartingItemData = (URLid, content, type) => {
    const id = Number(URLid) ||
        Math.floor(Math.random()*10000) * (type === C.BOOK ? 100 : 1);
    const theItem = id && content && content.filter(item => item.id === id)[0];

    const last_name = theItem ? theItem.last_name : '';
    const first_name = theItem ? theItem.first_name : '';

    if (type === C.AUTHOR) {
        return {
            id,
            last_name,
            first_name
        };
    };

    const title = theItem ? theItem.title : '';
    const created_at = theItem ? theItem.created_at : '';
    const image = theItem ? theItem.image : '';

    return {
        id,
        title,
        last_name,
        first_name,
        created_at,
        image
    };
};

export default setStartingItemData;