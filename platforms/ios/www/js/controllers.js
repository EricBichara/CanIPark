app
.controller('StartCtrl', function($scope){
    $scope.testString = "start";


})
.controller('ResultCtrl', function($scope){
    $scope.testString = "result";

        $scope.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 8
        };
});