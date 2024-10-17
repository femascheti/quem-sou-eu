document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById('grid');
    const dica = document.getElementById('dica');
    const jogarNovamenteBtn = document.getElementById('jogar-novamente');
  
    const animais = [
      { nome: "Leão", dicas: ["Ando na terra", "Sou carnívoro", "Tenho juba"], img: "imgs/leao_foto.jpg" },
      { nome: "Elefante", dicas: ["Ando na terra", "Sou herbívoro", "Tenho tromba"], img: "imgs/elefante_foto.jpg" },
      { nome: "Canguru", dicas: ["Ando na terra", "Sou herbívoro", "tenho uma bolsa na barriga"], img: "imgs/canguru_foto.jpg" },
      { nome: "Morcego", dicas: ["Eu voo", "Sou onívoro", "Durmo de cabeça para baixo"], img: "imgs/morcego_foto.jpg" },
      { nome: "Panda", dicas: ["Ando na terra", "Sou herbívoro", "Diferente dos meus amigos tenho manchas pretas e brancas"], img: "imgs/panda_foto.jpg" },
      { nome: "Águia", dicas: ["Eu voo", "Sou carnívoro", "Tenho garras afiadas"], img: "imgs/aguia_foto.jpg" },
      { nome: "Golfinho", dicas: ["Vivo na água", "Sou carnívoro", "Tenho um buraco no topo da cabeça por onde respiro"], img: "imgs/golfinho_foto.jpg" },
      { nome: "Papagaio", dicas: ["Eu voo", "Sou onívoro", "Tenho um bico pequeno e curvado"], img: "imgs/papagaio_foto.jpg" },
      { nome: "Tubarão", dicas: ["Vivo na água", "Sou carnívoro", "Tenho dentes afiados"], img: "imgs/tubarao_foto.jpg" },
      { nome: "Urso", dicas: ["Ando na terra", "Sou onívoro", "Durmo durante o inverno inteiro"], img: "imgs/urso_foto.jpg" },
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
