nevernude.factory('outfits', ['$resource', function($resource) {
  return $resource(rootUrl + "/outfits");
}]);
