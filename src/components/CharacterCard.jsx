/* eslint-disable react/prop-types*/

import { Link } from 'react-router-dom';

function CharacterCard({ characterData }) {
    return (
        <li>
            <Link to={`/character/${characterData.id}`}>
                <img src={characterData.photo} alt={characterData.name} />
                <h3>{characterData.name}</h3>
                <h4>{characterData.species}</h4>
            </Link>

        </li>
    )
}

export default CharacterCard