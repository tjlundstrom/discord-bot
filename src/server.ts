import * as Discord from 'discord.js';
import * as request from 'request';

const client = new Discord.Client();

client.login('NDM3NzgyMDY2NDQ1NDE4NTI4.Db7HBg.GGdlxath64zbFL03t4p3HtmI7_g');

client.on('message', handleMessage.bind(this));
    
function handleError(code) {
    if(code == 404) {
        return 'I have no idea what I am doing!';
    }
}

function handleMessage(message: Message) {
    if (!message.content.startsWith('!')) {
        return;
    }

    let command = message.content.toLowerCase().split(' ')[0];
    let channel = message.channel;
    switch(command) {
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
    return `
        Available commands:
        1. Ability Scores = !attr [ability]
            1. Strength - str
            2. Dexterity - dex
            3. Constitution - con
            4. Intellect - int
            5. Wisdom - wis
            6. Charisma - cha
        `;
}

function commandAttr() {
    return 'hello';
}

function abilityScores(message) {
    let channel = message.channel;


    if(message.content.toLowerCase() == '!str' ) {
        request('http://dnd5eapi.co/api/ability-scores/1', (error, response, body) => {
            if(response.statusCode != 200) {
                channel.send(handleError(response.statusCode));
            } else {
                channel.send(handleResponse(body));
            }
        });
    }
}

function handleResponse(body) {
    let details = JSON.parse(body);
    return `${details.full_name}: ${details.desc}`;
}

client.login('NDM3NzgyMDY2NDQ1NDE4NTI4.Db7HBg.GGdlxath64zbFL03t4p3HtmI7_g');