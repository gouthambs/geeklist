/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
gListModule
    .service('gListAppService', function($http) {
    this.getPosts = function(offset,count,successCallBack,errorCallBack) {
            // Get a list of posts give a pageNum and count number of
            // posts per page
            var param = {
                method: 'GET',
                url: 'api/posts/'+offset+'/'+count
            };
            this.callApp(param,successCallBack,errorCallBack);
        };
    this.callApp = function(param,successCallBack,errorCallBack){
        // Generic call function
        $http(param).success(function(data){
            // With the data succesfully returned, call our callback
            successCallBack(data);
        }).error(function(){
            var msg = "Error calling API";
            errorCallBack(msg);
        });  
    }
});


