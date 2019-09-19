function playSound(drum) { 
  // define a função para executar o som da bateria
    const audio = document.querySelector(`audio[data-key="${drum.keyCode}"]`); 
    // define uma variável que puxa na tag audio do html a propriedade data key, onde através de um template string (literals) 
    // se concatena o parâmetro da function com a propriedade keyCode que retorna o caractere unicode da chave(tecla), nisso puxando o audio da bateria 
    const key = document.querySelector(`div[data-key="${drum.keyCode}"]`);
    // define uma variável chama key que seleciona no html a tag div junto com a classe data-key e que puxa o número do teclado pressionado
    if (!audio) return; // se a tag audio for diferente retorna...
    key.classList.add('playing'); // a variável key junto com classList seleciona uma coleção de classes dentro da classe selecionada
    audio.currentTime = 0; // define a posição que o audio ou video irá começar
    audio.play(); // método que começa a reproduzir o vídeo ou audio
  }

  function removeTransition(drum) { // define a função que irá remover a transição das divs
    if (drum.propertyName !== 'transform') return; // no parãmetro da function, se o propertyName for diferente que a classe Transform, retorna a opção de playing
    // propertyName retorna o nome da propriedade CSS que está associada ao evento selecionado.
    drum.target.classList.remove('playing');
    // o parãmetro drum  junto ao evento target especifica o que vai ser feito, que no caso é remover o CSS da classe playing
    // a propriedade classList retorna o nome de uma classe CSS, podendo adicionar ou remover
    // remove a opção selecionada
  }

  const keys = Array.from(document.querySelectorAll('.tecla'));
  // é declarado uma variável chamada keys
  // utilizar o método array.from retorna um objeto qie está sendo selecionado, no caso são todos os elementos que contém a classe .tecla
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  // utilizando a variável keys, usamos o forEach para chamar uma vez para cada elemento
  // transitionend é um evento que é acionado quando uma transição do CSS é concluída, no caso em si ela é removida pela removeTransition
  window.addEventListener('keydown', playSound);
  // mostra na tela uma função chamada, no caso a playSound para ser entregue ao usuário
  // keydown é um evento que quando uma tecla for pressionada, será disparado o evento selecionado que é playSound
