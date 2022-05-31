import setSaveButtonData from "../../components/helpFunctions/functions/setSaveButtonData";
import C from '../../redux/constants';

test('testing setSaveButtonData()', () => {
    const buttonData_one = [
        'saveFunction', 'addFunction', true, C.BOOK
    ];
    const buttonData_two = [
        'saveFunction', 'addFunction', true, C.AUTHOR
    ];
    const buttonData_three = [
        'saveFunction', 'addFunction', false, C.AUTHOR
    ];
    expect(setSaveButtonData(...buttonData_one)).toEqual({
        readyText: 'Книга добавлена!', toMakeText: 'Добавить книгу', func: 'addFunction'
    });
    expect(setSaveButtonData(...buttonData_two)).toEqual({
        readyText: 'Автор добавлен!', toMakeText: 'Добавить автора', func: 'addFunction'
    });
    expect(setSaveButtonData(...buttonData_three)).toEqual({
        readyText: 'Изменения сохранены!', toMakeText: 'Сохранить изменения', func: 'saveFunction'
    });
})