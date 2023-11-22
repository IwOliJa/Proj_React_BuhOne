import styles from "./index.module.css";

function MainTitle() {
  return (
    <div>
      <h1 className={styles.firstblock_title}>
        Бухгалтерские услуги <br /> в вашем городе
      </h1>
      <button className={styles.firstblock_button}>Наша презентация</button>
    </div>
  );
}
export default MainTitle;
