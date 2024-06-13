import React from 'react';
import './Blog.css'; 
import Header from '../components/Header'
import Nav from '../components/Nav'
import { Footer } from '../components/footer'
import Retangulo from "../assets/img/retangulo-1.svg"
import Retangulo2 from "../assets/img/retangulo-2.svg"
import Compartilhar from '../assets/img/Compartilhar.svg'
import Instagram from "../assets/img/Icon-color.svg"
import WhatsApp from "../assets/img/Vector.svg"
import Gincana from '../assets/img/GINCANA.jpg'


export default function Blog(){
  return(
    <>
    <Header/>
    <Nav/>
    <div className="quem-somos">
                <div className="linha">
                    <img src={Retangulo} />
                </div> 
                <div className="title">
                    <h2>BLOG</h2>
                </div>
                <div className="linha">
                    <img src={Retangulo2} />
                </div>
            </div>
    <section className="Eventos">
      <div className="layout-inside">
        <div className='image-layout-event'>
          <img src={Gincana} alt="" />
          </div>
          <div className="both">
        <p className="text-event">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates earum veniam quae repellendus delectus perferendis fugiat cumque perspiciatis aliquam numquam adipisci, reiciendis aspernatur dignissimos ab animi accusantium dolor? Eaque!
        </p>
        <div className="layout-link">
          <img src={Compartilhar} alt="" />
          <img src={Instagram} alt="" />
          <img src={WhatsApp} alt="" />
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}