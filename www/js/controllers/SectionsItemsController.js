neverNude.controller('SectionsItemsController', ['$scope', 'sectionsitems', function($scope, sectionsitems) {
  sectionsitems.get({ id: 1 }, function(data) {
    $scope.items = data.items;
    $scope.accerPictures = data.thumb_image_urls;
  });

  sectionsitems.get({ id: 2 }, function(data) {
    $scope.items = data.items;
    $scope.topsPictures = data.thumb_image_urls;
  });

  sectionsitems.get({ id: 3 }, function(data) {
    $scope.items = data.items;
    $scope.bottomsPictures = data.thumb_image_urls;
  });

  sectionsitems.get({ id: 4 }, function(data) {
    $scope.items = data.items;
    $scope.footPictures = data.thumb_image_urls;
  });
}]);
