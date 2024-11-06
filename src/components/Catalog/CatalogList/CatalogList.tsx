import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../../redux/campers/campersSlice";
import { AppDispatch } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import { useCampersSelector } from "../../../redux/campers/campersSelector";
import styles from "./CatalogList.module.css";

const CatalogList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading, error } = useCampersSelector();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      {Array.isArray(data) && data.length > 0 ? (
        <ul className={styles.camperList}>
          {data.map((camper) => (
            <li key={camper.id} className={styles.camperItem}>
              <div className={styles.imageContainer}>
                {camper.gallery.length > 0 && (
                  <img
                    src={camper.gallery[0].thumb}
                    alt={camper.name}
                    className={styles.camperImage}
                  />
                )}
              </div>
              <div className={styles.camperDetails}>
                <h3 className={styles.camperName}>{camper.name}</h3>
                <p className={styles.price}>${camper.price}</p>
                <div className={styles.containerRatingLocatiin}>
                  <p className={styles.rating}>⭐{camper.rating}</p>
                  <p className={styles.location}>{camper.location}</p>
                </div>
                <p className={styles.description}>{camper.description}</p>
                <div className={styles.features}>
                  {camper.transmission && (
                    <span className={styles.feature}>Transmission</span>
                  )}
                  {camper.engine && (
                    <span className={styles.feature}>Engine</span>
                  )}
                  {camper.kitchen && (
                    <span className={styles.feature}>Kitchen</span>
                  )}
                  {camper.AC && <span className={styles.feature}>AC</span>}
                  {camper.TV && <span className={styles.feature}>TV</span>}
                  {camper.bathroom && (
                    <span className={styles.feature}>Bathroom</span>
                  )}
                  {camper.form && (
                    <span className={styles.feature}>{camper.form}</span>
                  )}
                </div>
                <button
                  onClick={() => navigate(`/catalog/${camper.id}`)}
                  className={styles.showMoreButton}
                >
                  <span className={styles.showMoreButtonText}>Show More</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No campers available</p>
      )}
    </div>
  );
};

export default CatalogList;
