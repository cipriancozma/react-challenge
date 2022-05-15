import React, { useContext } from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import BooksLogo from "../../assets/pictures/books.jpg";
import Title from "../Title/Title";
import { ThemeContext } from "../../App";


export function Header() {

    const theme = useContext(ThemeContext);

    const additionalStyle = {
        textDecoration: "none",
        color: theme === "light" ? "#0ccac4" : "black",
        marginLeft: "20px"
    }

    return (
        <div className={"wrapper"}>
            <div className={"content"}>
                <Link to={"/"}>
                    <img src={BooksLogo} alt={"books-logo"} width={"80px"} />
                </Link>
                <Title title={"Reactish Books Track App"}/>
                <Link to={"/about"} style={additionalStyle}>
                    About
                </Link>
            </div>
        </div>
    )
}