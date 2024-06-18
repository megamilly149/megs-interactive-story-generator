"use strict";
require("dotenv").config();
const { Client, Events, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
    	GatewayIntentBits.MessageContent,
    ],
});

// listen to the event that signals bot is ready to start working
client.on("ready", () => console.log(`logged in as ${client.user.tag}`));

// event handling
client.on(Events.MessageCreate, async (interaction) => {
    if (!interaction.content.startsWith("!")) return;
  
    // seperate the command and arguments
    const args = interaction.content.slice("!".length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
  
    if (commandName === "start_storyboard") {
      interaction.reply("!choose_a_storyboard");
    }
  
    if (commandName === "choose_a_storyboard") {
      interaction.reply("A. Romance\nB. Mystery");
    }
  
    if (commandName === "choose_a") {
      interaction.reply("You have chosen Mystery Storyboard");
    }
  
    let secondLatestMessageContent;
  
    await interaction.channel.messages.fetch({ limit: 2 }).then((messages) => {
      let secondLatestMessage = Array.from(messages.values())[1];
      secondLatestMessageContent = secondLatestMessage.content;
    });
  
    if (
      commandName === "continue_storyboard" &&
      secondLatestMessageContent === "You have chosen Mystery Storyboard"
    ) {
      interaction.reply(
        "So, you are walking down the street and you see a mysterious figure in the shadows. What do you do?"
      );
    }
  });
// login to the server using bot token
client.login(process.env.TOKEN);
