/**
 * Created by ania on 2/5/17.
 */
angular.module('shop').filter('wiecej', function() {
    return function(value, len) {
        //console.log('FILTER', value);
        if (value && value.length > len) {
            return value.substr(0, len) + '... czytaj więcej';
        }
        return value;
    }

});