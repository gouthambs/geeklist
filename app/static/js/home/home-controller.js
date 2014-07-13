gListModule
  .controller('HomeController', ['$scope','gListAppService', function ($scope,gListAppService) {
        $scope.posts = {data : [], count : 5, offset : 0 };
        $scope.getPosts = function(offset, count)
        {
            gListAppService.getPosts($scope.posts.offset,count,
                function(data){
                    $scope.posts.data = $scope.posts.data.concat(data);
                    $scope.posts.offset = $scope.posts.data.length;
                },
                function(error){
                    $scope.error = error;
                }
            );
        };
        
        $scope.getPosts(0,$scope.posts.count);
}]);
