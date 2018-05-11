import { Client, Message, TextChannel, DMChannel, GroupDMChannel } from 'discord.js';
import { DNDService } from './DNDService';
import { Settings } from '../settings';

const client: Client = new Client();
const api: DNDService = DNDService.getInstance();
client.login(Settings.clientId);


client.on('message', handleMessage.bind(this));

function handleMessage(message: Message): void {
    let channel: TextChannel | DMChannel | GroupDMChannel = message.channel;
    let command: string = message.content.toLowerCase().split(' ')[0];
    if (message.content.charAt(0) != '!') {
        return;
    }
    if(command == '!help') {
        channel.send(commandHelp());
    }
   
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