const { obterPessoas } = require('./service')

Array.prototype.meufilter = function(callback) {
    const lista = []
    for(index in this){
        const item = this[index]
        const result = callback(item, index, this)
        // 0, "", null, undefined === false
        if(!result) continue;
        lista.push(item)
    }
    return lista;
}

async function main(){
    try{

        const { results } = await obterPessoas()

        // const familiaLars = results.filter(function(item){
        //     // por padrao precisa retornar um booleano
        //     // para informar se deve manter ou remover da lista
        //     //false > remove da lista
        //     //true > mantem
        //     //não encontrou =e igual a -1
        //     //encontrou  = posicaoNoArray
        //     const result = item.name.toLowerCase().indexOf('lars') !== -1
        //     return result
        // })
        const familiaLars = results.meufilter((item, index, lista) => {
            console.log(`index: ${index}`, lista.length)
            return item.name.toLowerCase().indexOf('lars') !== -1
        })

        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names)
        
    }catch(error){
        console.error('deu ruim', error)
    }

}

main()