import { Outlet } from "react-router-dom";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
