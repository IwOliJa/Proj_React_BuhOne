function Card(props) {
  // console.log(props);
  // let { number, title, link } = props;
  return (
    <div className="case_card">
      <p>{props.number}</p>
      <p>{props.title}</p>
      <a href="#">{props.link}</a>
    </div>
  );
}

export default Card;
