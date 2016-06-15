import template from './contactForm.html';

function contactFormRoute($stateProvider) {
    return $stateProvider
        .state('app.contactForm', {
            url: 'contactForm',
            views: {
                main: {
                    template: template
                   // controller: 'ContactListController as contactListController'
                }
            }
        });
}

export default [
    '$stateProvider',
    contactFormRoute
];
