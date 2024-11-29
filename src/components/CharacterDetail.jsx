/* eslint-disable react/prop-types */


function CharacterDetail({ character }) {
    if (!character) {
        return <p>Loading character details...</p>;
    }

    // Determine species icon
    let speciesIcon;
    if (character.species === "Human") {
        speciesIcon = "🧑";
    } else if (character.species === "Alien") {
        speciesIcon = "👽";
    }


    // Determine status icon
    let statusIcon;
    if (character.status === "Alive") {
        statusIcon = "💚";
    } else if (character.status === "Dead") {
        statusIcon = "💀";
    } else {
        statusIcon = "❓";
    }

    return (
        <div className="card">
            <section className="card-details">
                <img src={character.photo} alt={character.name} />
                <div className="card-text">
                    <h3>{character.name}</h3>
                    <p>Species: {speciesIcon} {character.species}</p>
                    <p>Origin: {character.planet}</p>
                    <p>Episodes: {character.episode.length}</p>
                    <p>Status: {statusIcon} {character.status}</p>
                </div>
            </section>
        </div>
    );
}

export default CharacterDetail;
