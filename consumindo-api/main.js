// VARIAVEIS
let inputCep = document.getElementById('cep');
let cepInvalido = document.getElementById('erro__cep')

// EVENTOS
inputCep.addEventListener('focusout', ()=> buscarEndereco(inputCep.value));
inputCep.addEventListener('focus', ()=> cepInvalido.style.display = 'none');

// FUNÇÕES
async function buscarEndereco(cep){
    
    try {
        let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let endereco = await retorno.json();

        if(endereco.erro){
            throw Error("O cep digitado nao existe!");
        }

        console.log(endereco);
        return endereco
    } catch (erro) {
        cepInvalido.querySelector('p').innerHTML = erro
        cepInvalido.style.display = 'flex'
    }
}



