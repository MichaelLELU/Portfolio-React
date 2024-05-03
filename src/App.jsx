import { Outlet } from 'react-router-dom';
import NavBar from './components/navbar/NavBar'
import './styleApp.scss';
import Footer from './components/footer/Footer';

function App() {


  return (
   <>
   <NavBar/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default App
