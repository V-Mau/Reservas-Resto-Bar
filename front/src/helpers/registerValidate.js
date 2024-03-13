export const validateRegister = ({ name, email, birthdate, nDni, username, password, confirmpassword}) => {
    const errors = {};
    if(!name)errors.name = 'Ingresar nombre'
    if(!email)errors.email = 'Ingresar email'
    if(!birthdate)errors.birthdate = 'Ingresar fecha de nacimiento'
    if(!nDni)errors.nDni = 'Ingresar dni'
    if(!username)errors.username = 'Username invalido'
    if(!password)errors.password = 'Ingresar contraseña'
    if(!confirmpassword)errors.confirmpassword =  'Contraseña invalida'
    if(password !== confirmpassword)errors.confirmpassword = 'Las contraseñas no coinciden'

    
    return errors;
  }