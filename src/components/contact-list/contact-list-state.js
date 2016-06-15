import template from './contactList.html';

function contactRoute($stateProvider) {
    return $stateProvider
        .state('app.contactList', {
            url: 'contactList',
            views: {
                main: {
                    template: template,
                    controller: 'ContactListController as contactListController'
                }
            }
        });

}

export default [
    '$stateProvider',
    contactRoute
];
