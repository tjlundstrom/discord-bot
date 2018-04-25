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
                var details = ;
                return details.getResponse();
            }
        });
    };
    DNDService.getInstance = function () {
        return this._instance || (this._instance = new this());
    };
    return DNDService;
}());
exports.DNDService = DNDService;
//# sourceMappingURL=DNDService.js.map