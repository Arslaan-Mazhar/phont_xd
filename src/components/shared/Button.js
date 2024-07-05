import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, onClick, type, variant }) => {
  const buttonClasses = `${styles.button} ${variant === 'secondary' ? styles.secondary : styles.primary}`;

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  variant: 'primary',
};

export default Button;
