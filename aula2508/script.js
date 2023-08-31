

function validarFormulario(){
    //obtem os valores dos campos do formulario
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');

    //verificar se os campos estao vazios

    if(nome.value === ''){
        alert("PREENCHA O CAMPO NOME.");
        nome.focus();

        event.preventDefault();
        return false;
    }
    if(email.value === ''){
        alert("PREENCHA O CAMPO EMAIL.");
        email.focus();

        event.preventDefault();
        return false;
    }
    if(senha.value === ''){
        alert("PREENCHA O CAMPO SENHA.");
        senha.focus();

        event.preventDefault();
        return false;
    }


    let emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email.value)){
        alert("Email Invalido!");
        email.focus();
        event.preventDefault();
        return false;
    }

    if (senha.value.lenght<){
        alert("senha Invalido!");
        senha.focus();
        event.preventDefault();
        return false;
    }
}