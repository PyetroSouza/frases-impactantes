'use strict'

import { FRASES } from './js/frases.js';

function mostrarFrase() {
    if (!FRASES.frases.length) return;

    const indice = Math.floor(Math.random() * FRASES.frases.length);
    const frase = FRASES.frases[indice];

    document.getElementById('frase').textContent = frase.texto;
    document.getElementById('autor').textContent = frase.autor;
    document.getElementById('ano').textContent = frase.ano;
}

document.getElementById("btn-frase")
    .addEventListener("click", mostrarFrase);