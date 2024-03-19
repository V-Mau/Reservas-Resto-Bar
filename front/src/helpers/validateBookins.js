const MIN_LONGITUD_DESCRIPCION = 5;
const MAX_LONGITUD_DESCRIPCION = 100;


export function validateBooking({ date, time, description }) {
        const errors = {};
        if (!date) errors.date = "Debe registrar una fecha";
        // if (!regexFecha.test(date)) errors.date = "Debe registrar una fecha válida";
        if (!time) errors.time = "Debe registrar un horario";
        if (!description) errors.description = "Debe registrar una descripción";
        if (description.length < MIN_LONGITUD_DESCRIPCION)
            errors.description = "La descripción debe tener al menos 5 caracteres";
        if (description.length > MAX_LONGITUD_DESCRIPCION)
            errors.description = "La descripción debe tener menos de 100 caracteres";
        return errors;
}
