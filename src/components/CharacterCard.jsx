/* eslint-disable react/prop-types*/

function CharacterCard({ characterData }) {
    return (
        <li>
            <img src={characterData.photo} alt={characterData.name} />
            <h3>{characterData.name}</h3>
            <h4>{characterData.species}</h4>
        </li>
    )
}

export default CharacterCard