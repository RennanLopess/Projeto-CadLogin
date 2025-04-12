// validação de preenchimento de login
function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    // Verifica se os campos foram preenchidos
    if (!loginEmail || !loginSenha) {
        alert("Favor preencher todos os campos de acesso");
    }else{
        window.location.href = 'cadastro.html';
    }
}

// Declara array para o projeto
var dadosLista = [];
// Função de armazenamento de nomes em array
function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
    
    if(nomeUser){
        dadosLista.push(nomeUser);
        criaLista();
        document.getElementById('nomeUser').value = "";
    }else{
        alert("Favor preencher com um nome");
    }
}

// função para criar lista de nomes
function criaLista(){
    let tabela = "<tr><th>Nome</th><th>Ações</th></tr>";
    for(let i = 0; i<= (dadosLista.length - 1);i++){
        tabela += "<tr><td>" +dadosLista[i] + "</td><td></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}