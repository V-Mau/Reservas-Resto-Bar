import axios from "axios";
import React, { useState } from "react";
import styles from "../Register/Register.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validateBooking } from "../../helpers/validateBookins";

const BOOKING_URL = "http://localhost:3000/bookings/schedule";

export const BookingForm = () => {
  const initialState = {
    date: "",
    time: "",
    description: "",
  };

  const [booking, setBooking] = useState(initialState);
  const [errors, setErrors] = useState({ date: "Debe registrar una fecha" });

  const user_id = useSelector((state) =>  state.actualUser.userData.user.id );
  console.log( 'Que Trae:', user_id);
  const userData = useSelector((state) => state.actualUser.userData.user.id);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBookings = {
      ...booking,
      user_id,
    };
    console.log(newBookings);
    axios
      .post(BOOKING_URL, newBookings)
      .then(({ data }) => data)
      .then((bookingInDB) => {
        alert(`Reserva realizada con éxito:
            Fecha: ${bookingInDB.date}`);
        navigate("/bookings");
      })
      .catch((error) => error.message);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBooking({ ...booking, [name]: value });
    setErrors(validateBooking({ ...booking, [name]: value }));
  };

  const formData = [
    {
      label: "Fecha",
      name: "date",
      type: "date",
      placeholder: "Ingresar fecha",
    },
    {
      label: "Horario",
      name: "time",
      type: "time",
      placeholder: "Ingresar horario",
    },
    {
      label: "Descripción",
      name: "description",
      type: "text",
      placeholder: "Ingresar descripción",
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Registro</h1>

      <form onSubmit={handleSubmit}>
        {formData.map(({ label, name, type, placeholder }) => {
          return (
            <div key={name}>
              <label htmlFor={name}>{label}</label>
              <input
                type={type}
                name={name}
                id={name}
                value={booking[name]}
                placeholder={placeholder}
                onChange={handleInputChange}
              />
              {errors[name] && (
                <span style={{ color: "red" }}>{errors[name]}</span>
              )}
            </div>
          );
        })}
        <button type="submit">Crear reserva...</button>
      </form>
    </div>
  );
};
