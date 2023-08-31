<?php



    function cadastroCell(){
    
        global $listaCelular;
        
        
        printf("Número de série: \n");
        fscanf(STDIN,"%s\n", $numeroSerie);
        
        printf("Marca: \n");
        fscanf(STDIN,"%s\n", $marca);
        
        printf("Modelo: \n");
        fscanf(STDIN,"%s\n", $modelo);
        
        $celular = [ 'serie' => $numeroSerie, 'marca' => $marca, 'modelo' => $modelo ];
    
        $listaCelular[] = $celular;
        
        menu();
    }

    function lista(){
        global $listaCelular;
        
        foreach($listaCelular as $celular){
        echo $celular['serie'] . "\n" . $celular['marca'] . "\n" . $celular['modelo'] . "\n";
      
        }
    }
    function menu(){
        do{
            printf("Menu: \n 1-Cadastrar \n 2-Listar \n 3-Fim \n");
            fscanf(STDIN, "%d\n", $n);
            
            if ($n == 1) {
                 cadastroCell();
                 
            }elseif ($n == 2){
                 lista();
            }else{
                breack();
            }
        }while($n == 0);
    }
    
    function breack(){
        global $listaCelular;
        
        foreach($listaCelular as $celular){
            echo $celular['serie'] . "\n" . $celular['marca'] . "\n" . $celular['modelo'] . "\n"; 
        }
    }
    
menu();
?>