var app= angular.module("myapp",[])
app.controller("myctrl",function($scope){
    $scope.calculate=function(){

        if($scope.operator=="+"){
            $scope.result=parseFloat($scope.num1)+parseFloat($scope.num2);
        }
        if($scope.operator=="-"){
            $scope.result=parseFloat($scope.num1)-parseFloat($scope.num2);
        }
        if($scope.operator=="*"){
            $scope.result=parseFloat($scope.num1)*parseFloat($scope.num2);
        }
        if($scope.operator=="/"){
            $scope.result=parseFloat($scope.num1)/parseFloat($scope.num2);
        }

    };
});
