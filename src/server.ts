import { Client, Message, TextChannel, DMChannel, GroupDMChannel } from 'discord.js';
import * as request from 'request';
import { DNDService } from './DNDService';

const client: Client = new Client();
const api: DNDService = DNDService.getInstance();

client.login('NDM3NzgyMDY2NDQ1NDE4NTI4.Db7HBg.GGdlxath64zbFL03t4p3HtmI7_g');

client.on('message', handleMessage.bind(this));
    
function handleError(code: Number): string {
    if(code == 404) {
        return 'I have no idea what I am doing!';
    }
}

function handleMessage(message: Message): void {
    if (message.content.charAt(0) != '!') {
        return;
    }

    let command: string = message.content.toLowerCase().split(' ')[0];
    let channel: TextChannel | DMChannel | GroupDMChannel = message.channel;
    channel.send(api.makeRequest(command));
}

function commandHelp(): string {
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

function commandAttr(): string {
    return 'hello';
}