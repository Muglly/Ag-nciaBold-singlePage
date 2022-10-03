import logoagencia from "./images/logoagencia.svg"
import mockup from "./images/mockup.svg"

function Header(){

    return(
        <div class="main">
        <div class="center">
            <div class="menu">
                <div class="logo">
                    <a href="/"><img src={logoagencia}/></a>
                </div>
                <nav class="intensMenu">
                    <a href="#">Inicio</a>
                    <a href="#">Por que nós?</a>
                    <a href="#">Depoimentos</a>
                    <a class="contactBtn" href="">Entre em Contato</a>
                </nav>
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