sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'maingoal.test4.project4',
            componentId: 'ztravel_C_01List',
            contextPath: '/ztravel_C_01'
        },
        CustomPageDefinitions
    );
});