neverNude.controller('SectionsItemsController', ['$scope', '$ionicSlideBoxDelegate', 'sectionsitems', function($scope, $ionicSlideBoxDelegate, sectionsitems) {

  $scope.updateSlider = function () {
    $ionicSlideBoxDelegate.update();
    $ionicSlideBoxDelegate.loop(true);
    $scope.indexAccer = $ionicSlideBoxDelegate.$getByHandle('accer').currentIndex();
    $scope.indexTops = $ionicSlideBoxDelegate.$getByHandle('tops').currentIndex();
    $scope.indexBottoms = $ionicSlideBoxDelegate.$getByHandle('bottoms').currentIndex();
    $scope.indexFootwear = $ionicSlideBoxDelegate.$getByHandle('footwear').currentIndex();
  }

  sectionsitems.get({ id: 1 }, function(data) {
    $scope.items = data.items;
    $scope.accerPictures = data.med_image_urls;
    $scope.accerLrgPictures = data.lrg_image_urls;
  });

  sectionsitems.get({ id: 2 }, function(data) {
    $scope.items = data.items;
    $scope.topsPictures = data.med_image_urls;
    $scope.topsLrgPictures = data.lrg_image_urls;
  });

  sectionsitems.get({ id: 3 }, function(data) {
    $scope.items = data.items;
    $scope.bottomsPictures = data.med_image_urls;
    $scope.bottomsLrgPictures = data.lrg_image_urls;
  });

  sectionsitems.get({ id: 4 }, function(data) {
    $scope.items = data.items;
    $scope.footPictures = data.med_image_urls;
    $scope.footLrgPictures = data.lrg_image_urls;
  });
}]);
