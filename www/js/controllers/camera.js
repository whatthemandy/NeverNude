neverNude.controller('CameraController', function($scope, $cordovaCamera, $http, $state, $jrCrop) {

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


      item = JSON.stringify({item: {user_id: '1', section_id: '2', image: imageData}})

      $http.post('https://nevernude.herokuapp.com/sections/2/items', item, {
        headers: {'Content-Type': 'application/json'}
      })
      .success(function(data) {
        window.location.reload(true);
        alert('Image was successfully uploaded.');
      })

      // $jrCrop.crop({
      //   url: "data:image/jpeg;base64," + imageData,
      //   width: 300,
      //   height: 225,
      //   title: 'Move and Scale.'
      // }).then(function(image) {
      //   alert('woooo');
      //   item = JSON.stringify({item: {user_id: '1', section_id: '2', image: image}})

      //   $http.post('https://nevernude.herokuapp.com/sections/2/items', item, {
      //     headers: {'Content-Type': 'application/json'}
      //   })
      //   .success(function(data) {
      //     alert('Image was successfully uploaded.');
      //   })
      // }, function() {
      //   alert('booo');
      // });


    });
  };
});
