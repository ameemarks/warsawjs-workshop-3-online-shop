/**
 * Created by ania on 2/5/17.
 */
(function () {
    'use strict';

    class AppComponent {
        constructor() {
            this.templateUrl = '/scripts/components/app-component.html';
            //this.controller = AppController;
            this.controller = function (ProductsService) {
                this.title = 'Witamy na WarsawJS';
                ProductsService.$get().then(products => {   //usługa z pliku products-service
                    this.products = products;
                });
                this.onTitleClick = function () {
                    console.log("clicked");
                }
            };

        }
    }
    angular.module('shop').component('app', new AppComponent);


}());