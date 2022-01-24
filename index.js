const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"
console.log(h1)

// const page = (
//     <div>
//         <h1 className="header">JSX bitches</h1>
//         <p>A paragraph for sluts</p>
//     </div>
// )

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