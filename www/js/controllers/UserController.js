// user login
neverNude.factory('authentication', ['$http', function($http) {
  return {
    authenticate: function(email, password) {
      return $http.post(
        rootUrl + "/v1/auth/sign_in",
        JSON.stringify({email: email, password: password})
      );
    }
  };
}]);

function setHeader() {
  return {
    "access-token": window.sessionStorage.token,
    "token-type": "Bearer",
    "client": window.sessionStorage.client,
    "expiry": window.sessionStorage.expiry,
    "uid": window.sessionStorage.uid
  };
};

neverNude.controller('UserController', ['$http', '$scope', 'authentication', '$state', function($http, $scope, authentication, $state) {

  function storeSession(response, setUser) {
    window.sessionStorage.token = response.headers('access-token');
    window.sessionStorage.client = response.headers('client');
    window.sessionStorage.expiry = response.headers('expiry');
    window.sessionStorage.uid = response.headers('uid');
    window.sessionStorage.email = setUser.email;
    window.sessionStorage.first_name = setUser.first_name;
    window.sessionStorage.last_name = setUser.last_name;
    window.sessionStorage.nickname = setUser.nickname;
    window.sessionStorage.user_id = setUser.id;
  };

  $scope.login = function() {
    if($scope.email && $scope.password) {
      authentication.authenticate($scope.email, $scope.password)
        .then(function(response){
          storeSession(response, response.data.data);
          $state.go('home');
        });
    }
    else {
      alert("Invalid Login");
    }
  };

  $scope.register = function() {
    if($scope.password === $scope.passwordConfirm) {
      register = JSON.stringify({email: $scope.email, password: $scope.password, first_name: $scope.firstName, last_name: $scope.lastName, nickname: $scope.nickname});
      $http.post(rootUrl + '/v1/auth/register', register);
      $state.go('home');
    } else {
      $scope.password = "";
      $scope.passwordConfirm = "";
      alert("Passwords did not match.");
    };
  };

  $scope.logout = function() {
    window.sessionStorage.clear();
  };
}]);
