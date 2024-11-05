import Navigation from "../NavLinks/NavLinks";
import styles from "./NavHeader.module.css";

const NavHeader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <svg className={styles.img} viewBox="0 0 136 16" xmlns="http://www.w3.org/2000/svg" aria-label="Logo">
                    <use href="../src/assets/images/icons.svg#heroIcon" />
                </svg>
            </div>
            <Navigation />
        </div>
    );
};

export default NavHeader;
