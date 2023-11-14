import Card from "../cards";
const data = [
  { number: 1, title: "1.Бухгалтерское обслуживание" },
  { number: 2, title: "2.Бухгалтерское обслуживание" },
  { number: 3, title: "3.Бухгалтерское обслуживание" },
  { number: 4, title: "4.Бухгалтерское обслуживание" },
];

function CardContent() {
  return (
    <div>
      {data.map((elem) => (
        <Card key={elem.number} title={elem.title} />
      ))}
    </div>
  );
}

export default CardContent;
