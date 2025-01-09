function tocaSom(idTagAudio){
     const elemento = document.querySelector(idTagAudio);

     if(elemento != null && elemento.localName === 'audio') {
          elemento.play();
     } else {
          console.log('Elemento não encontrado')
     }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

console.log('#som_' + listaDeTeclas[1].classList[1].toString())

listaDeTeclas.forEach(tecla => {

     const instrumento = tecla.classList[1].toString();
     //Ao fazer a concatenação de uma string com uma variável é recomendado utilizar crases e fazer esta referência a variável
     const idAudio = `#som_${instrumento}`

     tecla.onclick = function () {
          tocaSom(idAudio);
     };

     tecla.onkeydown = function (evento) {

          console.log(evento.code)

          if(evento.code == 'Space' || evento.code == 'Enter'){
          tecla.classList.add('ativa');
     }
     }

     tecla.onkeyup = function () {
          tecla.classList.remove('ativa');
     }

});
