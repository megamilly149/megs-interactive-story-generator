const story = {
    part1: {
        text: "It was the first warm day of spring, and the city was bursting with life. Flowers bloomed along the sidewalks, and the air was filled with the sounds of laughter and music from a nearby street performer. Emily, a young artist with a passion for painting, decided to spend her afternoon at the park, hoping to capture the beauty of the season on her canvas.\n\nShe set up her easel near the fountain, where children played and couples strolled hand in hand. As she mixed her paints, she noticed a man sitting on a bench across from her. He was deeply engrossed in a book, occasionally looking up to admire the scenery. There was something about his quiet demeanor that intrigued her.\n\nAs the afternoon wore on, Emily's painting began to take shape. Lost in her work, she didn't notice the man approaching until he spoke.\n\n\"Excuse me,\" he said, his voice gentle and warm. \"I couldn't help but notice your painting. It's beautiful.\"\n\nEmily looked up, surprised. \"Oh, thank you! I didn't see you come over. I'm Emily.\"\n\n\"Nice to meet you, Emily. I'm Jack,\" he replied, extending his hand. They shook hands, and for a moment, Emily felt a spark of connection.",
        choices: [
            { label: "Ask Jack about his book", nextPart: "part2a" },
            { label: "Invite Jack to paint with you", nextPart: "part2b" }
        ]
    },
    part2a: {
        text: "Emily glanced at the book in Jack's hand. \"What are you reading?\" she asked, glancing at the book in his hand.\n\nJack smiled. \"It's a collection of poems by Rumi. I come here often to read and find inspiration.\"\n\nEmily's eyes lit up. \"I love Rumi! His words are so evocative. Do you have a favorite poem?\"\n\nJack nodded and opened the book to a marked page. \"This one,\" he said, handing it to her.\n\nEmily read the poem aloud, her voice soft and melodic. As she finished, Jack gazed at her with admiration. \"You read beautifully,\" he said. \"It's like the words come alive.\"",
        choices: [
            { label: "Invite Jack for coffee", nextPart: "part3" },
            { label: "Continue painting together", nextPart: "part4" }
        ]
    },
    part2b: {
        text: "Emily smiled. \"I'm Emily.\" She hesitated for a moment, then said, \"Would you like to join me? I could use some company while I paint.\"\n\nJack seemed pleasantly surprised. \"I'd love to, Emily.\" He sat down beside her, and as she painted, they chatted about their favorite artists and the beauty of the park in spring.\n\nEmily found herself enjoying Jack's company more than she had expected. His insights into art were thoughtful and his presence comforting. They spent the rest of the afternoon together, sharing stories and laughing as the sun dipped lower in the sky.",
        choices: [
            { label: "Ask Jack to meet again for coffee", nextPart: "part3" },
            { label: "Plan another painting session", nextPart: "part4" }
        ]
    },
    part3: {
        text: "A few days later, Emily found herself standing outside a quaint little café, her heart pounding with a mix of excitement and nerves. She had been looking forward to seeing Jack again, and now that the moment was here, she hoped their connection would be as strong as it had been in the park.\n\nJack arrived right on time, his smile as warm as the spring sunshine. \"Hi, Emily,\" he greeted her, his eyes lighting up when he saw her. \"Shall we?\"\n\nInside the café, they chose a cozy corner table, surrounded by bookshelves filled with novels and poetry collections. The aroma of freshly brewed coffee mingled with the scent of baked goods, creating an inviting atmosphere. They ordered their drinks and settled into conversation.\n\n\"So, how's the painting coming along?\" Jack asked, genuinely curious.\n\nEmily smiled. \"It's going well. I'm working on capturing the essence of spring, the way everything feels so alive and full of possibilities. What about you? Have you written any new poems?\"\n\nJack nodded. \"I've been inspired since we met. Your passion for art has sparked something in me. I've written a few poems that I'd love to share with you.\"",
        choices: [
            { label: "Listen to Jack's poems", nextPart: "part5" },
            { label: "Share your artwork with Jack", nextPart: "part6" }
        ]
    },
    part4: {
        text: "They continued painting together, and as the sun began to set, the park was bathed in a warm golden light. Emily and Jack shared a deep conversation about their dreams and aspirations. They found that they had much in common, both having a deep appreciation for the arts and a desire to create something meaningful.\n\nAs the day drew to a close, they exchanged contact information and promised to meet again. The connection between them was undeniable, and both Emily and Jack felt a sense of anticipation for what the future might hold.",
        choices: [
            { label: "Plan a visit to an art gallery", nextPart: "part7" },
            { label: "Attend a poetry reading together", nextPart: "part8" }
        ]
    },
    part5: {
        text: "As they sipped their coffee, Jack pulled out a small notebook and began to read. His words were heartfelt and moving, weaving images of nature, love, and hope. Emily listened intently, feeling a deep connection to the emotions in his poetry.\n\n\"Jack, your poems are beautiful,\" she said softly. \"They remind me of why I love painting. It's about capturing moments and feelings, sharing a piece of your soul with the world.\"\n\nJack reached across the table and gently took her hand. \"I feel the same way about your art, Emily. There's a sincerity and passion in your work that resonates with me.\"",
        choices: [
            { label: "Invite Jack to a poetry reading", nextPart: "part8" },
            { label: "Suggest a collaborative project", nextPart: "part9" }
        ]
    },
    part6: {
        text: "Emily pulled out her sketchbook and showed Jack some of her recent work. He admired each piece, his eyes lighting up with appreciation. \"Your art is incredible, Emily. Each piece tells a story.\"\n\nEmily blushed at his praise. \"Thank you, Jack. It's something I love deeply.\"\n\nThey spent hours talking, laughing, and sharing their dreams. As the afternoon turned into evening, they realized how much they enjoyed each other's company. It felt like they had known each other for years, even though they had just met.",
        choices: [
            { label: "Plan another art session", nextPart: "part4" },
            { label: "Attend an art fair together", nextPart: "part10" }
        ]
    },
    // Add additional parts of the story as needed
};

