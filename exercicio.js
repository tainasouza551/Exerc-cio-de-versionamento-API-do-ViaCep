const axios = require('axios');

axios.get("https://viacep.com.br/ws/12413510/json/")
.then(function(res) {

    const endereco = res.data; 

    if(endereco.logradouro) {
    console.log(`cep : ${endereco.cep}`);
    console.log(`cep : ${endereco.logradouro}`);
    console.log(`cep : ${endereco.bairro}`);
    console.log(`cep : ${endereco.localidade}`);
    console.log(`cep : ${endereco.uf}`);
    if(endereco.complemento)
    console.log(`cep : ${endereco.complemento}`);
    console.log(`cep : ${endereco.ibge}`);
    console.log(`cep : ${endereco.gia}`);
}else {
    console.log(endereco.cep);
    console.log(endereco.localidade);
    console.log(endereco.uf);



}

    

});
