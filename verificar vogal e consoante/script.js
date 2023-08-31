    
    function verificarVogalConsoante(){
        let caractere = document.getElementById("caractere").value;
        if(caractere == "a" || caractere == "e" || caractere == "i" || caractere == "o" || caractere == "u"){
            document.getElementById("resultado").innerHTML = "É uma vogal";

        }
        else{
            document.getElementById("resultado").innerHTML = "É uma consoante";
        }
    }