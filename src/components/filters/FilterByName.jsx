/* eslint-disable react/prop-types*/
function FilterByName({ onChangeName }) {

    const handleChange = (ev) => {
        onChangeName(ev.target.value);

    }
    return (
        <>
            <label htmlFor="name">Buscar personaje</label>
            <input type="text" id="name" onChange={handleChange} />
        </>
    )
}

export default FilterByName