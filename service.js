const axios = require('axios')
const URL = `https://swapi.dev/api/people`

async function obterPessoas(){
    const url = `${URL}`
    const response = await axios.get(url)
    return response.data
}

// obterPessoas('1')
// .then(function (resultado){
//     console.log('resultado', resultado)
// })
// .catch(function(error){
//     console.error('Deu ruim', error)
// })

module.exports = {
    obterPessoas
}