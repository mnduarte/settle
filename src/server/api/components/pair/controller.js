const config = require('../../../config');
const configFixer = config.fixer;
const axios = require('axios')
const Model = require('../../../model/pair');

module.exports = function (injectedStore) {
    let store = injectedStore;
       
    async function list() {
        const result = await axios({
            method: 'get',
            url: `${configFixer.url}?access_key=${configFixer.access_key}&symbols=${configFixer.symbols}`
        })
        const rates = result.data.rates
        const listPair = await store.list(Model)
        const pairValue = listPair.map( item => {
            return {
                id: item._id,
                pair: item.description,
                rate: rates[item.symbol_to_pair] / rates[item.base]
            }
        })

        return pairValue;
    }

    return {
        list
    };
}
