import ICONE1 from "./images/ICONE1.png"
import ICONE2 from "./images/ICONE2.png"
import ICONE3 from "./images/ICONE3.png"

function PqNos(){

    return(
        <div class="pqNos" id="pq">
        <div class="center">
            <h2>Por que nós?</h2>
            <p>Uma experiência incrível para seus clientes, resultados espetaculares para sua empresa.</p>
            <div class="diferenciais">
                <div class="boxDiferenciais">
                    <img src={ICONE1}/>
                    <h3>Planejamento impecável</h3>
                    <p>Conte com a Agência Bold como sua parceira no planejamento de seus projetos, conteúdos, campanhas, estratégias. Nossos profissionais altamente qualificados estão preparados para qualquer desafio.</p>
                </div>
                <div class="boxDiferenciais">
                    <img src={ICONE2}/>
                    <h3>Pague pelos resultados</h3>
                    <p>Aqui você paga de acordo com o retorno que ganha em cada campanha. Não deixe a oportunidade de ter melhores resultados para amanhã. Entre em contato e vamos conversar sobre sua necessidade.</p>
                </div>
                <div class="boxDiferenciais">
                    <img src={ICONE3}/>
                    <h3>Suporte e acompanhamento</h3>
                    <p>Mesmo após terminarmos nosso projeto ou estratégia, nós da Agência Bold acompanharemos os futuros desdobramentos e resultados oferecendo todo suporte possível para você e sua equipe.</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PqNos;