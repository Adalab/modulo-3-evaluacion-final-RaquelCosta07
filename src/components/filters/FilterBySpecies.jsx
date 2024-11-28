/* eslint-disable react/prop-types*/

function FilterBySpecies({ onChangeSpecies }) {

    const handleChange = (ev) => {

        onChangeSpecies(ev.target.value)
    }

    return (
        <div className="species">
            <label htmlFor="human">Human 🧑</label>
            <input type="radio" id="human" value="Human" name="species" onChange={handleChange} />
            <label htmlFor="alien">Alien 👽</label>
            <input type="radio" id="alien" value="Alien" name="species" onChange={handleChange} />
        </div>
    )
}

export default FilterBySpecies