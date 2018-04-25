"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var DNDService = /** @class */ (function () {
    function DNDService() {
        this.baseUrl = 'http://dnd5eapi.co/api';
    }
    DNDService.prototype.makeRequest = function (api, index) {
        request(this.baseUrl + "/" + api + "/" + index, function (error, response, body) {
            if (response.statusCode != 200) {
                return;
            }
            else {
                return;
            }
        });
    };
    Object.defineProperty(DNDService, "Instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    return DNDService;
}());
//# sourceMappingURL=DNDService.js.map