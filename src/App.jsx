import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Particules from "./components/particules/Particules";
import "./styleApp.scss";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      {/*     <body className='body'> */}
      <NavBar />
      <Particules />
      <Outlet />
      <Footer />
      {/* /*     </body> */}
    </>
  );
}

export default App;
