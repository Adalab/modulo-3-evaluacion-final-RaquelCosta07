/* eslint-disable react/prop-types */


function CharacterDetail({ character }) {
    //Show a loading message or fallback UI if character is undefined
    if (!character) {
        return <p>Loading character details...</p>;
    }

    return (
        <section>
            <img src={character.photo} alt={character.name} />
            <h3>{character.name}</h3>
            <p>Species: {character.species}</p>
            <p>Origin: {character.planet}</p>
            <p>Episodes: {character.episode.length}</p>
            <p>Status: {character.status}</p>
        </section>
    );
}


export default CharacterDetail