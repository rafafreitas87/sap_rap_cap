sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'maingoal.test.project1',
            componentId: 'RootObjectPage',
            contextPath: '/Root'
        },
        CustomPageDefinitions
    );
});