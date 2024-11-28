/* eslint-disable react/prop-types*/

import CharacterCard from "./CharacterCard";


function CharactersList({ characters }) {

    const characterElements = characters.map((character) => {
        return <CharacterCard key={character.id} characterData={character} />
    })

    return (
        <section>
            <ul>
                {characterElements}
            </ul>

        </section>


    )
}

export default CharactersList