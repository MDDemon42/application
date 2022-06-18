import C from '../../../../redux/constants';

const setSaveButtonData = (onSave, onAdd, creation, type) => {

    let readyText = creation ?
        (type === C.BOOK && 'Книга добавлена!') || 'Автор добавлен!' :
        'Изменения сохранены!';
    let toMakeText = creation ?
        (type === C.BOOK && 'Добавить книгу') || 'Добавить автора' :
        'Сохранить изменения';
    let func = creation ? onAdd : onSave;

    return {
        readyText,
        toMakeText,
        func
    };
};

export default setSaveButtonData;