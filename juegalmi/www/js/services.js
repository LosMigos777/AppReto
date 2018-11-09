angular.module('app.services', [])

.factory('Login', function($http){
    var datasource1 = "http://127.0.0.1/wsJuegalmi/?callback=JSON_CALLBACK";

    return{
      getClientes:function(cliente){
      return $http.jsonp(datasource1, {
          params:{NombreUsuario:cliente.NombreUsuario, Contrasena:cliente.Contrasena}
        })
    },
  };
});
