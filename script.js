const frases = [
    { texto: "Tá se fazendo de Toddy para levar leite.", autor: "ANTUNES, Artur - 2025" },
    { texto: "Pyetro é japonês?! Só se for depois da bomba!", autor: "VIDAL, Gustavo - 2025" },
    { texto: "Imoral isso aí man…", autor: "ALVES, Kauan - 2025" },
    { texto: "A gente só vai fazer festa de Halloween porque na sala só tem bruxa.", autor: "BRENNO, Kayque - 2025" },
    { texto: "Há duas coisas que dá futuro: tráfico de pessoas, e ser cafetão!", autor: "GABRIEL, Henzo - 2025" },
    { texto: "Da 1 até a 10, eu chutei, da 11 até a 20, eu dei uma bica...", autor: "NICHOLLAS, Pablo - 2025" },
    { texto: "[...] Pior é quando prende nas bolas.", autor: "BRENNO, Kayque - 2025" },
    { texto: "Joga milho para ver se essas galinhas não calam a boca.", autor: "GUILHERME, Luiz - 2025" },
    { texto: "O seu fogo no rabo só não é maior do que o fogo do poste. Ainda bem que choveu...", autor: "GUILHERME, Luiz - 2025" },
    { texto: "Em momentos de votação, até do bueiro sai ladrão.", autor: "VIDAL, Gustavo - 2025" },
    { texto: "Não tem que ter medo quem está morto, tem que ter medo de quem está vivo.", autor: "ALVES, Kauan - 2025" },
    { texto: "Não adianta querer fazer o melhor se não sabe fazer o mínimo.", autor: "VIDAL, Gustavo - 2025" },
    { texto: "Só não faço flexão porque afunda a Terra.", autor: "GUILHERME, Luiz - 2025" },
    { texto: "Ano que vem não será grêmio, será internacional.", autor: "GUILHERME, Luiz - 2025" },
    { texto: "Sexta-feira vamos virar a noite jogando Mine.", autor: "ALVES, Kauan - 2025" },
    { texto: "Cê tá rindo? Hoje eu tô embaixo, mas amanhã vou tá embaixo também.", autor: "BRENNO, Kayque - 2025" },
    { texto: "Quem criou esse app do Teams tava no relaxo.", autor: "ALVES, Kauan - 2025" },
    { texto: "Quem muito se justifica é porque conhece o erro e sabe que nele está por puro prazer.", autor: "VIDAL, Gustavo - 2025" },
    { texto: "A vida é a mesma coisa de uma coxinha: tem gente que vai preferir te comer por cima, tem gente que vai preferir te comer por baixo, mas... Sempre vão querer te comer.", autor: "GUILHERME, Luiz - 2025" },
    { texto: "Travesti é igual pinga sem álcool... A cara é a mesma, a embalagem é a mesma mas o gosto é diferente!!!", autor: "NICHOLLAS, Pablo - 2025" },
    { texto: "Pra pegar peixe grande precisa de tempo, paciência e calma, porque pra pegar piranha é fácil.", autor: "VIDAL, Gustavo - 2025" },
    { texto: "Mais nítido do que saber que a água mata a sede", autor: "ALVES, Kauan - 2025" },
    { texto: "De que adianta você ser o azul mais belo, se a pessoa que admiras gosta de vermelho? Mas não se preocupe... alguém gosta de azul.", autor: "VIDAL, Gustavo - 2025" },
    { texto: "As verdadeiras provas são a da vida", autor: "SILVA, Kemilly - 2025" }
];

function mostrarFrase() {
    const indice = Math.floor(Math.random() * frases.length);
    document.getElementById('frase').textContent = frases[indice].texto;
    document.getElementById('autor').textContent = frases[indice].autor;
}

// Ordenar frases pelo autor
frases.sort((a, b) => a.autor.localeCompare(b.autor));

// Preencher a lista de todas as frases
const lista = document.getElementById('lista-frases');

frases.forEach(f => {
    const li = document.createElement('li');

    const fraseEl = document.createElement('p');
    fraseEl.textContent = `"${f.texto}"`;
    fraseEl.classList.add('linha-frase');

    const autorEl = document.createElement('p');
    autorEl.textContent = f.autor;
    autorEl.classList.add('linha-autor');

    li.appendChild(fraseEl);
    li.appendChild(autorEl);

    lista.appendChild(li);
});
