import "./App.css";
import Banner from "./components/Banner";
import AllRoutes from "./routes/AllRoutes";
import Navbar from "./components/Navbar";
import ReactToast from "./components/ReactToast";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Banner />
      <Navbar />
      <AllRoutes />
      <ReactToast />
      <Footer />
    </div>
  );
}

export default App;
