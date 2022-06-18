import createOneAABAuthor from './createOneAABAuthor';

const createInitialAABAuthors = () => {

    const id_one = Math.floor(Math.random()*10000);
    const author_one = createOneAABAuthor(
        id_one, 'Кинг', 'Стивен'
    );

    const id_two = Math.floor(Math.random()*10000);
    const author_two = createOneAABAuthor(
        id_two, 'Пратчетт', 'Терри'
    );

    return (
        [
            author_one,
            author_two
        ]
    )
};

export default createInitialAABAuthors;