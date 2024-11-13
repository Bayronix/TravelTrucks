import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <div>
      <ul className={styles.navLinksContainer}>
        <li>
          <NavLink to="/" className={styles.navLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className={styles.navLink}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
