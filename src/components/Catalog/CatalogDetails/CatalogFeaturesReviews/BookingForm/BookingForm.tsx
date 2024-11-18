import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BookingForm.module.css";
import { Formik, Form, Field } from "formik";

interface MyFormValues {
  firstname: string;
  email: string;
  date: Date | null;
  coment: string;
}

const BookingForm: React.FC = () => {
  const initialValues: MyFormValues = { firstname: "", email: "", date: null, coment: "" };

  const handleSubmit = (values: MyFormValues) => {
    console.log("Form values:", values);
  };

  return (
    <div className={styles.container}>
          <div className={styles.containerForm}>
            <div className={styles.containerHeaderContainer}>
                <h1>Book your campervan now</h1>
                <p>Stay connected! We are always ready to help you</p>
            </div>
        
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <ul >
                <li className={styles.containerDiv}>
                  <Field
                    className={styles.containerFormField}
                    id="firstname"
                    name="firstname"
                    placeholder="Name*"
                  />
                </li>
                <li  className={styles.containerDiv}>
                  <Field
                    className={styles.containerFormField}
                    id="email"
                    name="email"
                    placeholder="Email*"
                  />
                </li >
                <li  className={styles.containerDiv}>
                  <DatePicker
                    className={styles.containerFormField}
                    selected={values.date}
                    onChange={(date) => setFieldValue("date", date)}
                    dateFormat="yyyy/MM/dd"
                    placeholderText="Booking date*"
                  />
                </li>
                <li className={styles.containerDiv}>
                  <Field
                    className={styles.containerFormFieldComent}
                    id="coment"
                    name="coment"
                    placeholder="Coment*"
                  />
                </li>
                <li >
                  
                </li>
                </ul>
            <button className={styles.button} type="submit">
            <span className={styles.buttonText}>Submit</span>
            </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BookingForm;
