import BookingForm from "../BookingForm/BookingForm";
import styles from "./CatologReviews.module.css"
const ReviewsContent = () => {
    return <div className={styles.container}>
         <h1>Reviews Content for this catalog item.</h1>
          <div><BookingForm/></div>
   
    </div>;
};

export default ReviewsContent;