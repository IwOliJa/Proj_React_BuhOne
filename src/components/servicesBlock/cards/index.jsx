import "./style.css";
function Card(props) {
  return (
    <div className="service_card">
      <p>{props.title}</p>
    </div>
  );
}
export default Card;
