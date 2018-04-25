"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var DNDService_1 = require("./DNDService");
var client = new discord_js_1.Client();
var api = DNDService_1.DNDService.getInstance();
client.login('NDM3NzgyMDY2NDQ1NDE4NTI4.Db7HBg.GGdlxath64zbFL03t4p3HtmI7_g');
client.on('message', handleMessage.bind(this));
function handleMessage(message) {
    var channel = message.channel;
    var command = message.content.toLowerCase().split(' ')[0];
    if (message.content.charAt(0) != '!') {
        return;
    }
    if (command == '!help') {
        channel.send(commandHelp());
    }
    channel.send(api.makeRequest(command));
}
function commandHelp() {
    return "\n        Available commands:\n        1. Ability Scores = !attr [ability]\n            1. Strength - str\n            2. Dexterity - dex\n            3. Constitution - con\n            4. Intellect - int\n            5. Wisdom - wis\n            6. Charisma - cha\n        ";
}
function commandAttr() {
    return 'hello';
}
//# sourceMappingURL=server.js.map