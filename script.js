const text = "Olá, eu sou";
const text2 = "\nFelipe Coelho.";

const typing = document.getElementById("typing");

let i = 0;

function escrever1() {
    if (i < text.length) {
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(escrever1, 70);
    } else {
        setTimeout(escrever2, 500);
    }
}

let j = 0;

function escrever2() {
    if (j < text2.length) {
        typing.textContent += text2.charAt(j);
        j++;
        setTimeout(escrever2, 90);
    }
}

escrever1();