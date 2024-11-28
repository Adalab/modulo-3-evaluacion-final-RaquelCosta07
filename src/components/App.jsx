import '../styles/App.css';
import getCharactersFromApi from '../services/getCharactersFromApi';
import { useEffect, useState } from "react";
import CharactersList from './CharactersList';
import Filters from './filters/Filters';

function App() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharactersFromApi().then((charactersData) => {
            setCharacters(charactersData);
        });
    }, []);

    return (
        <>
            <header>
                <h1>Rick and Morty</h1>
            </header>
            <main>
                <Filters />
                <CharactersList characters={characters} />
            </main>
        </>
    );
}



export default App
