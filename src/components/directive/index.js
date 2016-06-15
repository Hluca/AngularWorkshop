
import roboController from './robo-hash-controller';
import roboDirective from './robo-hash-directive';

const dependencies = [
                   ];

export default angular
           .module('robo-hash-state-component', dependencies)
           .directive('roboHash', roboDirective)
           .controller('RoboHashController', roboController);
