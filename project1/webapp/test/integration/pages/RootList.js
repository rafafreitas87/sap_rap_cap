sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'maingoal.test.project1',
            componentId: 'RootList',
            contextPath: '/Root'
        },
        CustomPageDefinitions
    );
});