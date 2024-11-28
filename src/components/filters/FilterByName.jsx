/* eslint-disable react/prop-types*/
function FilterByName({ onChangeName }) {

    const handleChange = (ev) => {
        onChangeName(ev.target.value);

    }
    return (
        <div className="form">
            <label htmlFor="name">Search character  </label>
            <input type="text" id="name" onChange={handleChange} />
        </div>


    )
}

export default FilterByName