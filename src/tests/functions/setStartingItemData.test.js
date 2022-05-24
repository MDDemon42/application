import setStartingItemData from "../../components/helpFunctions/functions/setStartingItemData";
import C from '../../redux/constants';

test('testing setStartingItemData()', () => {
    const startingData_one = [
        1, 
        [
            {
                id: 1,
                last_name: 'A',
                first_name: 'B'
            },
            {
                id: 2,
                last_name: 'C',
                first_name: 'D'
            }
        ],
        C.AUTHOR
    ];
    const startingData_two = [
        3,
        [
            {
                id: 3,
                last_name: 'A',
                first_name: 'B',
                title: 'C',
                created_at: 2000,
                image: 'image'
            },
            {
                id: 4,
                last_name: 'E',
                first_name: 'F',
                title: 'G',
                created_at: 2001,
                image: 'image_1'
            }
        ],
        C.BOOK
    ];
    const startingData_three = [5, null, C.BOOK];
    expect(setStartingItemData(...startingData_one)).toEqual({
        id: 1, last_name: 'A', first_name: 'B'
    });
    expect(setStartingItemData(...startingData_one)).not.toEqual({
        id: 2, last_name: 'C', first_name: 'D'
    });
    expect(setStartingItemData(...startingData_two)).toEqual({
        id: 3, last_name: 'A', first_name: 'B', title: 'C', created_at: 2000, image: 'image'
    });
    expect(setStartingItemData(...startingData_three)).toEqual({
        id: 5, last_name: '', first_name: '', title: '', created_at: '', image: ''
    });
})