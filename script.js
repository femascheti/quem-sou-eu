document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById('grid');
    const dica = document.getElementById('dica');
    const jogarNovamenteBtn = document.getElementById('jogar-novamente');
  
    const animais = [
      { nome: "Leão", dicas: ["Ando na terra", "Sou carnívoro"], img: "imgs/leao_foto.jpg" },
      { nome: "Elefante", dicas: ["Ando na terra", "Sou herbívoro"], img: "imgs/elefante_foto.jpg" },
      { nome: "Canguru", dicas: ["Ando na terra", "Sou herbívoro"], img: "imgs/canguru_foto.jpg" },
      { nome: "Morcego", dicas: ["Eu voo", "Sou onívoro"], img: "imgs/morcego_foto.jpg" },
      { nome: "Panda", dicas: ["Ando na terra", "Sou herbívoro"], img: "imgs/panda_foto.jpg" },
      { nome: "Águia", dicas: ["Ando na terra", "Sou carnívoro"], img: "imgs/aguia_foto.jpg" },
      { nome: "Golfinho", dicas: ["Vivo na água", "Sou carnívoro"], img: "imgs/golfinho_foto.jpg" },
      { nome: "Papagaio", dicas: ["Eu voo", "Sou onívoro"], img: "imgs/papagaio_foto.jpg" },
      { nome: "Tubarão", dicas: ["Vivo na água", "Sou carnívoro"], img: "imgs/tubarao_foto.jpg" },
      { nome: "Urso", dicas: ["Ando na terra", "Sou onívoro"], img: "imgs/urso_foto.jpg" },
    ];
  
    let animalEscolhido = null;
    let dicaAtual = 0;
  
    function iniciaRodada() {
      dicaAtual = 0;
    //   dica.textContent = "Clique em um animal para começar!";
      grid.innerHTML = ''; 
  
      animais.forEach(animal => {
        const img = document.createElement('img');
        img.src = animal.img;
        img.alt = animal.nome;
        img.addEventListener('click', () => verificaEscolha(animal));
        grid.appendChild(img);
      });
  
      jogarNovamenteBtn.style.display = 'none';
      escolherNovoAnimal();
      dica.textContent = "Dica 1: " + animalEscolhido.dicas[dicaAtual];
    }
  
    function escolherNovoAnimal() {
      const index = Math.floor(Math.random() * animais.length);
      animalEscolhido = animais[index];
      console.log("Animal escolhido:", animalEscolhido.nome);
    }
  
    function verificaEscolha(animal) {
      if (animal.nome === animalEscolhido.nome) {
        dica.textContent = "Parabéns! Você acertou!";
        jogarNovamenteBtn.style.display = 'block';
      } else {
        dicaAtual++;
        if (dicaAtual < animalEscolhido.dicas.length) {
          dica.textContent = "Mais uma dica: " + "\n" + animalEscolhido.dicas[dicaAtual];
        } else {
          dica.textContent = "Fim de jogo! O animal era: " + animalEscolhido.nome;
          jogarNovamenteBtn.style.display = 'block';
        }
      }
    }
  
    jogarNovamenteBtn.addEventListener('click', iniciaRodada);

    iniciaRodada();
  });