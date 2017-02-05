/**
 * Created by ania on 2/5/17.
 */

(function () {
    'use strict';

    class ProductComponent {
        constructor() {
            this.templateUrl = '/scripts/components/product-component.html';

            this.bindings = {
                product: '<',  //atrybut, który przyjmuje dane
                onDelete: '&'       //znaczek eventa
            };
            this.require = {
                productList: '^^'
            };

            this.controller = function(CartService) {
                this.product = null;
                this.cartService = CartService;

                this.$onInit = () => {
                    //this.product = this.productList.getProductByIndex(this.productIndex);
                };

                this.$addToCart = (product) => {
                    console.log('product', product);
                    console.log('service');
                }

            };
        }
    }


    angular.module('shop')
        .component('product', new ProductComponent);
}());