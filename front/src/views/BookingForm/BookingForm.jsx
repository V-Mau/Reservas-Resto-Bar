import axios from "axios";
import React, { useState } from "react";
import styles from "../Register/Register.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BOOKING_URL = "http://localhost:3000/bookings/schedule";
const regexFecha = /^\d{4}-\d{2}-\d{2}$/;

const MIN_LONGITUD_DESCRIPCION = 5;
const MAX_LONGITUD_DESCRIPCION = 100;

export const bookingForm = (orops) => {
  const initialState = {
    date: "",
    time: "",
    description: "",
  };

  const [booking, setBooking] = useState(initialState);
  const [errors, setErrors] = useState({ date: "Debe registrar una fecha" });

  const validateBooking = ({ date, time, description }) => {
    const errors = {};
    if (!date) errors.date = "Debe registrar una fecha";
    if (!regexFecha.test(date)) errors.date = "Debe registrar una fecha válida";
    if (!time) errors.time = "Debe registrar un horario";
    if (!description) errors.description = "Debe registrar una descripción";
    if (description.length < MIN_LONGITUD_DESCRIPCION)
      errors.description = "La descripción debe tener al menos 5 caracteres";
    if (description.length > MAX_LONGITUD_DESCRIPCION)
      errors.description = "La descripción debe tener menos de 100 caracteres";
    return errors;
  };

  const userId = useSelector((state) => state?.actualUser?.user?.id);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBookings = {
      ...booking,
      userId,
    };

    axios
      .post(BOOKING_URL + newBookings)
      .then(({ data }) => data)
      .then((bookingInDB) => {
        alert(`Reserva realizada con exito:
            Fecha: ${bookingInDB.date}`);
        useNavigate("/bookings");
      })
      .catch((error) => error.message);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBooking({ ...booking, [name]: value });
    setErrors(handleValidation({ ...booking, [name]: value }));
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
      placeholder: "ingresar horario",
    },
    {
      label: "Descrioción",
      name: "dscription",
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
        <button
          type="submit"
          disabled={Object.keys(booking).some((e) => !booking[e])}
        >
          Crear reserva...
        </button>
      </form>
    </div>
  );
};
