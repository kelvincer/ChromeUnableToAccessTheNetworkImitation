/**
 * Created by kelvin on 1/1/2015.
 */

var app = angular.module('App', [])

    .controller("MessagingCtrl", function () {
        var wind = this;
        wind.open = false;
        wind.show = function () {
            wind.open = !wind.open;
        };

    });