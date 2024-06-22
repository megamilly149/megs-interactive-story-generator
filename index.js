"use strict";
require("dotenv").config();
const { Client, GatewayIntentBits, Events, Collection } = require("discord.js");
const { StoryEngine } = require("./lib/storyEngine.js");
const fs = require("node:fs");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
// Read command files
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
// StoryEngine to manage states
const storyEngine = new StoryEngine();

// Initialize client commands as new collection
client.commands = new Collection();

// Set commands to client.commands
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on("ready", () => console.log(`Logged in as ${client.user.tag}`));

// Event handling
client.on(Events.MessageCreate, (interaction) => {
  const prefix = "!";

  if (!interaction.content.startsWith(prefix)) return;

  const commandName = interaction.content.slice(prefix.length).trim().toLowerCase();
  
  storyEngine.handleCommand(commandName, interaction);
});

// Login to the server using bot token
client.login(process.env.TOKEN);
