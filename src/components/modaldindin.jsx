import React from "react";

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
    padding: '150px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    color: 'black'
}

export default function ModalDinDin({isOpen, setModalOpen, children}) {

    if (isOpen) {
    return (
    <div style={Background_Style}>
    <div style={Modal_Style}>
        <div>
        {children}
        </div>

        <button onClick={setModalOpen} className='botao2'style={{color: 'black', width:'150px', alignItems:'center'}}>
            Fechar
        </button>
       
    </div>
    </div>
    )
    }

return null
}

