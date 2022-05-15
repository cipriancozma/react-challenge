import React from 'react'
import "./SearchBox.css"

function SearchBox({ handleChange, className }) {

    return (
        <input type="search" className={className} placeholder="Search..." onChange={handleChange} />
    )
}

export default SearchBox
