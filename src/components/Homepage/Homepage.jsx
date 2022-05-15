import React, { useState, useEffect, useContext } from 'react';
import { API_URL } from '../../APIs/API';
import BookList from '../BookList/BookList';
import {Loading} from '../Loading/Loading';
import SearchBox from '../SearchBox/SearchBox';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../../App';
import "./Homepage.css";

export function Homepage() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);

    const { toogleTheme, theme } = useContext(ThemeContext);


    const fetchBooks = async () => {
        try {
            setErrors(false);
            setLoading(true);
            const response = await fetch(API_URL);
            const books = await response.json();
            setBooks(books)
        } catch(err) {
            setErrors(true);
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchBooks();
    }, [])

    if(loading) return <Loading />;
    if(errors) return <div>We have an error...</div>

    const filteredBooks = books?.books?.filter(book => {
        return book.title.toLowerCase().includes(search);
    })

    const handleChange = (e) => {
        setSearch(e.target.value.toLowerCase())
    }

    return (
        <>
            <SearchBox className={"search-box"} handleChange={handleChange}/>
            <div className='switch'>
                <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                <ReactSwitch  onChange={toogleTheme} checked={theme === "dark"} onColor={"#000"}/>
            </div>
            <BookList books={filteredBooks} />
        </>
    )

}
