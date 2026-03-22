'use strict'

import { FRASES } from './js/frases.js';

function mostrarFrase() {
    if (!FRASES.length) return;

    const indice = Math.floor(Math.random() * FRASES.length);
    const frase = FRASES[indice];

    document.getElementById('frase').textContent = frase.frase;
    document.getElementById('autor').textContent = frase.autor;
    document.getElementById('ano').textContent = frase.ano;
}

document.getElementById("btn-frase")
    .addEventListener("click", mostrarFrase);