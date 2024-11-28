const getCharactersFromApi = () => {
    return fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then((data) => {
        
        
        const parsedCharacters = data.results.map((character) => {
         
            return {
                photo: character.image,
                name: character.name,
                species: character.species,
                planet: character.origin.name,
                episode: character.episode,
                status: character.status,
                id: character.id,
            }
    })
    return parsedCharacters;
})
}

export default getCharactersFromApi;