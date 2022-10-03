import check from "../src/images/checklist.png"
import macbook from "../src/images/IMAGEM1.png"

function Beneficios () {

    return(
        <div class="beneficios">
            <div class="center">
                <div class="listaBeneficios">
                    <h1>Benefícios para você</h1><br/>
                    <p><img src={check}/><span>Garantia de resultados, pague de acordo com o desempenho do seu projeto ou campanha.</span></p>
                    <p><img src={check}/><span>Equipe qualificada. Nossos profissionais possuem vasta experiência nacional e no exterior.</span></p>
                    <p><img src={check}/><span>Acreditamos que trabalhos criativos são os que mais se destacam em meio a multidão. Saia do feijão com arroz.</span></p>
                    <a href="">Entrar em Contato</a>
                </div>
                <div class="imgBeneficios">
                    <img src={macbook}/>
                </div>
            </div>
        </div>
    )
}

export default Beneficios;