using coinmarketcap from '../db/model';

service CoinMarketCapService {
    entity Cryptocurrencies as projection on coinmarketcap.Cryptocurrencies;
}