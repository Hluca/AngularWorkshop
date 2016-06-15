import template from './contactDetails.html';

function contactDetailsRoute($stateProvider) {
    return $stateProvider
        .state('app.contactDetails', {
           url: 'detail/:name',
            views: {
                main: {
                    template: template,
                    controller: 'detailsController as detailsController'
                }
            }
        });

}

export default [
    '$stateProvider',
    contactDetailsRoute
];
