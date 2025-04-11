using CoinMarketCapService as service from '../../srv/service';
annotate service.Cryptocurrencies with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'id',
                Value : id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'name',
                Value : name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'symbol',
                Value : symbol,
            },
            {
                $Type : 'UI.DataField',
                Label : 'price_usd',
                Value : price_usd,
            },
            {
                $Type : 'UI.DataField',
                Label : 'market_cap',
                Value : market_cap,
            },
            {
                $Type : 'UI.DataField',
                Label : 'volume_24h',
                Value : volume_24h,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'id',
            Value : id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'name',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'symbol',
            Value : symbol,
        },
        {
            $Type : 'UI.DataField',
            Label : 'price_usd',
            Value : price_usd,
        },
        {
            $Type : 'UI.DataField',
            Label : 'market_cap',
            Value : market_cap,
        },
    ],
);

