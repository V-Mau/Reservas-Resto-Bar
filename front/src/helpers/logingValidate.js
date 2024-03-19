export const validate = ({ username, password }) => {
   const regexUsername = /^[a-zA-Z0-9_-]{3,16}$/;
   const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d_-]{8,}$/;

   const errors = {};
   
   if (!username) errors.username = 'Ingresar usuario';
   if (!regexUsername.test(username)) errors.username = 'Usuario inválido';

   if (!password) errors.password = 'Ingresar contraseña';
   // if (!regexPassword.test(password)) errors.password = 'Contraseña inválida';

   return errors; 
}
