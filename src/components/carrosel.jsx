import React from "react"
import './carrosel.css'
import Imagem1 from "../assets/img/img1.jpeg"
import Imagem2 from "../assets/img/img2.png"
import Imagem3 from "../assets/img/img3.png"
import Imagem4 from "../assets/img/img15.png"
import Retangulo from "../assets/img/retangulo-1.svg"
import Retangulo2 from "../assets/img/retangulo-2.svg"
import OS from "../assets/img/sobre-nos.png"
import Instagram from "../assets/img/Icon-color.svg"
import WhatsApp from "../assets/img/Vector.svg"
import Youtube from "../assets/img/Youtube.svg"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Footer } from "./footer"


function Carrosel() {

    const data = [
        { id: '1', image: Imagem1 },
        { id: '2', image: Imagem2 },
        { id: '3', image: Imagem3 },
        { id: '4', image: Imagem4 },
    ]
    return (
        <>
            <section className="secao">
                <div className="layout-carrosel">
                    <div className="layout-images">
                        <Swiper
                            slidesPerView={3}
                            pagination
                            autoplay={{ delay: 2500 }}
                            spaceBetween={25}
                            loop={true}
                        >
                            {data.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <img
                                        src={item.image}
                                        alt="Imagem"
                                        className=""
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            <div className="quem-somos">
                <div className="linha">
                    <img src={Retangulo} />
                </div> 
                <div className="title">
                    <h2>QUEM SOMOS</h2>
                </div>
                <div className="linha">
                    <img src={Retangulo2} />
                </div>
            </div>
            <div className="phrase-tit">
                    <p>trabalhando com crianças e adolescentes pcd’s e sua familia</p>
                </div>
            <div className="layout-quem-somos">
                <div className="layout-central">
                    <div className="layout-image">
                        <img src={OS} alt="" />
                    </div>
                    <div className="layout-text">
                        <p>A ONG "Crescer Cidadão" é uma instituição dedicada a fornecer
                            serviços e assistência abrangente para crianças e adolescentes com deficiência,
                            além de auxiliar mães solteiras a encontrar trabalho.
                            Seu objetivo é garantir igualdade de oportunidades de 
                            desenvolvimento para todos, oferecendo terapias especializadas, educação
                            inclusiva, orientação familiar e atividades recreativas adaptadas.
                            Além disso, a ONG promove a conscientização e a inclusão na comunidade.
                            Com uma equipe comprometida de profissionais e voluntários, o "Crescer Cidadão"
                            capacita crianças com deficiência a alcançar seu potencial máximo, fortalecendo
                            as famílias em situação de vulnerabilidade e contribuindo para uma sociedade mais
                            inclusiva e solidária.
                        </p>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default Carrosel