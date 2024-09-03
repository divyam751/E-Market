import "./App.css";
import Banner from "./components/Banner";
import AllRoutes from "./routes/AllRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Banner />
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
