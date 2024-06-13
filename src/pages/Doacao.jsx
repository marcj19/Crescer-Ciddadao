import React, { useState } from 'react'
import './doacao.css'
import Header from '../components/Header'
import Nav from "../components/Nav"
import Retangulo from "../assets/img/retangulo-1.svg"
import Retangulo2 from "../assets/img/retangulo-2.svg"
import abacaxi from "../assets/img/abacaxi.svg"
import moeda from "../assets/img/moeda.svg"
import roupa from "../assets/img/roupa.svg"
import {Footer} from '../components/footer'
import ModalDinDin from '../components/modaldindin'
import Pix from '../assets/img/pix.png'


const Pix_Style = {
    width: '103%',
    height: '150%'
}


export const Doacao = () => {

    const[openModal, setOpenModal] = useState(false)

  return (
    <>
    <Header  />
    <Nav />

    <section className='sec-quem-somos'>
        <div className="layer">
                    <div className="linha-1">
                        <img src={Retangulo} />
                    </div>
                    <div className="titulo3">
                        <h2>APOIE NOS</h2>
                    </div>
                    <div className="linha-2">
                        <img src={Retangulo2} />
                    </div>
                </div>
            <div className='div-doacao'>
                <h4>Aqui, você faz a <span className='color-blue'>diferença</span>!</h4>
                <div className='opcoes-doacao'>
                    <div className='alimentos'>
                        <img src={abacaxi} alt="" />
                        <p>Doação de alimentos não perecíveis</p>
                        <button className='btn-doar'>Doar</button>
                    </div>
                    <div className='dinheiro'>
                        <img src={moeda} alt="" />
                        <p>Seu apoio financeiro transforma nossa causa</p>
                        <button className="btn-doar" onClick={() => setOpenModal(true)}>Doar</button>
                        <div><ModalDinDin isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                        <img style={Pix_Style} src={Pix} alt="Pix" />
                        </ModalDinDin>
                        </div>
                    </div>
                    <div className='roupa'>
                        <img src={roupa} alt="" />
                        <p>Nos sentimos acolhidos por você</p>
                        <button className="btn-doar">Doar</button>
                    </div>
                </div>
            </div>
    </section>
    
    < Footer />

    </>
  )
}