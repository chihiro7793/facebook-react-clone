import { Avatar } from '@material-ui/core';
import React from 'react';
import './Row.css';
function Row({ title, src, Icon }) {
    return (
        <div className='row'>
            {src && <Avatar></Avatar>}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default Row;
