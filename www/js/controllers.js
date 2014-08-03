app
.controller('StartCtrl', function($scope, $state){
    $scope.search = function(){
        $state.go("result");
    }


})
.controller('ResultCtrl', function($scope, $cordovaGeolocation){
    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8
    };

    $scope.position = "";
    $cordovaGeolocation.getCurrentPosition().then(function(position) {
        $scope.map.center.latitude = position.coords.latitude;
        $scope.map.center.longitude = position.coords.longitude;
        $scope.map.zoom = 14;


    }, function(err) {
        console.log(err);
    });

});