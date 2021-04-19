import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img alt="developer" src={`https://robohash.org/${props.developer.id}?set=set5&size=180x180`}/>
        <h3> { props.developer.name} </h3>
        <p> {props.developer.email} </p>
    </div>
)