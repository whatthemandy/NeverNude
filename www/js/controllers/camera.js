neverNude.controller('CameraController', function($scope, $http, $state, $ionicPopup, $cordovaCamera) {

  showAlert = function(alert) {
    var alertPopup = $ionicPopup.alert({
      title: alert,
      cssClass: 'popupstyle'
    });
  };

  var sectionId = 0;
  switch ($state.current.name) {
    case "accessories":
      sectionId = '1';
      break;
    case "tops":
      sectionId = '2';
      break;
    case "bottoms":
      sectionId = '3';
      break;
    case "footwear":
      sectionId = '4';
      break;
  };

  $scope.takePicture = function() {

    var options = {
      quality: 80,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: 0,
      allowEdit: false,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {

      item = JSON.stringify({item: {user_id: '1', section_id: sectionId, image: imageData}})

      $http.post(rootUrl + '/sections/2/items', item, {
        headers: {'Content-Type': 'application/json'}
      })
      .success(function(data) {
        window.location.reload(true);
        showAlert('Image was successfully uploaded.');
      })
    });

  };
});
