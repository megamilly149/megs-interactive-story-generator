// storyStates.js
class StoryState {
    enterState(engine) { }
    execute() { }
    handleChoice(choice, interaction) { }
}

class SelectStoryState extends StoryState {
    enterState(engine) {
        engine.setState(this);
    }
    execute(interaction) {
        let command = interaction.client.commands.get("selectstoryboard");
        command.execute(interaction);
    }
    handleChoice(commandName, interaction, engine) {
        let command = interaction.client.commands.get(commandName);
        command.execute(interaction);
        engine.playStoryState.storyCategory = commandName.split("_")[1];;
        engine.setState(engine.playStoryState);
    }
}

class PlayStoryState extends StoryState {
    constructor() {
        super();
        this.storyCategory = null;
        this.storyPart = 1;
    }
    enterState(engine) {
        engine.setState(this);
    }
    execute(interaction, engine) {
        const command = interaction.client.commands.get("continuestoryboard");
        command.execute(interaction, engine);
    }
    handleChoice(commandName, interaction, engine) {
        const command = interaction.client.commands.get("continuestoryboard");
        command.execute(interaction, engine, commandName);
    }
}

module.exports = { SelectStoryState, PlayStoryState };
