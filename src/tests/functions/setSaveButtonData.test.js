import setSaveButtonData from "../../components/helpFunctions/functions/setSaveButtonData";
import C from '../../redux/constants';

test('testing setSaveButtonData()', () => {
    const buttonData_one = [
        'saveFunction', 'addFunction', true, C.BOOK
    ];
    const buttonData_two = [
        'saveFunction', 'addFunction', false, C.AUTHOR
    ];
    expect(setSaveButtonData(...buttonData_one)).toEqual({
        readyText: 'Книга добавлена!', toMakeText: 'Добавить книгу', func: 'addFunction'
    });
    expect(setSaveButtonData(...buttonData_one)).not.toEqual({
        readyText: 'Книга добавлена!', toMakeText: 'Добавить книгу', func: ''
    });
    expect(setSaveButtonData(...buttonData_two)).toEqual({
        readyText: 'Изменения сохранены!', toMakeText: 'Сохранить изменения', func: 'saveFunction'
    });
    expect(setSaveButtonData(...buttonData_two)).not.toEqual({
        readyText: 'Изменения сохранены!', toMakeText: 'Добавить автора', func: 'saveFunction'
    });
})