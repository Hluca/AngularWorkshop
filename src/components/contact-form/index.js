import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactFormState from './contact-form-state';


const dependencies = [
    uiRouter
];

export default angular
    .module('contact-form-state-component', dependencies)
    .config(contactFormState);
