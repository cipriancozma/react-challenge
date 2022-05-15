import React, { useState } from 'react'
import BookItem from '../BookItem/BookItem';
import "./BookList.css"

function BookList({ books }) {
    const [cName, setCName] = useState("grid");

    return (
        <>
        <div className='buttons'>
            <button className='btn' onClick={() => setCName("grid")}>Grid View</button>
            <button className='btn' onClick={() => setCName("list")}> List View </button>
        </div>
        <div className={`${cName}`}>
            {
                books?.map((book, idx) => {
                    return <BookItem book={book} key={idx} />;
                })
            }
        </div>
        </>
        
       
    )
}

export default BookList
