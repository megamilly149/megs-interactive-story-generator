"use strict";
require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
    	GatewayIntentBits.MessageContent,
    ],
});

// listen to the event that signals bot is ready to start working
client.on("ready", () => console.log(`logged in as ${client.user.tag}`));

// message handling
client.on('messageCreate', message => {
    if (message.content === 'ping') {
        message.channel.send('Pong!');
    }
});

// login to the server using bot token
client.login(process.env.TOKEN);