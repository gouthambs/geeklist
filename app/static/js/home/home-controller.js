gListModule
  .controller('HomeController', ['$scope','gListAppService', function ($scope,gListAppService) {
        gListAppService.getPosts(1,20,
            function(data){$scope.posts = data;},
            function(error){$scope.error = error;}
        );
}]);
