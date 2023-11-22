import Card from "../cards";
import { data1 } from "../../../utils/utils";
function CardContent() {
  return (
    <div>
      {data1.map((elem) => (
        <Card
          key={elem.number}
          number={elem.number}
          title={elem.title}
          link={elem.link}
        />
      ))}
    </div>
  );
}

export default CardContent;
