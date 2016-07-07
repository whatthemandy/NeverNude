neverNude.controller('SectionsItemsController', ['$scope', '$ionicSlideBoxDelegate', 'sectionsitems', function($scope, $ionicSlideBoxDelegate, sectionsitems) {
  
  $scope.updateSlider = function () {
    $ionicSlideBoxDelegate.update();
    $ionicSlideBoxDelegate.loop(true);

  }

  sectionsitems.get({ id: 1 }, function(data) {
    $scope.items = data.items;
    $scope.accerPictures = data.med_image_urls;
  });

  sectionsitems.get({ id: 2 }, function(data) {
    $scope.items = data.items;
    $scope.topsPictures = data.med_image_urls;
  });

  sectionsitems.get({ id: 3 }, function(data) {
    $scope.items = data.items;
    $scope.bottomsPictures = data.med_image_urls;
  });

  sectionsitems.get({ id: 4 }, function(data) {
    $scope.items = data.items;
    $scope.footPictures = data.med_image_urls;
  });

  shake.startWatch(onShake, 40);

  var onShake = function () {
    //testing if it is working
    alert('Oh yeah, you shook it !');
    //randomize
  };

}]);
