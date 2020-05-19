import React from 'react';
import Scary from '../assets/scary-t.png';


const Header = () => {
    return(
        <nav className="navigation">
            <div className="img-nav">
            <img src={Scary} alt="Scarry Terry"></img>
            </div>
            <div>
                <p>BIIIIIIIITCH!</p>
            </div>
        </nav>
    )
};

export default Header