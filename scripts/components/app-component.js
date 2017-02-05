/**
 * Created by ania on 2/5/17.
 */
(function () {
    'use strict';

    class AppComponent {
        constructor() {
            this.templateUrl = '/scripts/components/app-component.html';
            //this.controller = AppController;
            this.controller = function () {
                this.title = 'Witamy na WarsawJS';
                this.products = [
                    {id: 1, name: 'rower gorski'},
                    {id: 2, name: 'kask'},
                    {id: 3, name: 'manetki'}
                ];
                this.onTitleClick = function () {
                    console.log("clicked");
                }
            };

        }
    }
    angular.module('shop').component('app', new AppComponent);


}());