const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.token);

bot.on('message', (message) => {
    if(message.content == '!mana'){
        message.channel.send('ciao ' + message.author.toString() + ' mana ti saluta e ti da un bacino');
    }
});