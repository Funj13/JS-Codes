        var btnRemoverElemento = document.getElementById("btnRemoverElemento");
        btnRemoverElemento.addEventListener("click", removerElemento);

        var btnAdcionarElemento = document.getElementById("btnAdicionarElemento");
        btnAdicionarElemento.addEventListener("click", adicionarElemento);

        const lista = document.getElementById("lista");
        const li = document.createElement("li");

        function removerElemento(){
            
            let idDigitado = document.getElementById("txtElemento").value;
            let elementoParaRemover = document.getElementById(idDigitado);
            /* parentNode = permite encontrar o nó do pai
                removeChild(elementon) = remove o elemento filho
            */
           //elementoParaRemover.parentNode.removeChild(elementoParaRemover);
            lista.parentNode.removeChild(li);
        }

        function adicionarElemento(){
            const novoElemento = document.getElementById("txtElemento").value;

            document.getElementById("txtElemento");
            const tarefaSpan = document.createElement("span");
            tarefaSpan.textContent = novoElemento;            
            const concluidoBtn = document.createElement("button");
            concluidoBtn.textContent = "Concluído";
            li.appendChild(tarefaSpan);
            li.appendChild(concluidoBtn);
            lista.appendChild(li);
        }