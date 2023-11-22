import styles from "./index.module.css";
function Card(props) {
  return (
    <div className={styles.service_card}>
      <p>{props.title}</p>
    </div>
  );
}
export default Card;
