angular.module('app.controllers', [])

.controller('inicioCtrl', ['$state', '$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($state, $scope, $stateParams) {
  if(localStorage.getItem("NombreUsuario") == null){
        $state.go('login');
      }

}])

.controller('carritoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  if(localStorage.getItem("NombreUsuario") == null){
        $state.go('login');
      }

}])

.controller('serviciosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies  as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  if(localStorage.getItem("NombreUsuario") == null){
        $state.go('login');
      }

}])

.controller('juegalmiCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('signupCtrl', ['$scope', '$stateParams', 'InsertarClientes', '$ionicHistory',
// The following is the constructor function for this page's controller. See https:
//docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, InsertarClientes, $ionicHistory) {
  //creamos modelo
  $scope.cliente={Nombre:null,Apellido:null,FechaNacimiento:null,Provincia:"",NombreUsuario:null,Contrasena:"",Email:""};
  //llamar a ala function
  $scope.registrar = function(){
    var usu={ Nombre:$scope.cliente.Nombre, Apellido:$scope.cliente.Apellido, FechaNacimiento:$scope.cliente.FechaNacimiento, Provincia:$scope.cliente.Provincia, NombreUsuario:$scope.cliente.NombreUsuario, Contrasena:$scope.cliente.Contrasena, Email:$scope.cliente.Email };
    InsertarClientes.insertarClientes(usu).then(function(response){
      //xontrolamos el refresco de pantalla
      $ionicHistory.nextViewOptions({ disableBack:true, disableAnimate:true });
      console.log(response);
      $ionicHistory.clearCache();
      $ionicHistory.clearHistory();
    });
  };

}])

.controller('loginCtrl', ['$state', '$scope', '$stateParams', 'Login',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($state, $scope, $stateParams, Login) {

    var _this=this;

    this.cliente = {NombreUsuario:"", Contrasena:""};
    al = {IdCliente:"", NombreUsuario:"", Contrasena:""};

    this.login=function(){

      _this.al = null;
      Login.getClientes(_this.cliente).then(function(response){
      al = response.data;

        if(al.length > 0){

          localStorage.setItem("NombreUsuario", al[0].nombreusuario);
          localStorage.setItem("Contrasena", al[0].contrasena);
          localStorage.setItem("IdCliente", al[0].idcliente);
          console.log("Logueado");
          $state.go('juegalmi.inicio');
        }else{
          console.log("No logueado");
        }

      });

    };
}])

.controller('localizacionCtrl', ['$scope', '$stateParams', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading) {

  if(localStorage.getItem("NombreUsuario") == null){
        $state.go('login');
      }

    var myLatlng = new google.maps.LatLng(43.2719772, -2.9486153);

    var mapOptions = {
        center: myLatlng,
        zoom: 18.5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    navigator.geolocation.getCurrentPosition(function(pos) {
        map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        var myLocation = new google.maps.Marker({
            position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
            map: map,
            title: "My Location"
        });
    });

    $scope.map = map;
}])

.controller('atencionAlClienteCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  if(localStorage.getItem("NombreUsuario") == null){
        $state.go('login');
      }

}])

.controller('miCuentaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  if(localStorage.getItem("NombreUsuario") == null){
        $state.go('login');
      }

}])

.controller('fAQCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  if(localStorage.getItem("NombreUsuario") == null){
        $state.go('login');
      }

}])

.controller('consultarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  if(localStorage.getItem("NombreUsuario") == null){
        $state.go('login');
      }

}])
