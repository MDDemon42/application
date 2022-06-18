import React from 'react';
import classes from './TopMenu.module.css';
import { NavLink } from 'react-router-dom'

const TopMenu = () => {
    const items = [
        {path: '/', text: 'Главная'},
        {path: '/AAB', text: 'Библиотека'},        
        {path: '/TDG', text: 'Tech Dungeon Game'},
        {path: '/others', text: 'Прочее'}
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
