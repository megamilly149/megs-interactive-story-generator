const { SelectStoryState } = require("../lib/storyState.js");

module.exports = {
  name: "selectstory",
  description: "Select a story to play.",
  execute(message, args) {
    // Create a new instance of the select story state class
    const selectStoryState = new SelectStoryState();
    // Call the execute method of the select story state object
    selectStoryState.execute(message);
  },
};
const { Client, GatewayIntentBits, Events } = require("discord.js");
const { SelectStoryState, PlayStoryState } = require("./storyStates");

const client = new Client({
    intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

// StoryEngine to manage states
class StoryEngine {
    constructor() {
        this.selectStoryState = new SelectStoryState();
        this.playStoryState = new PlayStoryState();
        this.currentState = null;
    }
    setState(state) {
        this.currentState = state;
    }
    handleCommand(commandName, interaction) {
        if (commandName === "start_storyboard") {
            this.selectStoryState.enterState(this);
            this.currentState.execute(interaction);
        } else if (commandName.startsWith("choose_")) {
            const choice = commandName.split("_")[1];
            this.currentState.handleChoice(choice, interaction);
        } else if (commandName === "continue_storyboard") {
            this.currentState.execute(interaction);
        }
    }
}

const storyEngine = new StoryEngine();

client.on("ready", () => console.log(`Logged in as ${client.user.tag}`));

// Event handling
client.on(Events.MessageCreate, async (interaction) => {
    if (!interaction.content.startsWith("!")) return;

    const args = interaction.content.slice("!".length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    storyEngine.handleCommand(commandName, interaction);
});

// Login to the server using bot token
client.login(process.env.TOKEN);
