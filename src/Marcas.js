import logo1 from "./images/LOGO1.png"
import logo2 from "./images/LOGO2.png"
import logo3 from "./images/LOGO3.png"
import logo4 from "./images/LOGO4.png"
import logo5 from "./images/LOGO5.png"

function Marcas(){

    return(
        <div class="marcas">
            <div class="center">
                <img src={logo1}/>
                <img src={logo2}/>
                <img src={logo3}/>
                <img src={logo4}/>
                <img src={logo5}/>
            </div>
        </div>
    )
}

export default Marcas;