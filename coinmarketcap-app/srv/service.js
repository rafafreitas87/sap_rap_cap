const axios = require('axios');
const cds = require('@sap/cds');

module.exports = async (srv) => {
  const { Cryptocurrencies } = srv.entities;

  srv.on('READ', Cryptocurrencies, async () => {
    const apiKey = 'sua API key'; // sua API key
    const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

    try {
      const response = await axios.get(url, {
        headers: {
          'X-CMC_PRO_API_KEY': apiKey,
          'Accept': 'application/json'
        },
        params: {
          convert: 'USD',
          limit: 20 // limite opcional para testes
        }
      });
      console.log('Resposta recebida:', response.data);
      const coins = response.data.data.map(coin => ({
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol,
        price_usd: coin.quote.USD.price,
        market_cap: coin.quote.USD.market_cap,
        volume_24h: coin.quote.USD.volume_24h
      }));

      return coins;

    } catch (error) {
      console.error('Erro ao buscar dados da API:', error.message);
      return [];
    }
  });
};
