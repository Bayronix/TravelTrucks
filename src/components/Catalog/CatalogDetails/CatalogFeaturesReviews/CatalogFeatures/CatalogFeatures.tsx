import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../redux/store";
import styles from "./CatalogFeatures.module.css";
import { useEffect } from "react";
import { fetchCampers } from "../../../../../redux/campers/campersSlice";
import { AcIcon, BathroomIcon, EngineIcon, KitchenIcon, TransmissionIcon } from "../../../../../assets/spriteSvgComponents/sprite";
import { useCampersSelector } from "../../../../../redux/campers/campersSelector";
import { useParams } from "react-router-dom";
import BookingForm from "../BookingForm/BookingForm";

const FuturesContent = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useCampersSelector();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const camper = data.find((item) => item.id === id);

  if (!camper) return <p>No camper found with this ID</p>;

  
  return (
    <div className={styles.container} >
      <div className={styles.containerFeatures}>
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
  <h3 className={styles.h3 }>Vehicle details</h3>
  {camper.transmission && (
    <div className={styles.featureRow}>
      <span className={styles.featureLabel}>Form</span>
      <span className={styles.featureValue}>{camper.form}</span>
    </div>
  )}
  {camper.engine && (
    <div className={styles.featureRow}>
      <span className={styles.featureLabel}>Length</span>
      <span className={styles.featureValue}>{camper.length}</span>
    </div>
  )}
  {camper.kitchen && (
    <div className={styles.featureRow}>
      <span className={styles.featureLabel}>Width</span>
      <span className={styles.featureValue}>{camper.width}</span>
    </div>
  )}
  {camper.AC && (
    <div className={styles.featureRow}>
      <span className={styles.featureLabel}>Height</span>
      <span className={styles.featureValue}>{camper.height}</span>
    </div>
  )}
  {camper.bathroom && (
    <div className={styles.featureRow}>
      <span className={styles.featureLabel}>Tank</span>
      <span className={styles.featureValue}>{camper.tank}</span>
    </div>
  )}
  {camper.form && (
    <div className={styles.featureRow}>
      <span className={styles.featureLabel}>Consumption</span>
      <span className={styles.featureValue}>{camper.consumption}</span>
    </div>
  )}
</div>

        </div>
      <div><BookingForm/></div>
    </div>
  );
};

export default FuturesContent;
