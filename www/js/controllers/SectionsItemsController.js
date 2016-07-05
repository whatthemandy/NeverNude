neverNude.controller('SectionsItemsController', ['$scope', 'sectionsitems', function($scope, sectionsitems) {
  sectionsitems.get({ id: 1 }, function(data) {
    $scope.items = data.items;
    $scope.pictures = data.thumb_image_urls;
  });
}]);
