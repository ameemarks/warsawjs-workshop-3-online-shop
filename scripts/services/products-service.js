/**
 * Created by ania on 2/5/17.
 */

function ProductsServiceFactory() {
    return {
        $get() {
            return [
                {id: 1, name: 'rower gorski'},
                {id: 2, name: 'kask'},
                {id: 3, name: 'kask dzieciecy'}
            ]
        }
    };
}

angular.module('shop')
    .factory('ProductsService', ProductsServiceFactory);
