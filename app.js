const form = document.querySelector("form");
const ujelem = document.querySelector("#uj-elem");
const lista = document.querySelector("#lista");

function letrehoz(mit) {
    lista.innerHTML += '<div class="lista-elem">' +
                       ' <button onclick="torol(this)">&#10006;</button> ' +
                       ' <button onclick="szerkeszt(this)">&#9998;</button> ' +
                       mit +
                       '</div>'
                       ment();
}

form.onsubmit = function(e){
    e.preventDefault();
    if (!ujelem.value) return;
    letrehoz(ujelem.value);
    ujelem.value = "";
    ujelem.focus();
}

function torol(mit) {
    mit.parentElement.remove();
    ujelem.focus();
    ment();
}

function szerkeszt(mit) {
    ujelem.value = mit.parentElement.innerText.substring(4);
    torol(mit);
}

function ment() {
    localStorage.bevasarlolista = lista.innerHTML;
}

function betolt() {
    lista.innerHTML = localStorage.bevasarlolista || '';
}

betolt();