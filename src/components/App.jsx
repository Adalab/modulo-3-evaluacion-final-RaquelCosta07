import '../styles/App.css';
import getCharactersFromApi from '../services/getCharactersFromApi';
import { useEffect, useState } from "react";
import CharactersList from './CharactersList';
import Filters from './filters/Filters';

function App() {
    const [characters, setCharacters] = useState([]);
    const [filterName, setFilterName] = useState("");

    useEffect(() => {
        getCharactersFromApi().then((charactersData) => {
            setCharacters(charactersData);
        });
    }, []);


    const handleFilterName = (valueInput) => {
        setFilterName(valueInput);
    }


    //Filter

    const filteredCharacters = characters.filter((character) => {
        return character.name.toLowerCase().includes(filterName.toLowerCase())
    })
    console.log(filteredCharacters)



    return (
        <>
            <header>
                <h1>Rick and Morty</h1>
            </header>
            <main>
                <Filters onChangeName={handleFilterName} />
                <CharactersList characters={filteredCharacters} />
            </main>
        </>
    );
}



export default App
