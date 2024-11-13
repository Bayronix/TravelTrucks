import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../redux/store";
import styles from "./CatalogFeatures.module.css";
import { useEffect } from "react";
import { fetchCampers } from "../../../../../redux/campers/campersSlice";
import { AcIcon, BathroomIcon, EngineIcon, KitchenIcon, TransmissionIcon } from "../../../../../assets/spriteSvgComponents/sprite";
import { useCampersSelector } from "../../../../../redux/campers/campersSelector";
import { useParams } from "react-router-dom";

const FuturesContent = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useCampersSelector();
  const { id } = useParams<{ id: string }>(); // Отримуємо id з параметрів URL

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Знайдемо camper за id
  const camper = data.find((item) => item.id === id);

  if (!camper) return <p>No camper found with this ID</p>;

  
  return (
    <div className={styles.container}>
      <div className={styles.features}>
        {camper.transmission && (
          <span className={styles.feature}>
            <TransmissionIcon />
            {camper.transmission}
          </span>
        )}
        {camper.engine && (
          <span className={styles.feature}>
            <EngineIcon />
            {camper.engine}
          </span>
        )}
        {camper.kitchen && (
          <span className={styles.feature}>
            <KitchenIcon />
            Kitchen
          </span>
        )}
        {camper.AC && (
          <span className={styles.feature}>
            <AcIcon />
            Air Conditioning
          </span>
        )}
        {camper.bathroom && (
          <span className={styles.feature}>
            <BathroomIcon />
            Bathroom
          </span>
        )}
        {camper.form && (
          <span className={styles.feature}>{camper.form}</span>
        )}
          </div>
          

          <div>
              <h3>Vehicle details</h3>
              {camper.transmission && (
                  <span className={styles.feature}>
                      Form
            {camper.form}
          </span>
        )}
        {camper.engine && (
                  <span className={styles.feature}>
                      Length
            {camper.length}
          </span>
        )}
              {camper.kitchen && (   
          <span className={styles.feature}>
                      Width
                       {camper.width}
          </span>
        )}
        {camper.AC && (
          <span className={styles.feature}>
                      Height
                      {camper.height}
          </span>
        )}
        {camper.bathroom && (
          <span className={styles.feature}>
                      Tank
                      {camper.tank}
          </span>
        )}
        {camper.form && (
          <span className={styles.feature}>Consumption{camper.consumption}</span>
        )}
        </div>
    </div>
  );
};

export default FuturesContent;
