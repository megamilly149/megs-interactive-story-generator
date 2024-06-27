module.exports = {
    name: "continuestoryboard",
    description: "Continue the current storyline.",
    async execute(interaction, storyEngine, commandName) {
        try {
            interaction.reply("Continuing the current storyline...");
        } catch (error) {
            console.error("Failed to continue the storyboard:", error);
            // Consider replying with an error message if appropriate
        }
    },
};