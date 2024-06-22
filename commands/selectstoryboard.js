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
