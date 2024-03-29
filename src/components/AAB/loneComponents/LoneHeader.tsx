import React from 'react';
import bookClasses from '../booksPage/blocks/Book.module.css';
import authorClasses from '../authorsPage/blocks/Author.module.css';
import C from '../../../redux/constants';

interface HeaderProps {
    type: string,
    items: string[]
}

const Header = ({type, items}: HeaderProps) => {
    return (
        <div className={type === C.BOOK ? bookClasses.BookHeader : authorClasses.AuthorHeader}>
            {
                items.map( item => (
                    <div key={item[0]}>
                        <p>
                            {item}
                        </p>
                    </div>
                ))
            }            
        </div>
    )
};

export default Header;