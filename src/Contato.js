

function Contato () {

    return(
        <div class="contato" id="cont">
            <h1>Entre em contato</h1>
            <div class="center">
                <form method="post">
                    <input type="text" name="nome" placeholder="Nome"/>
                    <input type="email" name="email" placeholder="Email"/>
                    <textarea placeholder="Menssagem"></textarea>
                    <input type="submit" name="acao" value="Enviar"/>
                </form>
            </div>
        </div>
    )
}

export default Contato;