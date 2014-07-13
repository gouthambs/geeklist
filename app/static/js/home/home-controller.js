gListModule
  .controller('HomeController', ['$scope','gListAppService', function ($scope,gListAppService) {
        $scope.posts = {data : [], count : 5, offset : 0,category : "all" };
        $scope.getPosts = function(offset, count,category)
        {
            gListAppService.getPosts($scope.posts.offset,count,category,
                function(data){
                    $scope.posts.data = $scope.posts.data.concat(data);
                    $scope.posts.offset = $scope.posts.data.length;
                    $scope.posts.category = category;
                },
                function(error){
                    $scope.error = error;
                }
            );
        };
        
        $scope.getPosts(0,$scope.posts.count,$scope.posts.category);
}]);
