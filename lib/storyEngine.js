const { SelectStoryState, PlayStoryState } = require("./storyState.js");
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
        if (commandName === "startstoryboard") {
            this.selectStoryState.enterState(this);
            this.currentState.execute(interaction);
        }
        if (commandName.startsWith("choose_")) {
            this.currentState.handleChoice(commandName, interaction, this);
        }
        if (commandName === "continuestoryboard") {
            this.currentState.execute(interaction, this);
        }
        if (commandName.startsWith("continuestoryboard_")) {
            this.currentState.handleChoice(commandName, interaction, this);
        }
    }
}
module.exports = { StoryEngine };