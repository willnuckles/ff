
angular.module('myapp', [])
    .controller('HelloController', function($scope) {
        $scope.radio; 
        $scope.selected;
        $scope.teamOne = [];
        $scope.teamTwo = [];
        $scope.teamThree = [];

        $scope.masterPlayers = [{
            id: 1,
            name: 'Drew Brees',
            position: 'QB'
        }, {
            id: 2,
            name: 'Andrew Luck',
            position: 'QB'
        }, {
            id: 3,
            name: 'Adrian Peterson',
            position: 'RB'
        }, {
            id: 4,
            name: 'Rob Gronkowski',
            position: 'TE'
        }];

        $scope.players = $scope.masterPlayers;

        $scope.moveIt = function() {
            if ($scope.radio == 'teamOne') {
                $scope.teamOne = $scope.teamOne.concat(_.find($scope.players, { id : $scope.selected }));
                _.remove($scope.players, { id : $scope.selected });
            }
            if ($scope.radio == 'teamTwo') {
                $scope.teamTwo = $scope.teamTwo.concat(_.find($scope.players, { id : $scope.selected }));
                _.remove($scope.players, { id : $scope.selected });
            }
            if ($scope.radio == 'teamThree') {
                $scope.teamThree = $scope.teamThree.concat(_.find($scope.players, { id : $scope.selected }));
                _.remove($scope.players, { id : $scope.selected });
            }
        }
    });
