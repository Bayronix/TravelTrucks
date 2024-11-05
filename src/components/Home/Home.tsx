import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.containerHome}>
            <div className={styles.title}>
                <h3 className={styles.textH3}>Campers of Your Dreams</h3>
                <p className={styles.textP}>Find everything you need in our catalog</p>
                <button className={styles.buttonView}>
                    <span className={styles.buttonViewText}>View Now</span>
                </button>
            </div>
        </div>
    );
};

export default Home;
