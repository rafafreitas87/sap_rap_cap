namespace coinmarketcap;

entity Cryptocurrencies {
    key id      : Integer;
    name        : String;
    symbol      : String;
    price_usd   : Decimal(15, 2);
    market_cap  : Decimal(15, 2);
    volume_24h  : Decimal(15, 2);
}