window.onload = function main(){
    var conteudo = document.querySelector("#entrada");
    const botao = document.querySelector("#botaoenviar");
    var saida = document.querySelector("#output");

    // VERIFICAR SE O BOTÃO DE ENVIAR MENSAGEM FOI CLICADO, E LOGO APOS, EXECUAR A FUNÇÃO enviarMensagem()
    botao.addEventListener("click", enviarMensagem);
 
    // VERIFICAR SE A TECLA PRESSIONADA FOI "ENTER", E LOGO APOS, EXECUTAR A FUNÇÃO enviarMensagem()
    conteudo.addEventListener("keypress", function(e){if(e.keyCode == 13){enviarMensagem()}});
    
    function enviarMensagem(){
        if(conteudo.value != '' && conteudo.value != null) {
            let mensagem = document.createElement("p");
            mensagem.textContent = conteudo.value;
            mensagem.className = "mensagem";          
            saida.prepend(mensagem);
            conteudo.value = '';
        }
    }
}