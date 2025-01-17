/* eslint-disable react/prop-types*/

import { Link } from 'react-router-dom';

function CharacterCard({ characterData }) {
    return (
        <li className="character-card">
            <Link to={`/character/${characterData.id}`}>
                <div className="each-card">
                    <img src={characterData.photo} alt={characterData.name} />
                    <h3>{characterData.name}</h3>
                    <h4>{characterData.species}</h4>
                </div>

            </Link>

        </li>
    )
}

export default CharacterCard