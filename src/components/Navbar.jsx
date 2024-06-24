import { NavLink } from "react-router-dom";

export default function () {
    return (
        <header>
            <nav className="navbar">
                <menu>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/index">Index</NavLink>
                    </li>
                    <li>
                        <NavLink to="/create">Create</NavLink>
                    </li>
                </menu>
            </nav>
        </header>
    )
}