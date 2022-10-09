import { Link } from "react-router-dom";
//Importando Imagenes
import imgHome from '../assets/images/ahorcadoHome.jpg'
import logo from '../assets/images/soga-logo.png'
// Importe de los estilos .css
import '../assets/styles/Home.css'

export default function Home() {
  return (
    // Sección "Inicio"
    <div className="container-inicio">
      <h1>AH<img className='container-inicio-logo' src={logo} alt="logo"/>RCADO</h1>
      <img className="container-inicio-imagen" src={imgHome} alt="imagen-colgado"/>
      <div className="container-inicio-botones">
        <Link to={'/Game'} className="button-of-page"> Jugar </Link> 
        <Link to={'/Developer'} className="button-of-page"> Developer </Link>
      </div>
    </div>
    // Botón 'Jugar' con enlace a la página "Game"
    // Botón 'Desarrolladores' con enlace a la página "Team"
  )
}