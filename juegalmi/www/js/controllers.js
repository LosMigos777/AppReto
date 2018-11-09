angular.module('app.controllers', [])

.controller('inicioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('carritoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('serviciosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies  as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


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

.controller('loginCtrl', ['$scope', '$stateParams', 'Login',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($state, $scope, $stateParams, Login) {

    var _this=this;

    this.cliente = {NombreUsuario:"jan", Contrasena:"Almi123"};
    al = {IdCliente:"", NombreUsuario:"", Contrasena:""};

    $scope.login=function(){

      _this.al = null;
      Login.getClientes(_this.cliente).then(function(response){
        al = response.data;

        if(al.length > 0){
          localStorage.setItem("nombre", al[0].NombreUsuario);
          localStorage.setItem("password", al[0].Contrasena);
          localStorage.setItem("id", al[0].IdCliente);
          console.log("Logueado");
          $state.go('juegalmi.inicio');
        }else{

          console.log("No logueado");

        }
      });
    }

}])

.controller('localizacionCtrl', ['$scope', '$stateParams', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading) {
    console.log("llega");
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


}])

.controller('miCuentaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('fAQCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('consultarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
