sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'maingoal.test4.project4',
            componentId: 'ztravel_C_01ObjectPage',
            contextPath: '/ztravel_C_01'
        },
        CustomPageDefinitions
    );
});