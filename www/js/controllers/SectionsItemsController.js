neverNude.controller('SectionsItemsController', ['$scope', '$ionicSlideBoxDelegate', 'sectionsitems', '$http', '$state', function($scope, $ionicSlideBoxDelegate, sectionsitems, $http, $state) {

  $scope.updateSlider = function () {
    $ionicSlideBoxDelegate.update();
    $ionicSlideBoxDelegate.loop(true);
  };

  sectionsitems.get({ id: 1 }, function(data) {
    $scope.items = data.items;
    $scope.accerPictures = data.med_image_urls;
    $scope.accerLrgPictures = data.lrg_image_urls;
    accessories = data.items;
    $scope.accerTags = data.tags;
  });

  sectionsitems.get({ id: 2 }, function(data) {
    $scope.items = data.items;
    $scope.topsPictures = data.med_image_urls;
    $scope.topsLrgPictures = data.lrg_image_urls;
    tops = data.items;
    $scope.topsTags = data.tags;
  });

  sectionsitems.get({ id: 3 }, function(data) {
    $scope.items = data.items;
    $scope.bottomsPictures = data.med_image_urls;
    $scope.bottomsLrgPictures = data.lrg_image_urls;
    bottoms = data.items;
    $scope.bottomsTags = data.tags;
  });

  sectionsitems.get({ id: 4 }, function(data) {
    $scope.items = data.items;
    $scope.footPictures = data.med_image_urls;
    $scope.footLrgPictures = data.lrg_image_urls;
    foot = data.items;
    $scope.footTags = data.tags;
  });

  $scope.saveOutfit = function() {
    var accerId = accessories[$ionicSlideBoxDelegate.$getByHandle('accer').currentIndex()].id;
    var topsId = tops[$ionicSlideBoxDelegate.$getByHandle('tops').currentIndex()].id;
    var bottomsId = bottoms[$ionicSlideBoxDelegate.$getByHandle('bottoms').currentIndex()].id;
    var footId = foot[$ionicSlideBoxDelegate.$getByHandle('footwear').currentIndex()].id;

    outfit = JSON.stringify({outfit: {user_id: 1, accer_id: accerId, tops_id: topsId, bottoms_id: bottomsId, foot_id: footId}})

    $http.post('https://nevernude.herokuapp.com/outfits', outfit, {
      headers: {'Content-Type': 'application/json'}
    })
    .success(function(data) {
      $ionicLoading.hide();
      $state.go('outfits');
      alert('Outfit saved.');
    })
  };
}]);
