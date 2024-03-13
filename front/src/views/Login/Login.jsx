import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { validate } from '../../helpers/logingValidate';
import styles from './Login.module.css';
import axios from 'axios';
import { login } from '../../Redux/usersSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const Login = () => { 
const initialState = {
        username: "",
        password: ""
    }
const [user, setUser] = useState(initialState);
const [errors, setErrors] = useState(initialState);
       
   

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        });
        
        setErrors(validate({...user, [name]: value})); 
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        
        
        axios
        .post("http://localhost:3000/users/login", user)
        .then( respose => respose.data)
        .then(data => {
            dispatch(login(data));
            alert("Login exitoso");
            navigate("/home");
        })
       
        .catch((error) => {
            console.error(error);
            alert(`Acceso denegado: ${error?.response?.data?.message}`);
        })
    };

   

    return (
        
        <div className={styles.container}>

            <h1>Bienvenido</h1>

        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <label>USERNAME</label>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={user.username}
                    onChange={handleInputChange}
                />
                {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
            </div>
            <div>
                <label>PASSWORD</label>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}
                />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </div>
            <button type="submit">Submit</button>
            <div>
                <p>¿No tienes una cuenta? <Link to="/registro">Regístrate</Link></p>
            </div>
        </form>
            </div>
    );
};

