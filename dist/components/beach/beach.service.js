var beachService = angular.module('beachService', ['ngResource']);

beachService.factory('Beach', ['$resource',
    function ($resource) {
        return $resource('components/beach/beach.json', {}, {
            query: {method: 'GET', isArray: true}
        });
    }
]);