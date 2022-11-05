function validar(){
    let cpf = cadastro.cpf.value
    let senha = cadastro.senha.value
    let confirm= cadastro.confirm.value

    if(cpf.length != 11){
        alert("CPF Invalido")
        cadastro.cpf.focus()
        return false
    }


    if(isNaN(cpf)){
        alert("Informe apenas números")
        cadastro.cpf.focus()
        return false
    }

    if(senha != confirm){
        alert("As senhas são diferentes")
        cadastro.confirm.focus();
        return false
    }

    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,10}$/
    // /^(?=,*[A-Z]) = minimo de uma letra maiuscula
    // (?=.*?[a-z]) = minimo de uma letra minúscula
    // (?=.*?[0-9]) = minimo de um número
    // (?=.*?[^\w\s]) = minimo um caractere especial
    // ,[6,10] = minimo de 6, máximo de 10 caracteres

    if(!regex.exec(senha)){
        alert("A senha deve conter no minimo uma letra maiuscula, minimo letra minúscula, um número, um caractere especial, minimo 6 e máximo 10 caracteres")
        cadastro.senha.focus()
        return false
    }
}