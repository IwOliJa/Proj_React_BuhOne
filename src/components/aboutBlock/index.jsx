import CardContent from "./cardContent";
import Description from "./description";
import styles from "./index.module.css";

function AboutBlock() {
  return (
    <div className="about_contents">
      <Description />
      <CardContent />
    </div>
  );
}
export default AboutBlock;
