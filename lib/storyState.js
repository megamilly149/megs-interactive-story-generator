// storyStates.js
class StoryState {
    enterState(engine) {}
    execute() {}
    handleChoice(choice, interaction) {}
}

class SelectStoryState extends StoryState {
    enterState(engine) {
        engine.setState(this);
    }
    execute(interaction) {
        interaction.reply("A. Romance\nB. Mystery");
    }
    handleChoice(choice, interaction) {
        if (choice === "a") {
            interaction.reply("You have chosen Romance Storyboard");
            engine.setState(engine.playStoryState);
        } else if (choice === "b") {
            interaction.reply("You have chosen Mystery Storyboard");
            engine.setState(engine.playStoryState);
        }
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
