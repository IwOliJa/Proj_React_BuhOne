import "./App.css";
import MainPage from "./pages/main";
import Header from "./components/header/index.jsx";
import Footer from "./components/footer/index.jsx";
import AboutPage from "./pages/about/index.jsx";
import CasesPage from "./pages/cases/index.jsx";
import ContactsPage from "./pages/contacts/index.jsx";
import ServicesPage from "./pages/services/index.jsx";

function App() {
  return (
    <div className="mainContainer">
      <Header />
      <MainPage />
      {/*  <AboutPage />
      <CasesPage />
      <ContactsPage />
      <ServicesPage />  */}
      <Footer />
    </div>
  );
}

export default App;
