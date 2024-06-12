import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../components/Header';
import Nav from '../components/Nav'
import { Footer } from '../components/footer';
import './SobreNos.css';
import Logo1 from "../assets/img/img10.jpg";
import Logo2 from "../assets/img/img20.jpg";
import Logo3 from "../assets/img/mulher.png";
import Logo4 from "../assets/img/PuloCrianças.png";

// Componente para a seta esquerda do carrossel
const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...props.style, left: "170px", zIndex: "10", top: "170px" }} // Ajuste da posição vertical para cima
    >
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.4142 12L20.7071 16.2929L19.2929 17.7071L13.5858 12L19.2929 6.29289L20.7071 7.70711L15.4142 12Z" fill="#333333"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M11 2C5.47715 2 1 6.47715 1 12C1 17.5228 5.47715 22 11 22C16.5228 22 21 17.5228 21 12C21 6.47715 16.5228 2 11 2ZM3 12C3 7.58172 6.58172 4 11 4C15.4183 4 19 7.58172 19 12C19 16.4183 15.4183 20 11 20C6.58172 20 3 16.4183 3 12Z"/>
      </svg>
    </div>
  );
};

// Componente para a seta direita do carrossel
const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...props.style, right: "200px", zIndex: "10", top: "170px" }} // Ajuste da posição vertical para cima
    >
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.58579 12L3.29289 16.2929L4.70711 17.7071L10.4142 12L4.70711 6.29289L3.29289 7.70711L8.58579 12Z" fill="#333333"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M13 2C18.5228 2 23 6.47715 23 12C23 17.5228 18.5228 22 13 22C7.47715 22 3 17.5228 3 12C3 6.47715 7.47715 2 13 2ZM21 12C21 16.4183 17.4183 20 13 20C8.58172 20 5 16.4183 5 12C5 7.58172 8.58172 4 13 4C17.4183 4 21 7.58172 21 12Z"/>
      </svg>
    </div>
  );
};

export const SobreNosl = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Ativar as setas de navegação
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };
  return (
    <>
      <Header />
      <Nav/>
      <div className="sobre-nos-container">
        <svg className="svg-left" width="679" height="13" viewBox="0 0 674 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H667.5C671.09 0 674 2.91015 674 6.5V6.5C674 10.0899 671.09 13 667.5 13H0V0Z" fill="#333333"/>
        </svg>
        <h1>SOBRE-NÓS</h1>
        <svg className="svg-right" width="679" height="13" viewBox="0 0 679 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 6.5C0 2.91015 2.91015 0 6.5 0H689V13H6.50002C2.91016 13 0 10.0899 0 6.5Z" fill="#333333"/>
        </svg>
      </div>
      <div className="line-container">
        <div className="line"></div>
        <Slider {...settings}>
          <div>
            <img src={Logo1} alt="Slide 1" />
            <h1>Angela</h1>
            <h3>Angela é uma funcionária dedicada e confiável, conhecida por sua ética de trabalho exemplar e sua atenção aos detalhes. Com habilidades de comunicação eficazes, ela facilita a colaboração entre departamentos. Profissionalmente competente, ela resolve problemas rapidamente e busca constantemente oportunidades de aprendizado. Sua personalidade gentil e empática cria um ambiente de trabalho positivo e acolhedor para todos ao seu redor</h3>
          </div>
          <div>
            <img src={Logo2} alt="Slide 2" />
            <h1>Angela</h1>
            <h3>Angela é uma funcionária dedicada e confiável, conhecida por sua ética de trabalho exemplar e sua atenção aos detalhes. Com habilidades de comunicação eficazes, ela facilita a colaboração entre departamentos. Profissionalmente competente, ela resolve problemas rapidamente e busca constantemente oportunidades de aprendizado. Sua personalidade gentil e empática cria um ambiente de trabalho positivo e acolhedor para todos ao seu redor</h3>
          </div>
          <div>
            <img src={Logo3} alt="Slide 3" />
            <h1>Angela</h1>
            <h3>Angela é uma funcionária dedicada e confiável, conhecida por sua ética de trabalho exemplar e sua atenção aos detalhes. Com habilidades de comunicação eficazes, ela facilita a colaboração entre departamentos. Profissionalmente competente, ela resolve problemas rapidamente e busca constantemente oportunidades de aprendizado. Sua personalidade gentil e empática cria um ambiente de trabalho positivo e acolhedor para todos ao seu redor.</h3>
          </div>
        </Slider>
        <div className="nossa-historia-container">
          <svg className="svg-left" width="679" height="13" viewBox="0 0 674 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H667.5C671.09 0 674 2.91015 674 6.5V6.5C674 10.0899 671.09 13 667.5 13H0V0Z" fill="#333333"/>
          </svg>
          <h1>NOSSA HISTORIA</h1>
          <svg className="svg-right" width="679" height="13" viewBox="0 0 679 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6.5C0 2.91015 2.91015 0 6.5 0H689V13H6.50002C2.91016 13 0 10.0899 0 6.5Z" fill="#333333"/>
          </svg>
        </div>
        <div className="historia-instituição">
          <h2>Marcos era um homem de meia-idade com um sorriso amável e olhos que brilhavam de determinação. Ele trabalhava como contador em uma pequena empresa familiar chamada "Soluções Financeiras Integradas". Desde o momento em que entrou na empresa, Marcos mostrou um compromisso inabalável com seu trabalho. Ele era conhecido por sua ética profissional impecável e sua capacidade de resolver problemas financeiros complexos com facilidade. No entanto, a vida de Marcos não era apenas sobre números e planilhas. Ele também era um grande apoiador da comunidade local. Sempre que havia eventos de caridade ou oportunidades de voluntariado, Marcos estava lá na linha de frente, oferecendo seu tempo e recursos para ajudar os outros.</h2>
        </div>
      </div>
      <div className="outra-linha">
        <img src={Logo4} alt="Imagem três" />
      </div>
      <div className="resto-da-historia">
        <h2>Ao longo dos anos, Marcos se tornou um pilar da empresa. Ele não apenas cuidava das finanças, mas também atuava como mentor para os funcionários mais jovens, compartilhando sua sabedoria e experiência com generosidade. Um dia, a empresa enfrentou uma crise financeira inesperada devido a mudanças no mercado. Todos estavam preocupados com o futuro da empresa, mas Marcos permaneceu calmo e focado. Ele trabalhou incansavelmente para encontrar soluções criativas para estabilizar as finanças da empresa e manter todos os funcionários empregados. Graças aos esforços hercúleos de Marcos e sua equipe, a empresa conseguiu superar a crise e emergir mais forte do que nunca. Marcos foi elogiado por sua liderança excepcional e recebeu reconhecimento não apenas da direção da empresa, mas também de toda a comunidade. Com o tempo, Marcos se aposentou da "Soluções Financeiras Integradas", deixando um legado de integridade, trabalho árduo e compaixão. Sua história continuou a inspirar não apenas seus colegas de trabalho, mas todos aqueles que tiveram a sorte de cruzar seu caminho. </h2>
      </div>
      <Footer/>    
    </>
  );
};

export default SobreNosl;