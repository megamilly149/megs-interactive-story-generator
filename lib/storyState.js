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
        engine.setState(engine.playStoryState);
    }
}

class PlayStoryState extends StoryState {
    enterState(engine) {
        engine.setState(this);
    }
    execute(interaction) {
        interaction.reply(
            "So, you are walking down the street and you see a mysterious figure in the shadows. What do you do?"
        );
    }
    handleChoice(choice, interaction) {
        // Handle story progression based on user choice
        interaction.reply(`You chose to ${choice}. The story continues...`);
    }
}

module.exports = { SelectStoryState, PlayStoryState };
