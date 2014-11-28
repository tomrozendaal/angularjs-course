(function() {

    var AllOrdersController = function ($scope, customersFactory) {
        $scope.orders = null;
        $scope.ordersTotal = null;
        $scope.totalType;

        function init() {
            customersFactory.getOrders()
                .success(function(orders) {
                    $scope.orders = orders;
                    getOrdersTotal();
                })
                .error(function(data, status, headers, config){
                    // handle error
                });
        }

        function getOrdersTotal() {
            var total = 0;
            len=$scope.orders.length;
            for (var i = 0;i<len;i++) {
                total += $scope.orders[i].total;
            }
            $scope.ordersTotal = total;
            $scope.totalType = ($scope.ordersTotal > 100) ? 'succes' : 'danger';
        }

        init();
    }

    AllOrdersController.$inject = ['$scope', 'customersFactory'];

    angular.module('customersApp').controller('AllOrdersController', AllOrdersController);
}());