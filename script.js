function validarSenha(){
    var senha = document.getElementById('isenha').value
    var senha2 = document.getElementById('isenha2').value

    if(senha != senha2){
        alert('As senhas devem ser iguais')
    }else{
        alert('Concluimos seu cadastro!')
    }
}

function loginSenha(){
    var senha = 'loginbolo'
    var senha2 = document.getElementById('lsenha').value

    if(senha2 != senha){
        alert('Senha Incorreta')
    }else{
        alert('Bem vindo de volta!')
    }
}