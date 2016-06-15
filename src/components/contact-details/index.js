import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactDetState from './contact-details-state';
import ctrl from './detailsController';

const dependencies = [
    uiRouter
];

export default angular
    .module('contact-details-state-component', dependencies)
    .controller('detailsController', ctrl)
    .config(contactDetState);
