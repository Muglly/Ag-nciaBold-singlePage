import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import User1 from "./images/DEPOIMENTO1.png";
import User2 from "./images/DEPOIMENTO2.png";
import User3 from "./images/DEPOIMENTO3.png";
import rate from "./images/RATE.svg"

function Depoimentos () {

    const slick = {
        dots: true,
        arrows:false,
        ifinite: true,
        centerMode: false,
        centerPadding: 0,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        pauseOnHover:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 740,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return(

        <div class="depoimentos">
            <h1>Depoimentos</h1>
            <div class="center">
                <Slider {...slick} class="slider">
                    <div class="sliderSingle">
                        <img src={User1}/>
                        <h3>Mirian Souza</h3>
                        <p>Uber</p>
                        <p>O trabalho da Agência Bold foi fundamental para o nosso posicionamento e nossas estratégias de 2021. Juntos tivemos excelentes resultados e nossos clientes ficaram surpresos com a qualidade. Foi um trabalho incrível feito a muitas mãos pela Uber e pelo time da Agência Bold.</p>
                        <img src={rate}/>
                    </div>
                    <div class="sliderSingle">
                    <img src={User2}/>
                        <h3>Lucas Mendes</h3>
                        <p>The North Face</p>
                        <p>Buscamos a Agência Bold para nos ajudar com campanhas de growth marketing focadas em um público extremamente específico. O produto teve faturamento maior que 300%.</p>
                        <img src={rate}/>
                    </div>
                    <div class="sliderSingle">
                    <img src={User3}/>
                        <h3>Zaya Menphis</h3>
                        <p>Rappi</p>
                        <p>A estratégia de lançamento da marca não seria a mesma sem o trabalho comprometido da Agência Bold. Obrigado ao Vinícius, que abraçou nossos desafios como um de nós.</p>
                        <img src={rate}/>
                    </div>
                    <div class="sliderSingle">
                        <img src={User1}/>
                        <h3>Mirian Souza</h3>
                        <p>Uber</p>
                        <p>O trabalho da Agência Bold foi fundamental para o nosso posicionamento e nossas estratégias de 2021. Juntos tivemos excelentes resultados e nossos clientes ficaram surpresos com a qualidade. Foi um trabalho incrível feito a muitas mãos pela Uber e pelo time da Agência Bold.</p>
                        <img src={rate}/>
                    </div>
                    <div class="sliderSingle">
                    <img src={User2}/>
                        <h3>Lucas Mendes</h3>
                        <p>The North Face</p>
                        <p>Buscamos a Agência Bold para nos ajudar com campanhas de growth marketing focadas em um público extremamente específico. O produto teve faturamento maior que 300%.</p>
                        <img src={rate}/>
                    </div>
                    <div class="sliderSingle">
                    <img src={User3}/>
                        <h3>Zaya Menphis</h3>
                        <p>Rappi</p>
                        <p>A estratégia de lançamento da marca não seria a mesma sem o trabalho comprometido da Agência Bold. Obrigado ao Vinícius, que abraçou nossos desafios como um de nós.</p>
                        <img src={rate}/>
                    </div>
                    <div class="sliderSingle">
                        <img src={User1}/>
                        <h3>Mirian Souza</h3>
                        <p>Uber</p>
                        <p>O trabalho da Agência Bold foi fundamental para o nosso posicionamento e nossas estratégias de 2021. Juntos tivemos excelentes resultados e nossos clientes ficaram surpresos com a qualidade. Foi um trabalho incrível feito a muitas mãos pela Uber e pelo time da Agência Bold.</p>
                        <img src={rate}/>
                    </div>
                    <div class="sliderSingle">
                    <img src={User2}/>
                        <h3>Lucas Mendes</h3>
                        <p>The North Face</p>
                        <p>Buscamos a Agência Bold para nos ajudar com campanhas de growth marketing focadas em um público extremamente específico. O produto teve faturamento maior que 300%.</p>
                        <img src={rate}/>
                    </div>
                    <div class="sliderSingle">
                    <img src={User3}/>
                        <h3>Zaya Menphis</h3>
                        <p>Rappi</p>
                        <p>A estratégia de lançamento da marca não seria a mesma sem o trabalho comprometido da Agência Bold. Obrigado ao Vinícius, que abraçou nossos desafios como um de nós.</p>
                        <img src={rate}/>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Depoimentos;