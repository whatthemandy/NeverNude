neverNude.controller('TagsController', ['$scope', 'tags', function($scope, tags) {
  tags.success(function(data) {
    console.log(data.tag);
    $scope.tags = data.tag;
  });
}]);
