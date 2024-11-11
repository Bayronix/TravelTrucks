import Navigation from "../NavLinks/NavLinks";
import styles from "./NavHeader.module.css";
import Logo from "../../../assets/images/Logo.png";

const NavHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img className={styles.imgTravels} src={Logo} alt="traveTrucs" />
      </div>
      <div className={styles.navWrapper}>
        <Navigation />
      </div>
    </div>
  );
};

export default NavHeader;
