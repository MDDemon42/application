import setFinalItemData from "../../components/helpFunctions/functions/setFinalItemData";
import C from '../../redux/constants';

test('testing setFinalItemData()', () => {
    const itemData_one = [
        C.AUTHOR, 1, 'A', 'B'
    ];
    const itemData_two = [
        C.BOOK, 3, 'C', 'D', 'E', 2000, 'image'
    ];
    expect(setFinalItemData(...itemData_one)).toEqual({
        id: 1, itemLastName: 'A', itemFirstName: 'B'
    });
    expect(setFinalItemData(...itemData_two)).toEqual({
        id: 3, itemLastName: 'C', itemFirstName: 'D', bookTitle: 'E', bookCreatedAt: 2000, bookImage: 'image'
    });
})