import React, { useState } from "react";
import styles from "./Register.module.css";
import { validateRegister } from "../../helpers/registerValidate";
import axios from 'axios';

export const Register = (props) => {
  const initialState ={
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    confirmpassword: ""
  }
  //? ESTADOS (STATE)
  const [dataRegister, setDataRegister] = useState(initialState);
  const [errors, setErrors] = useState(initialState);


// ? HANDLERS
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDataRegister({
      ...dataRegister,
      [name]: value,
    });
    setErrors(validateRegister({ ...dataRegister, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { 
      name: dataRegister.name ,
       email: dataRegister.email, 
       birthdate: dataRegister.birthdate, 
       nDni: dataRegister.nDni, 
       username: dataRegister.username, 
       password: dataRegister.password };


   console.log(newUser);
   alert ('Usuario registrado')
   peticionRegister(newUser)
  };
 


// ? Aca debe ir el endpoint
  const peticionRegister = (userData) => { 
    axios.post("http://localhost:3000/users/register", userData) 
      .then(({ data }) => {
        console.log(data);
        alert("Usuario registrado con éxito")
        setDataRegister({ 
          name: "",
          email: "",
          birthdate: "",
          nDni: "",
          username: "",
          password: "",
          confirmpassword: ""
        });
      })
      .catch(error => {
        console.error("Error en la petición de registro:", error);
      });
  };

  const formData = [
    {label: "Nombre", name: "name", type: "text", placeholder: "Ingresar nombre"},
    {label: "Email", name: "email", type: "text", placeholder: "example@ex.coml"},
    {label: "Fecha de nacimiento", name: "birthdate", type: "date", placeholder: "Fecha de nacimiento"},
    {label: "Número de DNI", name: "nDni", type: "text", placeholder: "Número de DNI"},
    {label: "Nombre de usuario", name: "username", type: "text", placeholder: "Nombre de usuario"},
    {label: "Contraseña", name: "password", type: "password", placeholder: "Contraseña"},
    {label: "Confirmar contraseña", name: "confirmpassword", type: "password", placeholder: "Confirmar contraseña"},
  ];

  return (
    <div className={styles.container}>

      <h1>Registro</h1>
      

      <form onSubmit={handleSubmit}>
        {formData.map(({label, name, type, placeholder}) => {
          return (
            <div key={name}>
              <label htmlFor={name}>{label}</label>
              <input
               type={type}
               name={name}
               id={name}
               value={dataRegister[name]}
               placeholder={placeholder}
               onChange={handleInputChange}
               />
               {
                errors[name] && <span style={{color: "red"}} >{errors[name]}</span>
               }
               </div>
              );
        })}
        <button 
          type="submit"
          disabled={Object.keys(user).some((e) => !user[e])}
         >
          Registrarse
        </button>
              
      </form>

    </div>
  )
};
