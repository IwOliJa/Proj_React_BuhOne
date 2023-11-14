import ClientsInfo from "./clientsInfo";
import ClientsHeading from "./heading";
import SliderButton from "./sliderButtons";

function ClientsBlock() {
  return (
    <div>
      <ClientsHeading />
      <ClientsInfo />
      <ClientsInfo />
      <ClientsInfo />
      <ClientsInfo />
      <SliderButton />
    </div>
  );
}
export default ClientsBlock;
