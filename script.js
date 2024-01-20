let elementoH1 = document.querySelector("#titulo");
elementoH1.innerText = "Titulo usando innerText";

let elementoA = document.querySelector("a");
elementoA.innerText = "Elemento 'a' alterado usando  innerText";

let elementoUl = document.querySelector("ul");
elementoUl.innerHTML = `
<ul>
    <li>"Elemento 1 da lista não ordenada adicionado usando innerHTML</li>
    <li>"Elemento 2 da lista não ordenada adicionado usando innerHTML</li>
    <li>"Elemento 3 da lista não ordenada adicionado usando innerHTML</li>
</ul>
`

let elementoListaOrdenada = document.querySelector("#lista-ordenada");
elementoListaOrdenada.innerHTML = `
<ol>
    <li><a href="https://github.com/">Link 1 da lista ordenada adicionado usando innerHTML</a></li>
    <li><a href="https://github.com/deborabeatriz-dev">Link 2 da lista ordenada adicionado usando innerHTML</a></li>
    <li><a href="https://github.com/deborabeatriz-dev/primeiro_html">Link 3 da lista ordenada adicionado usando innerHTML</a></li>
</ol>
`
