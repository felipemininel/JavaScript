// Seleciona o elemento onde o texto será exibido
let output = document.querySelector('#output');

// Seleciona todos os botões do teclado
let keys = document.querySelectorAll('.key');

// Adiciona um evento de clique para cada botão
keys.forEach(function(key) {
  key.addEventListener('click', function() {
    // Obtém o caractere correspondente ao botão clicado
    let character = this.innerHTML;
    // Adiciona o caractere ao texto exibido
    output.value += character;
  });
});