class OpenAIAPI {
    static async generateResponse(userMessage, conversationHistory = []) {
        const apiKey = process.env.OPENAI_API_KEY;
        const endpoint = 'https://api.openai.com/v1/chat/completions';

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo-1106",
                    messages: conversationHistory.concat([{ role: 'user', content: userMessage }]),
                    max_tokens: 150
                }),
            });

            // Check if the response is ok (status code in the range 200-299)
            if (!response.ok) {
                console.error('API response error:', response.status, response.statusText);
                return 'Sorry, I couldn\'t reach the AI service.';
            }

            const responseData = await response.json();
            console.log('Response from OpenAI API:', responseData.choices[0]?.message);
            
            if (responseData.choices && responseData.choices.length > 0 && responseData.choices[0].message) {
                return responseData.choices[0].message.content;
            } else {
                console.error('Error: No valid response from OpenAI API');
                return 'Sorry, I couldn\'t understand that.';
            }
        } catch (error) {
            console.error('Error generating response:', error);
            return 'Sorry, an error occurred while processing your request.';
        }
    }
}

module.exports = { OpenAIAPI };
