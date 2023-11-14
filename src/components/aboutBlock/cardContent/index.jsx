import Card from "../cards";
const data = [
  { number: 91, title: "1.Завершено крупных сделок", link: "все кейсы" },
  { number: 92, title: "2.Завершено крупных сделок", link: "все кейсы" },
  { number: 93, title: "3.Завершено крупных сделок", link: "все кейсы" },
  { number: 94, title: "4.Завершено крупных сделок", link: "все кейсы" },
  { number: 95, title: "5.Завершено крупных сделок", link: "все кейсы" },
  { number: 96, title: "6.Завершено крупных сделок", link: "все кейсы" },
];
function CardContent() {
  return (
    <div>
      {data.map((elem) => (
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
