const usuario = document.getElementById("usuario")

const senha = document.getElementById("senha")

function focarusuario(){
    usuario.style.border = "2px solid purple"
    if (usuario.style.border == "2px solid purple" || usuario.style.border == "") {
        senha.style.border = "2px solid #aaaaaa"
    }
}

function focarsenha(){
    senha.style.border = "2px solid purple"
    
    if (senha.style.border == "2px solid purple" || senha.style.border == "") {
        usuario.style.border = "2px solid #aaaaaa"
    }
}


/* funcao logar usuario buscar no banco de dados */
function logar(){
    const usuario1 = document.getElementById("usuario").value
    const senha1 = document.getElementById("senha").value

    if (usuario1 === "") {
        alert("Digite seu usuário")
    } else if (senha1 === "") {
        alert("Digite sua senha")
    } else if (usuario1 === "Bahia" && senha1 === "1234") {
        localStorage.setItem("logado", "true" )
        window.location.href = "../../../assets/paginas/home74568.html"
    } else {
        alert("Usuário ou senha incorretos, digite novamente")
        document.getElementById("usuario").value = ""
        document.getElementById("senha").value = ""
    }
}
