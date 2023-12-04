import React from 'react';
import './Boton.css'

export default function Boton({ clickHandle, name, red, yellow, wide, green }) {


    const handleClick = () => clickHandle(name)

    const className = [
        'component-button',
        red ? 'red' : '',
        yellow ? 'yellow' : '',
        wide ? 'wide' : '',
        green ? 'green' : '',
    ]

    return (
        <div className={className.join(' ').trim()}>
            <button className='btn' onClick={handleClick}>{name}</button>
        </div>
    );
}
