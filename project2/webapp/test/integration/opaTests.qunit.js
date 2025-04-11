sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'maingoal/test/project2/test/integration/FirstJourney',
		'maingoal/test/project2/test/integration/pages/TravelList',
		'maingoal/test/project2/test/integration/pages/TravelObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('maingoal/test/project2') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage
                }
            },
            opaJourney.run
        );
    }
);