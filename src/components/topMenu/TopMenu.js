import React from 'react';
import classes from './TopMenu.module.css';
import { NavLink } from 'react-router-dom'

const TopMenu = () => {
    const items = [
        {path: '/', text: 'Главная'},
        {path: '/authors', text: 'Авторы'},
        {path: '/books', text: 'Книги'},
        {path: '/lines', text: 'Линии'}
    ];
    const itemWidth = Math.floor(90/items.length) + 'vw';
    return (
        <div className={classes.TopMenu}>
            {
                items.map( (item, index) => (
                    <div key={index} style={{width: itemWidth}}>
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
