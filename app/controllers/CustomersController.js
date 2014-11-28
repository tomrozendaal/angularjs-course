// Option 1
/*app.controller('CustomersController', function ($scope) {
    $scope.sortBy = 'name';
    $scope.reverse = 'false';

    $scope.customers= [
        {joined: '2000-12-02', name: 'John', city: 'New York', orderTotal: 9.9956},
        {joined: '2004-08-02', name: 'Zed', city: 'Rotterdam', orderTotal: 5.356},
        {joined: '2014-11-05', name: 'Aap', city: 'Amsterdam', orderTotal: 44.9123},
        {joined: '2014-10-11', name: 'Bas', city: 'Papendrecht', orderTotal: 12.9123}
    ];

    $scope.doSort = function(propName) {
        $scope.sortBy=propName;
        $scope.reverse=!$scope.reverse;
    };
});*/

// Option 2
/*(function() {

    angular.module('customersApp').controller('CustomersController', function ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = 'false';

        $scope.customers= [
            {joined: '2000-12-02', name: 'John', city: 'New York', orderTotal: 9.9956},
            {joined: '2004-08-02', name: 'Zed', city: 'Rotterdam', orderTotal: 5.356},
            {joined: '2014-11-05', name: 'Aap', city: 'Amsterdam', orderTotal: 44.9123},
            {joined: '2014-10-11', name: 'Bas', city: 'Papendrecht', orderTotal: 12.9123}
        ];

        $scope.doSort = function(propName) {
            $scope.sortBy=propName;
            $scope.reverse=!$scope.reverse;
        };
    });
}());*/

// Option 3
(function() {

    var CustomersController = function ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = 'false';

        $scope.customers= [
            {joined: '2000-12-02', name: 'John', city: 'New York', orderTotal: 9.9956},
            {joined: '2004-08-02', name: 'Zed', city: 'Rotterdam', orderTotal: 5.356},
            {joined: '2014-11-05', name: 'Aap', city: 'Amsterdam', orderTotal: 44.9123},
            {joined: '2014-10-11', name: 'Bas', city: 'Papendrecht', orderTotal: 12.9123}
        ];

        $scope.doSort = function(propName) {
            $scope.sortBy=propName;
            $scope.reverse=!$scope.reverse;
        };
    }

    angular.module('customersApp').controller('CustomersController', CustomersController);
}());