import angular from 'angular';
import 'angular-route';
import 'angular-ui-router';

class NavLockService {
  constructor($rootScope, $q, $state) {
    console.log("Locked and Loaded!!");
  }

  sayHello(){
    console.log("locking up...")
  }
}

NavLockService.$inject = ['$rootScope', '$q', '$state'];

let module = angular.module('xib-nav-lock', [
  'ui.router'
])
  .service('NavLockService', NavLockService);

export default module;