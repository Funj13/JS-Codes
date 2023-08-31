//swicth -case

let diaSemana = "seg";

switch (diaSemana) {
    case "seg":
        consele.log("Segunda-feira");

        document.getElementById("resultado").innerHTML = "<ul><li>Segunda-Feira</li></ul>";
        document.getElementById("resultado").innerText = "<ul><li>Segunda-Feira</li></ul>";
        break;
    case "ter":
        console.log("Terça-feira");
        break;
    case "qua":
        console.log("Quarta-feira");
        break;
    default:
        console.log("Dia da semana inválido");

}