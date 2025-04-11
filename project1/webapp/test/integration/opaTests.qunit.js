sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'maingoal/test/project1/test/integration/FirstJourney',
		'maingoal/test/project1/test/integration/pages/RootList',
		'maingoal/test/project1/test/integration/pages/RootObjectPage'
    ],
    function(JourneyRunner, opaJourney, RootList, RootObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('maingoal/test/project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRootList: RootList,
					onTheRootObjectPage: RootObjectPage
                }
            },
            opaJourney.run
        );
    }
);