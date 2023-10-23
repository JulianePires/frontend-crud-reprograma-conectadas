import styles from "../../styles/pages/Visualizar.module.css";
import useBooks from "../../context/Books";

const Visualizar = () => {
  const { books } = useBooks();
  return <div className={styles.container}>Visualizar</div>;
};

export default Visualizar;
