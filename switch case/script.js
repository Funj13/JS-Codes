// switch -case


    let diaSemana = "seg";

        switch(diaSemana){
            case "seg":
                console.log("Segunda-feira");
                document.getElementById("resultado").innerHTML = "Segunda-Feira";
                break;
            case "ter":
                console.log("Terça-Feira");
                document.getElementById("resultado").innerHTML = "Terça-Feira";
                break;
            case "quar":
                console.log("Quarta-feira");
                document.getElementById("resultado").innerHTML = "Quarta-Feira";
                break;
            case "quin":
                console.log("Quinta-Feira");
                document.getElementById("resultado").innerHTML = "Quinta-Feira";
                break;
            case "sex":
                console.log("Sexta-Feira");
                document.getElementById("resultado").innerHTML = "Sexta-Feira";
                break;
            case "sab":
                console.log("Sabado");
                document.getElementById("resultado").innerHTML = "Sabado";
                break;
            case "dom":
                console.log("Domingo");
                document.getElementById("resultado").innerHTML = "Domingo";
                break;
            default:
                console.log("Dia da Semana inválido");
                document.getElementById("resultado").innerHTML = "Dia inválido";
        }