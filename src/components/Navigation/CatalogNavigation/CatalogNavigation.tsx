import { NavLink, Outlet, useParams } from "react-router-dom";

const CatalogNavigation = () => {
    const { id } = useParams(); 

    return (
        <div>
            <ul>
                <li>
                    <NavLink to={`/catalog/${id}/futures`}>Futures</NavLink>
                </li>
                <li>
                    <NavLink to={`/catalog/${id}/reviews`}>Reviews</NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default CatalogNavigation;
