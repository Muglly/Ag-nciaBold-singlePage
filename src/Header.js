import logoagencia from "./images/logoagencia.svg"
import mockup from "./images/mockup.svg"
import {FaAlignJustify, FaRegWindowClose} from "react-icons/fa";

function Header(){

    function abrirMenu(e){
        e.preventDefault();
        let modal = document.querySelector(".intensMenuMobile");
        modal.style.display ="block";
        let none = document.querySelector(".fa");
        none.style.display = "none";
        let block = document.querySelector(".bnt");
        block.style.display = "block";
    }
    
    function fecharMenu(){
        let modal = document.querySelector(".intensMenuMobile");
        modal.style.display ="none";
        let none = document.querySelector(".bnt");
        none.style.display = "none";
        let block = document.querySelector(".fa");
        block.style.display = "block";
    }


    return(
        <div class="main">
            <div class="center">
                <div class="menu">
                    <div class="logo">
                        <a href="/"><img src={logoagencia}/></a>
                    </div>
                    <div class="intensMenu">
                        <a href="#">Inicio</a>
                        <a href="#">Por que nós?</a>
                        <a href="#">Depoimentos</a>
                        <a class="contactBtn" href="">Entre em Contato</a>
                    </div>
                    <div  className="menuMobile">
                        <FaAlignJustify onClick={(e)=>abrirMenu(e)} className="fa"/>
                        <FaRegWindowClose onClick={()=>fecharMenu()} className="bnt"/>
                        <div className="intensMenuMobile">
                            <div className="container">
                                <a href="#">Inicio</a>
                                <a href="#">Por que nós?</a>
                                <a href="#">Depoimentos</a>
                                <a class="contactBtn" href="">Entre em Contato</a>
                            </div>    
                        </div>
                    </div>
                </div>
                <div class="mockup">
                    <h1>Promova <b>experiências</b> aos seus clientes</h1>
                    <br/>
                    <p>E veja resultados expressivos dia após dia</p>
                    <br/>
                    <img src={mockup}/>
                </div>
            </div>
        </div>
    )
}

export default Header;