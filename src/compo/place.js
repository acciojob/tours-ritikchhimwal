import React, { useState } from "react";

const Place = ({data, handleDelete}) => {
    const [isFull, setIsFull] = useState(false);

    const {id, name, info, image, price} = data;

    let information = '';
    if(!isFull) {
        for(let i=0; i<250; i++) {
            information += info[i];
        }
    } else {
        information = info;
    }

    return <div className="tour-item">
        <img src={image} />
        <h2>{name}</h2>
        <div>
            <p id="tour-item-para-rec6d6T3q5EBIdCfD">{information}</p>
            <p>Price: {price}</p>
        </div>
        <div className="buttons">
            <button id="see-more-rec6d6T3q5EBIdCfD" onClick={() => setIsFull((preState) => !preState)}>{isFull ? 'Show less' : 'See more'}</button>
            <button id="delete-btn-rec6d6T3q5EBIdCfD" onClick={() => handleDelete(id)}>Delete</button>
        </div>
    </div>
}

export default Place;