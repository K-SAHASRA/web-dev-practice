var app=angular.module("myapp",[])
app.controller("mycontrol",function($scope){
    $scope.result=function(){
        return $scope.fname +$scope.lname;
    };
    $scope.errormsg="SIKE NO ERROR"
    
});


