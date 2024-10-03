
async function buscarEndereco(cep){
    
    let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let endereco = await retorno.json()

    console.log(endereco)
}


buscarEndereco('01001000')