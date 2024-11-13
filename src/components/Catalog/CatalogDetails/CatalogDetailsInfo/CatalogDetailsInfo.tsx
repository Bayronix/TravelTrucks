import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  useParams } from "react-router-dom";
import { fetchCampers } from "../../../../redux/campers/campersSlice";
import { AppDispatch } from "../../../../redux/store";
import { useCampersSelector } from "../../../../redux/campers/campersSelector";
import styles from "./CatalogDetailsInfo.module.css";

const CatalogDetailsInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useCampersSelector();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const camper = data.find((camper) => camper.id === id);

  if (!camper) return <p>Camper not found</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{camper.name}</h2>
      <p className={styles.rating}>{camper.rating} Reviews</p>
      <p className={styles.location}> {camper.location}</p>
      <p className={styles.price}>€{camper.price}</p>

      <div className={styles.gallery}>
        {camper.gallery.map((image) => (
          <img
            key={image.original}
            src={image.thumb}
            alt={camper.name}
            className={styles.image}
          />
        ))}
      </div>

      <p className={styles.description}>{camper.description}</p>
    </div>
  );
};

export default CatalogDetailsInfo;
