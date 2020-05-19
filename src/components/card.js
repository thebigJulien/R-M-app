import React from 'react';
import Characters from './characters';

const Card = () => {

    let data = Characters.results;
console.log(data);
    let eachChar = data.map((char) => 
        <div className="card">
            <img src= { char.image } className="card-img"></img>
            <div className="card-text">
                <h2>{ char.name }</h2>
                <p>SPECIES: { char.species }</p>
                <p>GENDER: { char.gender } </p>
                <p>STATUS: { char.status }</p>
                <p>ORIGIN: { char.origin.name }</p>
                <p>LOCATION: { char.location.name }</p>
            </div>
        </div>
            
)

    return(
        <div className="body">
            { eachChar }
        </div>    
        )
};

export default Card