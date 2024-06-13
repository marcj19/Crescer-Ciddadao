import React from "react";
import Pix from '../assets/img/pix.png'
import './modaldindin.css'

const Background_Style = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0,0,0, 0.7)',
    zIndex: '1000'
}

const Modal_Style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    padding: '30px',
    backgroundColor: '#DBE2E8',
    borderRadius: '10px',
    color: 'black',
    width: '30%',
}


export default function ModalDinDin({isOpen, setModalOpen, children}) {

    if (isOpen) {
    return (
    <div style={Background_Style}>
    <div style={Modal_Style}>

    <button onClick={setModalOpen} className='botao2'>
        <h5 className="fechar">Fechar</h5>
    </button>
        <div>
        {children}
        </div>

    </div>
    </div>
    )
    }

return null
}

