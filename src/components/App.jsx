import '../styles/App.css';
import getCharactersFromApi from '../services/getCharactersFromApi';
import { useEffect, useState } from "react";
import CharactersList from './CharactersList';
import Filters from './filters/Filters';
import { Routes, Route, useLocation, matchPath } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';



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



    /* Ruta dinámica
    Saber si estoy en la ruta dinámica (en CharacterDetail)
    Obtener el id de la ruta (id del personaje)
    Buscar en mi lista de personas, el personaje con ese id
    Pasaré la info de esa persona a CharacterDetail
    */

    const { pathname } = useLocation();
    const routeData = matchPath("/character/:idCharacter", pathname);

    /* Si routeData es diferente de null,
            obtener el id de la url
        */

    // Get ID from route if it matches the dynamic route
    const idCharacter = routeData !== null ? routeData.params.idCharacter : null;

    // Find character with matching ID (ensure type consistency)
    const character = characters.find((character) => character.id === parseInt(idCharacter, 10));

    console.log("idCharacter", idCharacter); // Debug: ID from route
    console.log("character", character); // Debug: Found character or undefined
    return (
        <>
            <header>
                <h1>Rick and Morty</h1>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={(
                        <>
                            <Filters onChangeName={handleFilterName} />
                            <CharactersList characters={filteredCharacters} />
                        </>
                    )} />
                    <Route
                        path="/character/:idCharacter"
                        element={
                            character ? (
                                <CharacterDetail character={character} />
                            ) : (
                                <p>Loading character details...</p>
                            )
                        }
                    />


                </Routes>

            </main>
        </>
    );
}



export default App
