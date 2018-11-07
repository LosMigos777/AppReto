angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


      .state('juegalmi.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('juegalmi.carrito', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/carrito.html',
        controller: 'carritoCtrl'
      }
    }
  })

  .state('juegalmi.servicios', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/servicios.html',
        controller: 'serviciosCtrl'
      }
    }
  })

  .state('juegalmi', {
    url: '/side-menu21',
    templateUrl: 'templates/juegalmi.html',
    controller: 'juegalmiCtrl'
  })

  .state('signup', {
    url: '/page4',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('juegalmi.localizacion', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/localizacion.html',
        controller: 'localizacionCtrl'
      }
    }
  })

  .state('juegalmi.atencionAlCliente', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/atencionAlCliente.html',
        controller: 'atencionAlClienteCtrl'
      }
    }
  })

  .state('juegalmi.miCuenta', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/miCuenta.html',
        controller: 'miCuentaCtrl'
      }
    }
  })

  .state('faq', {
    url: '/page10',
    templateUrl: 'templates/faq.html',
    controller: 'faqCtrl'
  })

  .state('consultar', {
    url: '/page11',
    templateUrl: 'templates/consultar.html',
    controller: 'consultarCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});
