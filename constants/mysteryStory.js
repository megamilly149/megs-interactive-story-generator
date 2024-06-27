const story = {
    part1: {
        text: "So, you are walking down the street and you see a mysterious figure in the shadows. What do you do?",
        choices: [
            { label: "Approach the figure", nextPart: "part2a" },
            { label: "Keep walking", nextPart: "part2b" }
        ]
    },
    part2a: {
        text: "You decide to approach the figure. As you get closer, you notice that the figure is holding something shiny in their hand. The figure steps back into the shadows as you approach, but you can now see that it is a key.\n\n\"Can I help you with something?\" you ask, trying to sound confident.\n\nThe figure looks up, their face partially obscured by a hood. \"I need your help,\" they say in a low voice. \"This key... it unlocks something important, but I'm being followed.\"",
        choices: [
            { label: "Take the key and help the figure", nextPart: "part3a" },
            { label: "Refuse to get involved", nextPart: "part3b" }
        ]
    },
    part2b: {
        text: "You decide to keep walking, not wanting to get involved with a potentially dangerous situation. As you continue down the street, you can't shake the feeling that you're being watched. You quicken your pace, but the feeling persists.\n\nSuddenly, you hear footsteps behind you. You turn around and see the same mysterious figure from the shadows now following you.\n\n\"Wait! I need your help!\" the figure calls out.",
        choices: [
            { label: "Stop and listen to the figure", nextPart: "part3c" },
            { label: "Run away", nextPart: "part3d" }
        ]
    },
    part3a: {
        text: "You take the key from the figure. \"Alright, I'll help you,\" you say. The figure looks relieved and hands you a small piece of paper with an address on it.\n\n\"Meet me here at midnight,\" the figure says. \"And be careful, they're watching.\" Before you can ask any more questions, the figure disappears into the night.",
        choices: [
            { label: "Go to the address at midnight", nextPart: "part4a" },
            { label: "Investigate the key and the address before going", nextPart: "part4b" }
        ]
    },
    part3b: {
        text: "You refuse to get involved. \"I'm sorry, but I can't help you,\" you say, and walk away quickly. The figure looks disappointed but doesn't follow.\n\nAs you continue down the street, you can't help but feel a pang of guilt. You hope you made the right decision.",
        choices: [
            { label: "Continue with your day", nextPart: "part5a" },
            { label: "Change your mind and go back", nextPart: "part5b" }
        ]
    },
    part3c: {
        text: "You stop and listen to the figure. \"I need your help,\" they repeat, holding out a shiny key. \"This key unlocks something important, but I'm being followed. I can't do this alone.\"\n\nYou look around and realize the street is eerily quiet. \"Alright, I'll help you,\" you say, taking the key.",
        choices: [
            { label: "Ask more about the situation", nextPart: "part3a" },
            { label: "Go to the address at midnight", nextPart: "part4a" }
        ]
    },
    part3d: {
        text: "You decide to run away, not wanting to take any chances. As you sprint down the street, you hear the figure calling out behind you, but you don't look back.\n\nYou keep running until you reach a crowded area, hoping to blend in and lose the mysterious figure.",
        choices: [
            { label: "Find a place to hide and observe", nextPart: "part6a" },
            { label: "Head straight home", nextPart: "part6b" }
        ]
    },
    part4a: {
        text: "At midnight, you arrive at the address written on the piece of paper. It's an old, abandoned warehouse on the outskirts of town. The door is slightly ajar, and you can see a faint light coming from inside.\n\nYou take a deep breath and push the door open. Inside, the figure is waiting for you. \"I'm glad you came,\" they say. \"We don't have much time.\"",
        choices: [
            { label: "Ask about the key and what it unlocks", nextPart: "part7a" },
            { label: "Look around the warehouse for clues", nextPart: "part7b" }
        ]
    },
    part4b: {
        text: "Before going to the address, you decide to investigate the key and the location. You take the key to a locksmith, who tells you it's a very old and unique key, possibly for a secret lock.\n\nNext, you do some research on the address and find out that it's an abandoned warehouse with a mysterious past.",
        choices: [
            { label: "Go to the address at midnight", nextPart: "part4a" },
            { label: "Inform the authorities about the situation", nextPart: "part8a" }
        ]
    },
    part5a: {
        text: "You decide to continue with your day, trying to forget about the mysterious figure. However, throughout the day, you can't shake the feeling that you've made a mistake.\n\nLater that night, as you're about to go to bed, you hear a knock on your door. Hesitantly, you open it to find the mysterious figure standing there. \"Please, I really need your help,\" they plead.",
        choices: [
            { label: "Invite them in and listen", nextPart: "part3a" },
            { label: "Refuse and close the door", nextPart: "part8b" }
        ]
    },
    part5b: {
        text: "You change your mind and decide to go back to help the figure. When you return to the spot where you first saw them, the figure is gone. However, you notice a small piece of paper on the ground with an address written on it.",
        choices: [
            { label: "Go to the address at midnight", nextPart: "part4a" },
            { label: "Investigate the address before going", nextPart: "part4b" }
        ]
    },
    part6a: {
        text: "You find a place to hide and observe. After a few minutes, you see the mysterious figure searching for you. They look around, clearly agitated, before eventually giving up and leaving.\n\nYou wait a little longer before emerging from your hiding spot, wondering what their intentions were.",
        choices: [
            { label: "Investigate the figure's motives", nextPart: "part8c" },
            { label: "Forget about the incident and go home", nextPart: "part6b" }
        ]
    },
    part6b: {
        text: "You head straight home, trying to forget about the strange encounter. However, later that night, you receive an anonymous message: \"You can't ignore this forever. We need your help.\"\n\nThe message sends a chill down your spine. You realize that this mystery isn't over yet.",
        choices: [
            { label: "Respond to the message", nextPart: "part8d" },
            { label: "Ignore the message and go to bed", nextPart: "part8e" }
        ]
    },
    part7a: {
        text: "You ask the figure about the key and what it unlocks. The figure looks around nervously before speaking. \"This key unlocks a safe hidden somewhere in this warehouse. Inside the safe is something that could change everything, but we need to find it before they do.\"",
        choices: [
            { label: "Help search for the safe", nextPart: "part9a" },
            { label: "Demand more information before helping", nextPart: "part9b" }
        ]
    },
    part7b: {
        text: "You decide to look around the warehouse for clues. The place is filled with old crates and cobwebs, but you notice a faint trail of footprints leading to a hidden door in the back.\n\n\"Over here,\" you call out to the figure. Together, you push open the hidden door to reveal a small room with a locked safe.",
        choices: [
            { label: "Use the key to open the safe", nextPart: "part10a" },
            { label: "Examine the room for traps", nextPart: "part10b" }
        ]
    },
    part8a: {
        text: "You decide to inform the authorities about the situation. The police take your statement and promise to investigate. Later that night, you receive a call from an unknown number.\n\n\"You shouldn't have done that,\" a voice says."
    }
};