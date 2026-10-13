let elevi = [
    { nume: "Popescu Ana", varsta: 17, nota: 9 },
    { nume: "Rusu Mihai", varsta: 18, nota: 8 },
    { nume: "Ciobanu Maria", varsta: 17, nota: 10 }
];

function afiseazaElevi() {
    let catalog = document.getElementById("catalog");

    catalog.innerHTML = "";

    elevi.forEach(function (elev, index) {
        catalog.innerHTML +=
            "<p>" +
            (index + 1) + ". " + elev.nume +
            "<br>Vârsta: " + elev.varsta +
            "<br>Nota: " + elev.nota +
            "</p>";
    });

    document.getElementById("numarElevi").innerHTML =
        "Număr de elevi: " + elevi.length;
}

function adaugaElev() {
    let nume = document.getElementById("nume").value;
    let varsta = document.getElementById("varsta").value;
    let nota = document.getElementById("nota").value;

    if (nume !== "" && varsta !== "" && nota !== "") {

        let elevNou = {
            nume: nume,
            varsta: varsta,
            nota: nota
        };

        elevi.push(elevNou);

        document.getElementById("nume").value = "";
        document.getElementById("varsta").value = "";
        document.getElementById("nota").value = "";

        afiseazaElevi();
    }
}

function stergeElev() {
    let nume = document.getElementById("numeStergere").value;

    let pozitie = -1;

    elevi.forEach(function (elev, index) {
        if (elev.nume === nume) {
            pozitie = index;
        }
    });

    if (pozitie !== -1) {
        elevi.splice(pozitie, 1);

        document.getElementById("numeStergere").value = "";

        afiseazaElevi();
    }
}

function cautaElev() {
    let nume = document.getElementById("numeCautare").value;

    let elevGasit = elevi.find(function (elev) {
        return elev.nume === nume;
    });

    let rezultat = document.getElementById("rezultatCautare");

    if (elevGasit) {
        rezultat.innerHTML =
            "Elev găsit!" +
            "<br>Nume: " + elevGasit.nume +
            "<br>Vârsta: " + elevGasit.varsta +
            "<br>Nota: " + elevGasit.nota;
    } else {
        rezultat.innerHTML = "Elevul nu a fost găsit!";
    }
}

afiseazaElevi();