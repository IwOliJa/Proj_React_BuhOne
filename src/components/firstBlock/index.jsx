import styles from "./index.module.css";
// import "./index.css";
import SliderButton from "./sliderButtons";
import MainTitle from "./title";

function FirstBlock() {
  return (
    <div className={styles.div_wrapper}>
      <MainTitle />
      <SliderButton />
    </div>
  );
}
export default FirstBlock;
