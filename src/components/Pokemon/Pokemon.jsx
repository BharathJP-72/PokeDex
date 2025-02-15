import React from 'react';
import './Pokemon.css';
import { Link } from 'react-router-dom';

function Pokemon({ name, url,id }) {
    return (
        <Link to={`/pokemon/${id}`} className='pokemon-wrapper'>
            <div className="pokemon">
                    <div className="pokemon-name">
                        {name}
                    </div>
                    
                        <img src={url} alt={name} />
            </div>  
        </Link>

    );
}

export default Pokemon;