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
    const [filterSpecies, setFilterSpecies] = useState("");

    useEffect(() => {
        getCharactersFromApi().then((charactersData) => {
            setCharacters(charactersData);
        });
    }, []);


    const handleFilterName = (valueInput) => {
        setFilterName(valueInput);
    }

    const handleFilterSpecies = (value) => {
        setFilterSpecies(value);
    }


    //Filter

    const filteredCharacters = characters
        .filter((character) => {
            return character.name.toLowerCase().includes(filterName.toLowerCase())
        })
        .sort((a, b) => a.name.localeCompare(b.name))
        .filter((character) => {
            if (filterSpecies === "") {
                return true;
            } else {
                return character.species === filterSpecies;
            }

        })



    /* Ruta dinámica
    Saber si estoy en la ruta dinámica (en CharacterDetail)
    Obtener el id de la ruta (id del personaje)
    Buscar en mi lista de personas, el personaje con ese id
    Pasaré la info de esa persona a CharacterDetail
    */

    const { pathname } = useLocation();
    const routeData = matchPath("/character/:idCharacter", pathname);



    const idCharacter = routeData !== null ? routeData.params.idCharacter : null;


    const character = characters.find((character) => character.id === parseInt(idCharacter, 10));

    //console.log("idCharacter", idCharacter); // Debug: ID from route
    //console.log("character", character); // Debug: Found character or undefined
    return (
        <>
            <header>
                <img src={`${import.meta.env.BASE_URL}src/images/logo.png`} alt="logo Rick and Morty" className="logo" />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={(
                        <>
                            <Filters onChangeName={handleFilterName} onChangeSpecies={handleFilterSpecies} />
                            {filteredCharacters.length > 0 ? (
                                <CharactersList characters={filteredCharacters} />
                            ) : (
                                <p>**Sorry! There is no character with the name: {filterName}**</p>
                            )}
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
