/* eslint-disable react/prop-types */


function CharacterDetail({ character }) {
    // Show a loading message or fallback UI if character is undefined
    if (!character) {
        return <p>Loading character details...</p>;
    }

    return (
        <section>
            <img src={character.photo} alt={character.name} />
            <h3>{character.name}</h3>
            <h4>{character.species}</h4>
            <p>{character.planet}</p>
            <p>{character.episodes} episodes</p>
            <p>{character.status}</p>
        </section>
    );
}


export default CharacterDetail