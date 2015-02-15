'use-strict';
beforeEach(function () {
    jasmine.addMatchers({
        toEqualData: function () {
            return {
                compare: function (actual, expected) {
                    var sameTest = angular.equals(actual, expected);
                    sameTest ? sameTest = true : sameTest = false;
                    return {
                        pass: sameTest,
                        message: 'Expected ' + angular.mock.dump(actual) + ' to equal ' + angular.mock.dump(expected)
                    };
                }
            };
        }
    });
});

beforeEach(function () {
    jasmine.addMatchers({
        toHaveClass: function () {
            return {
                compare: function (actual, expected) {
                    var classTest = actual.hasClass(expected);
                    classTest ? classTest = true : classTest = false;
                    return {
                        pass: classTest,
                        message: 'Expected ' + angular.mock.dump(actual) + ' to have class ' + expected
                    };
                }
            };
        }
    });
});