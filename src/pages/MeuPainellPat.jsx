import React from "react";
import "./MeuPainelPat.css";
import Header from "../components/Header";
import Perfil from '../assets/img/Perfil.png';
import img from '../assets/img/img4.png';
import img2 from '../assets/img/img5.png';


export const MeuPainellPat = () => {
return (
    <>
  
    <Header />
    <main>
    <nav className="buttons-op">
            <button>Perfil</button>
            <button>Segurança</button>
            <button>Carteira</button>
        </nav>
            
    <section className="container-sec-painel">

            <div className="container-div-meio">
            <h2 className="titulo">Patrocinador</h2>
                
                <div className="layout-perfil">
                    <img src={Perfil} alt="Perfil" className="perfil"/>
                <form action=" "className="icons">
                    <div>
                    <input type="text" id="email" placeholder="Email"  /> 
                    <img src={img} id="img1" className="layout-user" />
                    </div>
                    <div>
                    <input type="password" id="password" placeholder="Password"  /> 
                    <img src={img2} id="img2" alt=""  className="layout-user"/>
                    </div>
                </form>
                <button className="edit-button">Editar</button>
            </div>
        </div>
    </section>
    </main>
    </>
)

}

export default MeuPainellPat