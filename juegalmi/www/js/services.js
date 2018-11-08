angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])
.factory('Login', [function($http){
  var datasource1 = "http://127.0.0.1/wsJuegalmi/?callback=JSON_CALLBACK";

  return{
    getClientes:function(){
      return $http.jsonp(datasource1);
    }
   }
}]);
