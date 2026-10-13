let fructe = ["Măr", "Pară", "Banana", "Portocală", "Kiwi"];

console.log("Exercițiul 1");
console.log("Lista completă:", fructe);
console.log("Primul element:", fructe[0]);
console.log("Ultimul element:", fructe[fructe.length - 1]);
console.log("Numărul de elemente:", fructe.length);


let orase = ["Chișinău", "Bălți", "Cahul"];

orase.push("Orhei");
orase.unshift("Soroca");
orase.pop();
orase.shift();

console.log("Exercițiul 2");
console.log("Lista finală:", orase);


let produse = ["Pâine", "Lapte", "Ouă"];

function afiseazaProduse() {
    let lista = document.getElementById("lista");

    if (produse.length === 0) {
        lista.innerHTML = "Lista este goală!";
    } else {
        lista.innerHTML = produse.join(" | ");
    }
}

function adaugaSfarsit() {
    let produs = document.getElementById("produs").value;

    if (produs !== "") {
        produse.push(produs);
        document.getElementById("produs").value = "";
        afiseazaProduse();
    }
}

function adaugaInceput() {
    let produs = document.getElementById("produs").value;

    if (produs !== "") {
        produse.unshift(produs);
        document.getElementById("produs").value = "";
        afiseazaProduse();
    }
}

function stergePrimul() {
    if (produse.length > 0) {
        produse.shift();
    }

    afiseazaProduse();
}

function stergeUltimul() {
    if (produse.length > 0) {
        produse.pop();
    }

    afiseazaProduse();
}

afiseazaProduse();