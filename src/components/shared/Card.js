import styles from './Card.module.scss';

const Card = ({ children }) => {
  return (
    <div className={styles.centeredCard}>
    <div className={styles.card}>
      {children}
    </div>
  </div>
  );
};

export default Card;
