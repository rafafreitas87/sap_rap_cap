sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'coinmarketcap/test/coinmarketcapapp/test/integration/FirstJourney',
		'coinmarketcap/test/coinmarketcapapp/test/integration/pages/CryptocurrenciesList',
		'coinmarketcap/test/coinmarketcapapp/test/integration/pages/CryptocurrenciesObjectPage'
    ],
    function(JourneyRunner, opaJourney, CryptocurrenciesList, CryptocurrenciesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('coinmarketcap/test/coinmarketcapapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCryptocurrenciesList: CryptocurrenciesList,
					onTheCryptocurrenciesObjectPage: CryptocurrenciesObjectPage
                }
            },
            opaJourney.run
        );
    }
);