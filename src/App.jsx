import Header from "./pages/Header";
import "./style/App.css";
import MainFetch from "./pages/MainFetch";
import MainActu from "./pages/MainActu";
import MainEquipes from "./pages/MainEquipes";
import MainBoutique from "./pages/MainBoutique";
import MainContact from "./pages/MainContact";
import Footer from "./pages/Footer";
import Break from "./components/Break";

// Router //

// //

function App() {
  return (
    <>
      <div className="bkgd-body"></div>
      <Header />
      <MainActu />
      <Break />
      <MainFetch />
      <Break />
      <MainEquipes />
      <Break />
      <MainBoutique />
      <MainContact />
      <Footer />
    </>
  );
}

export default App;
