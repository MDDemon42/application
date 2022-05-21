import React from 'react';
import classes from './TopMenu.module.css';
import { NavLink } from 'react-router-dom'

const TopMenu = () => {
    const items = [
        {path: '/', text: 'Главная страница'},
        {path: '/authors', text: 'Авторы'},
        {path: '/books', text: 'Книги'}
    ];
    return (
        <div className={classes.TopMenu}>
            {
                items.map( (item, index) => (
                    <div key={index}>
                        <NavLink to={item.path}>
                            {item.text}
                        </NavLink>
                    </div> 
                ))
            }
        </div>
    )
};

export default TopMenu;
