import React, {useCallback, useState} from 'react';
import helpFunctions from "../../helpFunctions";

const AuthorSelect = ({handlerAuthorChange, creation, theBook, authors}) => {
    const { getFullName, getOtherAuthors } = helpFunctions;

    const otherAuthors = getOtherAuthors(authors, theBook);
    const defaultAuthor = getFullName(theBook);

    const [selectValue, setSelectValue] = useState('');

    const authorChange = (value) => {
        handlerAuthorChange(value);
        setSelectValue(value);
    };

    return (
        <div>
            <p>
                Автор:
            </p>
            <select onChange={useCallback(event => authorChange(event.target.value),[])}
                    value={selectValue}
            >
                {
                    creation ?
                        <option disabled
                                value={''}
                        >
                            Выберите автора
                        </option> :
                        <option value={defaultAuthor}>
                            {defaultAuthor}
                        </option>
                }
                {
                    otherAuthors.map(author => (
                        <option value={getFullName(author)}
                                key={author.id}
                        >
                            {getFullName(author)}
                        </option>
                    ))
                }
            </select>
        </div>
    )
};

export default AuthorSelect;