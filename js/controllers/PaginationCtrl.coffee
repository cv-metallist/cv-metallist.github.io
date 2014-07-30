angular.module('controllers', ['ui.bootstrap'])
.controller('PaginationCtrl', ($scope) ->
	$scope.totalItems = 22
	$scope.currentPage = 13
	$scope.itemsPerPage = 1

	$scope.setPage = (pageNo) ->
		$scope.currentPage = pageNo
		return

	$scope.pageChanged = ->
		console.log('Page changed to: ' + $scope.currentPage)
		return
	
	return
)