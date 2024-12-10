import PropTypes from 'prop-types';  // Importa PropTypes
import styles from './VerticalCardMenu.module.css'; 

const VerticalCardMenu = ({ drinkImages }) => {
  return (
    <div className={styles.VerticalCardMenu}> 
      <h1>Bebidas Locas</h1>
      {drinkImages.map((image, index) => (
        <img key={index} src={image} alt={`Imagen ${index}`} /> 
      ))}
    </div>
  );
};

// Definir los tipos para las props
VerticalCardMenu.propTypes = {
  drinkImages: PropTypes.arrayOf(PropTypes.string).isRequired, 
};

export default VerticalCardMenu;
