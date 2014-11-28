(function() {
    var customersFactory = function() {
        var customers = [
            {
                id: 1,
                joined: '2000-12-02',
                name: 'John',
                city: 'New York',
                orderTotal: 9.9956,
                orders: [
                    {
                        id: 1,
                        product: 'Shoes',
                        total: '9.9956'
                    }
                ]
            },
            {
                id: 2,
                joined: '2014-08-02',
                name: 'Abo',
                city: 'San Fransisco',
                orderTotal: 5.50,
                orders: [
                    {
                        id: 1,
                        product: 'Shoes',
                        total: '9.9956'
                    }
                ]
            },
            {
                id: 3,
                joined: '2011-11-11',
                name: 'Bas',
                city: 'Las Vegas',
                orderTotal: 5.50,
                orders: [
                    {
                        id: 1,
                        product: 'Pants',
                        total: '5.50'
                    }
                ]
            }

        ];

        var factory = {};
        factory.getCustomers = function() {
            return customers;
        }

        factory.getCustomer = function(customerId) {
            len = customers.length;
            for (var i = 0; i<len; i++) {
                if (customers[i].id === parseInt(customerId)) {
                    return customers[i];
                }
            }
            return {};
        }

        return factory;
    };

    angular.module('customersApp').factory('customersFactory', customersFactory);

}());