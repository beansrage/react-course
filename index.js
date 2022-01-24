import React from "react"
import ReactDOM from "react-dom"

const navBar = (
    <nav>
        <h1>Pig Palace</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
ReactDOM.render(
    navBar,
    document.getElementById("root")
)