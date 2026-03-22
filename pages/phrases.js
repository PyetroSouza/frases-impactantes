'use strict'

import { FRASES } from '../js/frases.js';

function carregarFrases() {
    const lista = document.getElementById("lista-frases");
    if (!lista) return;

    const frases = [...FRASES]; // cópia pra não bagunçar o original

    // ordenação composta: autor → ano
    frases.sort((a, b) => {
        const autorA = a.autor.toLowerCase();
        const autorB = b.autor.toLowerCase();

        if (autorA < autorB) return -1;
        if (autorA > autorB) return 1;

        return a.ano - b.ano; // se autor for igual, ordena por ano
    });

    lista.innerHTML = frases.map(frase => `
        <li>
            <div class="linha-frase">"${frase.frase}"</div>
            <div class="linha-autor">— ${frase.autor} (${frase.ano}) | Categoria: ${frase.categoria}</div>
        </li>
    `).join("");
}

carregarFrases();