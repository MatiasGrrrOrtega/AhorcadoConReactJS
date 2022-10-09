import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/Developer.css';
import developer from '../data/developer.json';

function Developer() {
  return (
    <div className="container-team">
      <h1>Desarrollador</h1>
      <div className="team">
      <div className="developer">
            <img className='developer-image' src={developer.description.src} alt="developer-image"/>
            <div className='developer-decription'>
                <a className="developer-perfil-github" 
                target="_blank"
                    href={developer.description.github}
                >
                {developer.description.name}                
                </a>
                <div className='developer-age'>
                    {developer.description.age}
                </div>
                <div className='developer-frase'>
                    "{developer.description.phrase}"
                </div>
            </div>
        </div>
      </div>
      <div className="container-team-boton">
        <Link to={"/"} className="button-of-page">Inicio</Link>
      </div>
    </div>
  );
}
export default Developer;
