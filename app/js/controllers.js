'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('CollapseDemoCtrl', ['$scope', function($scope){
  	$scope.isCollapsed = false;
  }])
  .controller('DropdownCtrl', ['$scope', function($scope){
  	$scope.items = [
	    {href: "#/view1", view: "View1"},
	   	{href: "#/view2", view: "View2"},
  	];
  }])
  ;