/**
 * Created by ania on 2/5/17.
 */

(function () {
    'use strict';

    class ProductListComponent {
        constructor() {
            this.templateUrl = '/scripts/components/product-list-component.html';

            this.controller = function (ProductsService) {
                this.products = [];
                this.ProductsService = ProductsService;

                this.$onInit = () => {
                    this.ProductsService.$get()
                        .then((data) => {
                            console.log('data', data);
                            this.products = this.products.concat(data);
                        });
                };

                this.getProductByIndex = (index) => {
                    return this.products[index];
                };

                this.onProductDelete = (product, index) => {
                    console.log('delete', product, index);
                    this.products.splice(index, 1);
                };

                this.onProductClick = (product) => {
                    console.log('item', product);
                }
            };
        }
    }

    angular.module('shop')
        .component('productList', new ProductListComponent);
}());

