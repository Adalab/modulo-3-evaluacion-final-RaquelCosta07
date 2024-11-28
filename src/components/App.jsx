import '../styles/App.css';
import getCharactersFromApi from '../services/getCharactersFromApi';
import { useEffect, useState } from "react";

function App() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharactersFromApi().then((charactersData) => {
            setCharacters(charactersData);
        })
    })


    return (
        <div>
            <h1>Hola mundo</h1>
        </div>
    );
}

export default App;
