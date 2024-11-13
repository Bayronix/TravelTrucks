import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../../../redux/store"
import { fetchCampers } from "../../../../../redux/campers/campersSlice";
import { useEffect } from "react";
import styles from "./BookingForm.module.css"



const BookingForm = () => {
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCampers());
      }, [dispatch]);
    

    return (
        <div className={styles.container}>
            <div>
                <p>Booking Form</p>
            </div>
        </div>
    )
}

export default BookingForm;