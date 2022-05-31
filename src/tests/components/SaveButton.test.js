import SaveButton from "../../components/loneComponents/SaveButton";
import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import { act } from 'react-dom/test-utils';
import C from '../../redux/constants';

let container = null;

beforeEach( () => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach( () => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('testing SaveButton on Book', () => {
    const bookData = {
        id: 3, 
        itemLastName: 'C', 
        itemFirstName: 'D', 
        bookTitle: 'E', 
        bookCreatedAt: 2000, 
        bookImage: 'image'
    };

    const saveButtonData = {
        readyText: 'Книга добавлена!', 
        toMakeText: 'Добавить книгу', 
        func: 'addFunction'
    };
    
    act( () => {
        render(
            <SaveButton itemData={bookData}
                        initialSaveButtonData={saveButtonData}
                        type={C.BOOK}
            />, 
            container
        )
    });
    // const button = document.querySelector("[data-testId=SaveButton]");
    const buttonText = document.querySelector("[data-testId=SaveButtonText]");
    expect(buttonText.innerHTML).toBe(saveButtonData.toMakeText);
    // act( () => {
    //     button.dispatchEvent(new MouseEvent("click", {bubbles: true}));
    // });
    // expect(buttonText.innerHTML).toBe(saveButtonData.readyText);
});

test('testing SaveButton on Author', () => {
    const authorData = {
        id: 1, itemLastName: 'A', itemFirstName: 'B'
    };
    
    const saveButtonData = {
        readyText: 'Автор добавлен!', 
        toMakeText: 'Добавить автора', 
        func: 'addFunction'
    };

    act( () => {
        render(
            <SaveButton 
                        itemData={authorData}
                        initialSaveButtonData={saveButtonData}
                        type={C.AUTHOR}
            />, 
            container
        )
    });
    // const button = document.querySelector("[data-testId=SaveButton]");
    const buttonText = document.querySelector("[data-testId=SaveButtonText]");
    expect(buttonText.innerHTML).toBe(saveButtonData.toMakeText);
    // act( () => {
    //     button.dispatchEvent(new MouseEvent("click", {bubbles: true}));
    // });
    // expect(buttonText.innerHTML).toBe(saveButtonData.readyText);
});