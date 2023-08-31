var btnRemoverElemento = document.getElementById("btnRemoverElemento");
        btnRemoverElemento.addEventListener("click", removerElemento);

        var btnAdcionarElemento = document.getElementById("btnAdicionarElemento");
        btnAdicionarrElemento.addEventListener("click", adicionarElemento);


        function removerElemento(){
            let idDigitado = document.getElementById("txtElemento").value;
            let elementoParaRemover = document.getElementById(idDigitado);
            /* parentNode = permite encontrar o nó do pai
                removeChild(elementon) = remove o elemento filho
            */
            elementoParaRemover.parentNode.removeChild(elementoParaRemover);
        }

        var botao = document.getElementById ("btnContar");
        botao.addEventListener("click", contarItens);

        function contarItens(){
            var totalParagrafos = document.getElementsByClassName("classe_p");
            alert("O texto possui " + totalParagrafos.length +" parágrafos");
        }

        var btnRemover = document.getElementById("btnRemover");
        btnRemover.addEventListener("click", removerClasses); 

        function removerClasses(){
            var paragrafos = document.getElementsByClassName("classe_p");

            let i=0;
            while(paragrafos.length > 0){
                alert(paragrafos[i].innerHTML+"-"+paragrafos.length);
                paragrafos[i].className = "";
            }
        }

        /*Como a classe é removida do elemento, ele não fará mais parte do array
        de elementos daquela classe. Logo, a cada elemento que possui sua classe
        removida, o número de elementos no array paragrafos diminui*/