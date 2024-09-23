require('dotenv').config();
const express = require('express');
const path = require('path');
const { OpenAIAPI } = require('./openai');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/getChatbotResponse', async (req, res) => {
    try {
        const userMessage = req.body.userMessage;

        // Use OpenAI API to generate a response
        const chatbotResponse = await OpenAIAPI.generateResponse(userMessage);

        // Send the response back to the client
        res.json({ chatbotResponse });
    } catch (error) {
        console.error('Error generating chatbot response:', error);
        res.status(500).json({ error: 'Failed to generate chatbot response' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
