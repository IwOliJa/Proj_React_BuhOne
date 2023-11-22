import Card from "../cards";
import { data2 } from "../../../utils/utils";

function CardContent() {
  return (
    <div>
      {data2.map((elem) => (
        <Card key={elem.number} title={elem.title} />
      ))}
    </div>
  );
}

export default CardContent;
