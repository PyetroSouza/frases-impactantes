const frases = [
    { texto: "Se você não quer enfrentar o tempo e a verdade, melhor furar os seus olhos.", autor: "FERREIRA, Pyetro - 2025" },
    { texto: "Se nem separado eles trabalham, imagina juntos.", autor: "BRENNO, Kayque - 2025" },
    { texto: "Todo lugar que tem muita gente, tem um noiado.", autor: "VIDAL, Gustavo - 2025" },
    { texto: "Quem corre é a bola, jogadô.", autor: "GUILHERME, Luiz - 2025" },
    { texto: "Não treine para ser melhor que os outros, treine para ninguém ser melhor do que você.", autor: "BRENNO, Kayque - 2025" },
    { texto: "Vamos viver o que aconteceu e o que acontecerá.", autor: "VIDAL, Gustavo - 2025" },
    { texto: "ONU é igual táxi do relâmpago McQueen.", autor: "GUILHERME, Luiz - 2025" },
    { texto: "Ainda bem que pagamos mensal...", autor: "TORQUATO, Victor - 2025" },
    { texto: "2026 eu fico estourado.", autor: "BRENNO, Kayque - 2025" },
    { texto: "Olhando pro nada, pensando em tudo.", autor: "SILVA, Rayssa" },
    { texto: "Nós deveríamos ter os mínimos defeitos, mas o orgulho nos faz querer ter todos.", autor: "VIDAL, Gustavo - 2025" },
    { texto: "Se eu pudesse eu parava o tempo para aproveitar cada momento.", autor: "VIDAL, Gustavo - 2025" },
    { texto: "Kauan tem uma fome maior que as orelhas.", autor: "BRENNO, Kayque - 2025" },
    { texto: "Foi só socar que funcionou.", autor: "BRENNO, Kayque - 2025" },
    { texto: "Quem tem ouvido, ouça, quem não tem, sofra.", autor: "BRENNO, Kayque - 2025" },
    { texto: "Não adianta ter um instrumento bom, e não tem habilidade.", autor: "TORQUATO, Victor - 2025" },
    { texto: "Pyetro é japonês?! Só se for depois da bomba!", autor: "VIDAL, Gustavo - 2025" },
    { texto: "Isso aí é imoral...", autor: "ALVES, Kauan - 2025" },
    { texto: "A gente só vai fazer festa de Halloween porque na sala só tem bruxa.", autor: "BRENNO, Kayque - 2025" },
    { texto: "Se a carapuça serviu...", autor: "SILVA, Kemilly - 2025" },
    { texto: "Da 1 até a 10, eu chutei, da 11 até a 20, eu dei uma bica...", autor: "NICHOLLAS, Pablo - 2025" },
    { texto: "Joga milho para ver se essas galinhas não calam a boca.", autor: "GUILHERME, Luiz - 2025" },
    { texto: "O seu fogo no rabo só não é maior do que o fogo do poste. Ainda bem que choveu...", autor: "GUILHERME, Luiz - 2025" },
    { texto: "Se mata, Pyetro!", autor: "LUIZA, Letícia - 2025" },
    { texto: "Não tem que ter medo de quem está morto, tem que ter medo de quem está vivo.", autor: "ALVES, Kauan - 2025" },
    { texto: "Não adianta querer fazer o melhor se não sabe fazer o mínimo.", autor: "VIDAL, Gustavo - 2025" },
    { texto: "Só não faço flexão porque afunda a Terra.", autor: "GUILHERME, Luiz - 2025" },
    { texto: "Ano que vem não será grêmio, será internacional.", autor: "GUILHERME, Luiz - 2025" },
    { texto: "Sexta-feira vamos virar a noite jogando Mine.", autor: "ALVES, Kauan - 2025" },
    { texto: "Cê tá rindo? Hoje eu tô embaixo, mas amanhã vou tá embaixo também.", autor: "BRENNO, Kayque - 2025" },
    { texto: "Quem criou esse app do Teams tava no relaxo.", autor: "ALVES, Kauan - 2025" },
    { texto: "Quem muito se justifica é porque conhece o erro e sabe que nele está por puro prazer.", autor: "VIDAL, Gustavo - 2025" },
    { texto: "A vida é a mesma coisa de uma coxinha: tem gente que vai preferir te comer por cima, tem gente que vai preferir te comer por baixo, mas sempre vão querer te comer.", autor: "GUILHERME, Luiz - 2025" },
    { texto: "Quem tá com calor, que tire a blusa!", autor: "NICHOLLAS, Pablo - 2025" },
    { texto: "Pra pegar peixe grande precisa de tempo, paciência e calma, porque pra pegar piranha é fácil.", autor: "VIDAL, Gustavo - 2025" },
    { texto: "Mais nítido do que saber que a água mata a sede.", autor: "ALVES, Kauan - 2025" },
    { texto: "De que adianta você ser o azul mais belo, se a pessoa que admiras gosta de vermelho? Mas não se preocupe… alguém gosta de azul.", autor: "VIDAL, Gustavo - 2025" },
    { texto: "As verdadeiras provas são a da vida.", autor: "SILVA, Kemilly - 2025" },
    { texto: "Quer mentir para mentiroso?", autor: "BRENNO, Kayque - 2025" },
    { texto: "Nunca pegue cacheada! Se ela enrola o cabelo, imagina você...", autor: "GUILHERME, Luiz - 2025" },
    { texto: "Quando dá, dá, quando não dá, não dá!", autor: "GUILHERME, Luiz - 2025" },
    { texto: "Tem que abrir olho para quem tá do lado.", autor: "ALVES, Kauan - 2025" },
    { texto: "Ano passado vai ser...", autor: "FERREIRA, Pyetro - 2025" },
    { texto: "Todo lugar que tem muita gente, tem um noiado.", autor: "VIDAL, Gustavo - 2025" },
    { texto: "Quem corre é a bola, jogadô.", autor: "GUILHERME, Luiz - 2025" },
    { texto: "Mais vale um bêbado no boteco do que um boteco sem bêbados.", autor: "FURTADO, Celso - 2025" },
    { texto: "O corre é dobrado para quem não nasceu herdeiro.", autor: "BRENNO, Kayque - 2025" },
    { texto: "Apois...", autor: "ALVES, Kauan - 2025" },
    { texto: "Quer me ensinar a jogar, mano?!", autor: "BRENNO, Kayque - 2025" },
    { texto: "Que bomba é essa?!", autor: "SILVA, Rayssa - 2025" },
    { texto: "Se penso, logo programo.", autor: "Autor desconhecido - 2025" },
    { texto: "Não quero saber se a laranja é pera ou lima. Quero saber da entrega!", autor: "KOMUTA, Yuri - 2025" },
    { texto: "CSS me fez de mulher: me esculhachou...", autor: "DE SÁ, Fernando - 2025" },
    { texto: "Dúvidas, dores ou reclamações?", autor: "KOMUTA, Yuri - 2025" },
    {texto: "Quem pensa muito, se ferra muito", autor: "BRENNO, Kayque - 2026"},
    {texto: "Tem que sobrar algo pro beta, ou melhor, pro cara tranquilo.", autor: "VIDAL, Gustavo - 2026"},
    { texto: "Nunca desista dos seu sonho, se não encontrar nessa padaria, vai em outra", autor: "FERREIRA, Pyetro - 2026" },
    { texto: "O que importa não é quantas você caiu, é quantas você levantou", autor: "TORQUATO, Vitnho - 2026" }
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