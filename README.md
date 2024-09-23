This is a simple chatbot created using node and works by connecting to OpenAI via API services.

If you would want to try it yourself, you need to 
1. git clone https://github.com/antonlau-1/chatbot-api-openai.git
2. cd path/to/chatbot-api-openai
3. touch .env
4. Put your own OpenAI API key into .env using the format ( OPENAI_API_KEY=YOUR_KEY )
5. You can also specify the port by ( PORT=YOUR_PORT ), else the default port is 3000
6. Note that depending on usage, you might want to change the model openAI uses. You can find the model defined in chatbot-api-openai/openai.js