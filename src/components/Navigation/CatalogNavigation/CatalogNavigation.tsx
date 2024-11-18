import { NavLink, Outlet, useParams } from "react-router-dom";
import styles from "./CatalogNavigation.module.css"

const CatalogNavigation = () => {
    const { id } = useParams(); 

    return (
        <div className={styles.divNavContainer}>
            <ul className={styles.navList}>
                <li className={styles.navLi}>
                    <NavLink to={`/catalog/${id}/futures`}><span className={styles.navText}>Futures</span></NavLink>
                </li >
                <li className={styles.navLi}>
                    <NavLink to={`/catalog/${id}/reviews`}><span  className={styles.navText}>Reviews</span></NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default CatalogNavigation;
