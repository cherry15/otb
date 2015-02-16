'use strict';

describe('BeachCtrl', function () {

    // load dependencies
    beforeEach(module('otbApp'));
    beforeEach(module('beachService'));
    beforeEach(module('beachModule'));

    var controller, scope, $httpBackend, orderBy;

    beforeEach(module(function ($urlRouterProvider) {
        $urlRouterProvider.deferIntercept();
    }));

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$httpBackend_, $rootScope, $controller, $filter) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('components/beach/beach.json')
          .respond([
              {
                  hotel_name: "Banana hotel",
                  price: 100,
                  rating: 3,
                  description: "One banana, two banana, three banana 4"
              }, {
                  hotel_name: "Apple hotel",
                  price: 300,
                  rating: 2,
                  description: "Lots of apples here"
              }, {
                  hotel_name: "Cat hotel",
                  price: 600,
                  rating: 1,
                  description: "Cats are the best"
              }
          ]);

        scope = $rootScope.$new();
        controller = $controller('BeachCtrl', {$scope: scope});
        orderBy = $filter('orderBy');
    }));

    it('should attach a list of holidays to the scope', function () {
        $httpBackend.flush();
        expect(scope.beaches.length).toBe(3);
    });
    
   it('should sort the holidays by price', function () {
       $httpBackend.flush();
       var sortedArray = orderBy(scope.beaches, scope.choice);
       expect(scope.choice).toBe('price');
       expect(sortedArray[0]).toEqualData({
                hotel_name: "Banana hotel",
                price: 100,
                rating: 3,
                description: "One banana, two banana, three banana 4"
            });
    });
    
    it('should sort the holidays by rating', function () {
       $httpBackend.flush();
       scope.choice = 'rating';
       var sortedArray = orderBy(scope.beaches, scope.choice);
       expect(sortedArray[0]).toEqualData({
                hotel_name: "Cat hotel",
                price: 600,
                rating: 1,
                description: "Cats are the best"
            });
    });
    
    it('should sort the holidays by hotel name', function () {
       $httpBackend.flush();
       scope.choice = 'hotel_name';
       var sortedArray = orderBy(scope.beaches, scope.choice);
       expect(sortedArray[0]).toEqualData({
                hotel_name: "Apple hotel",
                price: 300,
                rating: 2,
                description: "Lots of apples here"
            });
    });
});