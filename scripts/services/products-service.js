/**
 * Created by ania on 2/5/17.
 */

function ProductsServiceFactory($http) {
    return {
        $get() {
            return $http.get('data/products.json')
                .then(data => data.data.products);
            //return new Promise((resolve, reject) => {
            //    resolve([
            //        {id: 1, name: 'rower gorski'},
            //        {id: 2, name: 'kask'},
            //        {id: 3, name: 'kask dzieciecy'}
            //    ]);
            //})
        }
    };
}

angular.module('shop')
    .factory('ProductsService', ProductsServiceFactory);
