"use strict";
exports.__esModule = true;
var request = require("request");
var Index_1 = require("./Responses/Index");
var DNDService = /** @class */ (function () {
    function DNDService() {
        this.baseUrl = 'http://dnd5eapi.co/api';
    }
    DNDService.prototype.makeRequest = function (api, index) {
        var details = new Index_1.AbilityScoreResponse();
        details.id = 'Someid';
        request(this.baseUrl + "/" + api + "/" + index, function (error, response, body) {
        });
        return details;
    };
    DNDService.getInstance = function () {
        return this._instance || (this._instance = new this());
    };
    return DNDService;
}());
exports.DNDService = DNDService;
