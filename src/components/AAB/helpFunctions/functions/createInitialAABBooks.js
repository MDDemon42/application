import createOneAABBook from "./createOneAABBook";
import images from '../../../../uploads/images';

const createInitialAABBooks = () => {

    const id_one = Math.floor(Math.random()*10000) * 100;
    const book_one = createOneAABBook(
        id_one, 'Керри', 'Кинг', 'Стивен', 1974, images.initialBookImages.carry
    );

    const id_two = Math.floor(Math.random()*10000) * 100;
    const book_two = createOneAABBook(
        id_two, 'Противостояние', 'Кинг', 'Стивен', 1978, images.initialBookImages.protiv
    );

    const id_three = Math.floor(Math.random()*10000) * 100;
    const book_three = createOneAABBook(
        id_three, 'Стража! Стража!', 'Пратчетт', 'Терри', 1989, images.initialBookImages.guard
    );

    return (
        [
            book_one,
            book_two,
            book_three
        ]
    )
};

export default createInitialAABBooks;