import { NavLink } from "react-router-dom"

const NavLinks = () => {
    return ( 
        <div>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/catalog">Catalog</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavLinks