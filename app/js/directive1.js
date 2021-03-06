var myApp = angular.module('myApp', []);

myApp.directive('currentTime', ['$timeout','$filter',function($timeout, $filter){
	// Runs during compile
	return {
		name: 'currentTime',
		priority: 2,
		// terminal: true,
		scope: true, // {} = isolate, true = child, false/undefined = no change
		controller: function($scope, $element, $attrs, $transclue) {
			console.info("currentTime controller 2");
		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			console.info("currentTime");
			var timer;
			function updateTime(){
				$scope.currentTime = $filter('date')(new Date().getTime(), $scope.format);
			}

			function updateTimeContinuous(){
				timer = $timeout(function(){
					updateTime();
					updateTimeContinuous();
				}, 1000);
			}

			$scope.$watch(iAttrs.currentTime, function(scope, newValue, oldValue) {
				scope.format = newValue;
			});

			iElm.bind('$destory', function(){
				$timeout.cancel(timer);
			});

			updateTime();
			updateTimeContinuous();
		}
	};
}]);

myApp.directive('myPassedTime', [function(){
	// Runs during compile
	return {
		name: 'myPassedTime',
		// priority: 0,
		// terminal: true,
		scope: {
			// passedTime:'@myPassedTime'
		}, // {} = isolate, true = child, false/undefined = no change
		// cont­rol­ler: function($scope, $element, $attrs, $transclue) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			console.info("myPassedTime");
			iAttrs.$observe('myPassedTime', function(value){
				console.info(value);
			});
		}
	};
}]);

myApp.directive('myCurrentTime', [function(){
	// Runs during compile
	return {
		name: 'myCurrentTime',
		priority: undefined,
		// terminal: true,
		scope: {
			currentTime:'@myCurrentTime'
			,tt_text:'@ttText'
			// currentTime:'=?name1'
		}, // {} = isolate, true = child, false/undefined = no change
		// cont­rol­ler: function($scope, $element, $attrs, $transclue) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: './templates/tea-filter-popup.html',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			console.info("myCurrentTime");
			iAttrs.$observe('myCurrentTime', function(value){
				console.info(value);
			});
		}
	};
}]);

myApp.directive('myFutureTime', [function(){
	// Runs during compile
	return {
		name: 'myFutureTime',
		priority: undefined,
		// terminal: true,
		scope: {
			futureTime:'&myFutureTime'
		}, // {} = isolate, true = child, false/undefined = no change
		// cont­rol­ler: function($scope, $element, $attrs, $transclue) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			console.info("myFutureTime");
			iAttrs.$observe('myFutureTime', function(value){
				console.info(value);
			});
		}
	};
}]);

myApp.directive('newScope', [function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: true, // {} = isolate, true = child, false/undefined = no change
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			// $scope.text = "new scope";
		}
	};
}]);

myApp.directive('isolateScope', [function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {}, // {} = isolate, true = child, false/undefined = no change
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			// $scope.text = "isolate scope";
		}
	};
}]);

myApp.directive('defaultScope', [function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			// $scope.text = "default scope";
		}
	};
}]);

myApp.directive('scopeLoadSequence', [function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		controller:function(){
			console.info("scopeLoadSequence: controller");
		},
		compile: function(){
			console.info("scopeLoadSequence: compile");
			return function(){
				console.info("scopeLoadSequence: link");
			}
		}
		// link: function($scope, iElm, iAttrs, controller) {
		// 	// $scope.text = "default scope";
		// 	console.info("link");
		// }
	};
}]);


function MyCtrl($scope, $compile, $document){
	$scope.format= "M/d/yy h:mm:ss a";
	$scope.name= "AngularJS";
	$scope.name1= "My Ctrl Name1";
	$scope.name2= "My Ctrl Name2";
	$scope.name3= "My Ctrl Name3";
	$scope.text = "Parent Scope";

	var template = '<div my-current-time="{{name2}}" tt-text="{{name1}}"></div>';

	$scope.addCurrentTime = function(){
		var html = $compile(template)($scope);
		var body = $document.find('body');
		body.append(html);
	};
}







