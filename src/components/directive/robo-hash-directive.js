import template from './robo-hash-directive.html';


function RoboHashDirective(){

        return{
            restrict: 'E',
            scope: {
                email: '='
            },
            template: template,
            controller: 'RoboHashController as ctrl',
            bindToController: true




        }


}

export default[
    RoboHashDirective
];
