import styles from "./index.module.css";

function SliderButton() {
  return (
    <div className={styles.slider_container}>
      <div>
        <span> slBt </span>
        <span> slBt </span>
        <span> slBt </span>
        <span> slBt </span>
      </div>

      <div>
        <button>nextBt</button>
        <button>prevBt</button>
      </div>
    </div>
  );
}
export default SliderButton;
