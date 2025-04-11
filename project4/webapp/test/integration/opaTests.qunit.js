sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'maingoal/test4/project4/test/integration/FirstJourney',
		'maingoal/test4/project4/test/integration/pages/ztravel_C_01List',
		'maingoal/test4/project4/test/integration/pages/ztravel_C_01ObjectPage'
    ],
    function(JourneyRunner, opaJourney, ztravel_C_01List, ztravel_C_01ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('maingoal/test4/project4') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheztravel_C_01List: ztravel_C_01List,
					onTheztravel_C_01ObjectPage: ztravel_C_01ObjectPage
                }
            },
            opaJourney.run
        );
    }
);