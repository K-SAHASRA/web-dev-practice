angular.module('myApp', [])
      .controller('MainController', function ($scope) {
        $scope.selectedSection = 'calculator';
  
        $scope.calculator = { num1: 0, num2: 0, operator: '+', result: 0 };
  
        $scope.calculate = function () {
          switch ($scope.calculator.operator) {
            case '+': $scope.calculator.result = $scope.calculator.num1 + $scope.calculator.num2; break;
            case '-': $scope.calculator.result = $scope.calculator.num1 - $scope.calculator.num2; break;
            case '*': $scope.calculator.result = $scope.calculator.num1 * $scope.calculator.num2; break;
            case '/':
              if ($scope.calculator.num2 !== 0) {
                $scope.calculator.result = $scope.calculator.num1 / $scope.calculator.num2;
              } else {
                alert('Cannot divide by zero!');
              }
              break;
            default: alert('Invalid operator');
          }
        };
  
        $scope.register = function () {
            // Perform registration logic here
            // For simplicity, just set registrationSuccess to true
            $scope.registrationSuccess = true;
        };
        $scope.sections = ['calculator', 'login'];
      });