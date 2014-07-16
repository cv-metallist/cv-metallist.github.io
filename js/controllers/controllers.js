"use strict";

angular.module('myApp', [])
    .controller('TextAreaWithLimitCtrl', function($scope) {
        var MAX_LEN = 100;
        var WARN_THRESHOLD = 90;
        $scope.message = '';
        $scope.remaining = function() {
            return MAX_LEN - $scope.message.length;
        };
        $scope.shouldWarn = function() {
            return $scope.remaining() < WARN_THRESHOLD;
        };
        $scope.hasValidLength = function() {
            return !$scope.shouldWarn();
        };
    });