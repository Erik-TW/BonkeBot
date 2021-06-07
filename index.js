const Discord = require('discord.js');
const client = new Discord.Client();
const playlists = require("./playlists.js");
const dotenv = require('dotenv').config();
const identifier = '$'
client.on('ready', () => {
    client.user.setActivity(identifier + 'HELP', { type: 'WATCHING' });
});

client.on('message', msg => {
    const message = msg.content.toLowerCase();
    let index = 0;

    //use this if chain if you have more logic than just if message exactly equals something
    //don't forget to return so the switch case will not be run if an if statement is run. 
    if (message.startsWith(identifier + "calc")) {
        let start = identifier + "calc";
        msg.reply(calc(message.substring(start.length).trim()));
        return;
    }

    //use this switch for exact string matches
    switch (message) {
        case identifier + 'rollchar':
            msg.reply(rollChar());
            break;
        case identifier + 'help':
            msg.reply(help());
            break;
        case identifier + 'forest':
            index = Math.floor(Math.random() * (playlists.forest.length));
            msg.channel.send(`/play ${playlists.forest[index]}`);
            break;
        case identifier + 'city':
            index = Math.floor(Math.random() * (playlists.city.length));
            msg.channel.send(`/play ${playlists.city[index]}`);
            break;
        case identifier + 'combat':
            index = Math.floor(Math.random() * (playlists.combat.length));
            msg.channel.send(`/play ${playlists.combat[index]}`);
            break;
        case identifier + 'tavern':
            index = Math.floor(Math.random() * (playlists.tavern.length));
            msg.channel.send(`/play ${playlists.tavern[index]}`);
            break;
        case identifier + 'travel':
            index = Math.floor(Math.random() * (playlists.travel.length));
            msg.channel.send(`/play ${playlists.travel[index]}`);
            break;
        case identifier + 'campfire':
            index = Math.floor(Math.random() * (playlists.campfire.length));
            msg.channel.send(`/play ${playlists.campfire[index]}`);
            break;
        case identifier + 'campfire':
            index = Math.floor(Math.random() * (playlists.campfire.length));
            msg.channel.send(`/play ${playlists.campfire[index]}`);
            break;
    }
});

const rollChar = () => {
    let totalAll = 0;
    let result = '';
    let diceArray = [];
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            let roll = Math.floor(Math.random() * 6) + 1;
            diceArray.push(roll);
        }
        diceArray.sort();
        let total = diceArray[3] + diceArray[2] + diceArray[1];
        result += ` **${total}** : [ ${diceArray[3]}, ${diceArray[2]}, ${diceArray[1]} ] `
        diceArray = []
        totalAll += total;
    }
    result += ` **TOTAL: ${totalAll}** `;
    return result
}

const help = () => {
    return ' \n commands: \n ' +
        identifier + 'rollchar \n ' +
        identifier + 'forest \n ' +
        identifier + 'city \n ' +
        identifier + 'combat \n ' +
        identifier + 'travel \n ' +
        identifier + 'tavern \n ' +
        identifier + 'campfire \n ' +
        identifier + 'calc [num1] [+,-,*,/] [num2] \n '
}

const calc = (input) => {
    if (input.includes('+')) {
        let separator = input.indexOf('+');
        if (separator > 0) {
            let num1 = parseInt(input.substring(0, separator).trim());
            let num2 = parseInt(input.substring(separator + 1).trim());
            return num1 + num2;
        }
    }
    separator = input.indexOf('-');
    if (separator > 0) {
        let separator = input.indexOf('-');
        if (separator > 0) {
            let num1 = parseInt(input.substring(0, separator).trim());
            let num2 = parseInt(input.substring(separator + 1).trim());
            return num1 - num2;
        }
    }
    separator = input.indexOf('/');
    if (separator > 0) {
        let separator = input.indexOf('/');
        if (separator > 0) {
            let num1 = parseInt(input.substring(0, separator).trim());
            let num2 = parseInt(input.substring(separator + 1).trim());
            return num1 / num2;
        }
    }
    separator = input.indexOf('*');
    if (separator > 0) {
        let separator = input.indexOf('*');
        if (separator > 0) {
            let num1 = parseInt(input.substring(0, separator).trim());
            let num2 = parseInt(input.substring(separator + 1).trim());
            return num1 * num2;
        }
    }
    return `Syntax error. check ${identifier}help for more information`;
}

client.login(process.env.DISCORD_KEY);