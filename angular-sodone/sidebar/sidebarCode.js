angular.module('sodocan')
.directive('sodocanSidebar', function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'angular-sodone/sidebar/sidebarTpl.html'
  };
})
.controller('sodocanSidebarCtrl',['$scope', 'sodocanAPI', 'sodocanRouter',
  function($scope, sodocanAPI, sodocanRouter){
    console.log(sodocanAPI.docs);
    $scope.allMethods = Object.keys(sodocanAPI.docs); 
}]);