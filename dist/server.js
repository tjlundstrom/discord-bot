"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var request = require("request");
var client = new discord_js_1.Client();
client.login('NDM3NzgyMDY2NDQ1NDE4NTI4.Db7HBg.GGdlxath64zbFL03t4p3HtmI7_g');
client.on('message', handleMessage.bind(this));
function handleError(code) {
    if (code == 404) {
        return 'I have no idea what I am doing!';
    }
}
function handleMessage(message) {
    if (message.content.charAt(0) != '!') {
        return;
    }
    var command = message.content.toLowerCase().split(' ')[0];
    var channel = message.channel;
    switch (command) {
        case '!help':
            channel.send(commandHelp());
            break;
        case '!attr':
            channel.send(commandAttr());
            break;
        default:
            channel.send('Command not recognized, try !help');
            break;
    }
}
function commandHelp() {
    return "\n        Available commands:\n        1. Ability Scores = !attr [ability]\n            1. Strength - str\n            2. Dexterity - dex\n            3. Constitution - con\n            4. Intellect - int\n            5. Wisdom - wis\n            6. Charisma - cha\n        ";
}
function commandAttr() {
    return 'hello';
}
function abilityScores(message) {
    var channel = message.channel;
    if (message.content.toLowerCase() == '!str') {
        request('http://dnd5eapi.co/api/ability-scores/1', function (error, response, body) {
            if (response.statusCode != 200) {
                channel.send(handleError(response.statusCode));
            }
            else {
                channel.send(handleResponse(body));
            }
        });
    }
}
function handleResponse(body) {
    var details = JSON.parse(body);
    return details.full_name + ": " + details.desc;
}
//# sourceMappingURL=server.js.map