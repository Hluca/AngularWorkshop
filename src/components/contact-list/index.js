import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactState from './contact-list-state';
import ContactListController from './contactListController'
import CapFilter from './filter'

const dependencies = [
    uiRouter
];

export default angular
    .module('contact-list-state-component', dependencies)
    .controller('ContactListController', ContactListController)
    .filter('CapFilter',CapFilter)
    .config(contactState);
