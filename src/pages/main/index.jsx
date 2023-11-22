// import Header from "../../components/header";
import FirstBlock from "../../components/firstBlock";
import ServiceBlock from "../../components/servicesBlock";
import AboutBlock from "../../components/aboutBlock";
import ClientsBlock from "../../components/clientsBlock";
import Feedback from "../../components/feedbackBlock";
// import Footer from "../../components/footer";
import Contact from "../../components/contactBlock";

function MainPage() {
  return (
    <main>
      <FirstBlock />
      <ServiceBlock />
      <AboutBlock />
      <ClientsBlock />
      <Feedback />
      <Contact />
    </main>
  );
}

export default MainPage;
