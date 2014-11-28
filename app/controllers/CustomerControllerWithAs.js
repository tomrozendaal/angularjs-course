function CustomersController() {
    this.sortBy = 'name';
    this.reverse = 'false';

    this.customers= [
        {joined: '2000-12-02', name: 'John', city: 'New York', orderTotal: 9.9956},
        {joined: '2004-08-02', name: 'Zed', city: 'Rotterdam', orderTotal: 5.356},
        {joined: '2014-11-05', name: 'Aap', city: 'Amsterdam', orderTotal: 44.9123},
        {joined: '2014-10-11', name: 'Bas', city: 'Papendrecht', orderTotal: 12.9123}
    ];

    this.doSort = function(propName) {
        this.sortBy=propName;
        this.reverse=!this.reverse;
    };
}