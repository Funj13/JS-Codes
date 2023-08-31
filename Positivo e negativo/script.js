
    function verificarPosiNega(){
        let numero = document.getElementById("posiNega").value;

        if(numero < 0){
            alert("Numero é negativo");
        }
        else if(numero > 0){
            alert("Numero é positivo");
        }
        else{
            alert("Numero é 0");
        }
    }