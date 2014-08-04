app
.controller('StartCtrl', function($scope, $state){
    $scope.search = function(){
        $state.go("result");
    }


})
.controller('ResultCtrl', function($scope, $cordovaGeolocation, $log){
    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8,
        marker: {},
        options: {draggable:true},
        idKey: 1,
        events: {
            dragend: function (marker, eventName, args) {
                $log.log("New Coords " + marker.getPosition());
                $scope.$apply(
                    function(){
                        $scope.extraInfo = "New Coords: " +  marker.getPosition();
                    }
                );

            }
        }
    };

    $scope.extraInfo = "Starting Info";

    $scope.position = "Starting Geo Location";

    $cordovaGeolocation.getCurrentPosition().then(function(position) {
        $scope.map.center.latitude = position.coords.latitude;
        $scope.map.center.longitude = position.coords.longitude;
        $scope.map.zoom = 14;
        $scope.position = position;

        $scope.map.marker = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
        };

    }, function(err) {
        $scope.position = err;
    },{enableHighAccuracy: true});

    $scope.markerClick = function(){
        $scope.extraInfo = "You did it ";
    }

});