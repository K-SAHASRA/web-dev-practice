var app = angular.module("myapp",[])
app.controller("myctrl",function($scope){
    $scope.verify=function(){
        if($scope.name.length<3||$scope.name.length>8){
            alert("enter name too long ");
        }
        if (! /^\S+@\S+\.\S+$/.test($scope.email)) {
			alert("email not valid");
		}
        if($scope.password.length<3||$scope.password.length>9){
            alert("password length wrong");
        }
        else{
            alert("successul");
        }


    };
});