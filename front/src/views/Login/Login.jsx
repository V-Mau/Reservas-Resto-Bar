import axios from 'axios';
import styles from './Login.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import { setUserData } from '../../Redux/usersSlice';
import { validate } from '../../helpers/logingValidate'; 

const USERLOGIN = "http://localhost:3000/users/login";

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
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formErrors = validate(user); 
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            axios
            .post(USERLOGIN , user)
            .then( respose => respose.data)
            .then(data => {
                dispatch(setUserData(data));
                alert("Iniciaste sesión con éxito");
                navigate("/home");
            })
            .catch((error) => {
                console.error(error);
                alert(`Acceso denegado: ${error?.response?.data?.message}`);
            });
        }
    };

    return (
        <div className={styles.container}>
            <h1>Bienvenido</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <br />
                <div>
                    <label>USERNAME</label>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={user.username}
                        onChange={handleInputChange}
                    />
                    {errors.username && <p className={styles.error}>{errors.username}</p>}
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
                    {errors.password && <p className={styles.error}>{errors.password}</p>}
                </div>
                <button type="submit" className={styles.submitButton}>Submit</button>
                <div>
                    <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
                </div>
            </form>
        </div>
    );
};
