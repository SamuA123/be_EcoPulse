🌱 EcoPulse API – Sustainability and Environmental Assistant

This project is an Express.js-based API that uses OpenAI’s GPT-4o-mini model to provide educational and structured answers about sustainability, the environment, renewable energy, recycling, and more.

It includes a streaming SSE (Server-Sent Events) endpoint that allows real-time message responses, making it ideal for chat-style interfaces.

🚀 Main Features

✅ Express server with CORS and JSON enabled

🔐 Environment variable management with dotenv

💬 /chat endpoint with conversation history support

⚡ Streaming responses via Server-Sent Events (SSE)

🧠 AI assistant defined as an expert in sustainability and environment

🪶 Clear, educational, and well-formatted responses

🛠️ Technologies Used
Technology	Description
Node.js	JavaScript runtime for backend development
Express.js	Minimal web framework for building APIs
OpenAI API	AI model to generate responses
dotenv	Loads environment variables
CORS	Middleware to allow cross-origin requests
📦 Installation and Setup
1. Clone the repository
git clone https://github.com/yourusername/ecopulse-api.git
cd ecopulse-api

2. Install dependencies
npm install

3. Configure environment variables

Create a .env file in the project root and add:

OPENAI_API_KEY=your_openai_api_key_here
PORT=5000


🔑 You can get your OpenAI API key from https://platform.openai.com/account/api-keys

▶️ Run the Server

Start the server with:

npm start


Or, if you’re using nodemon for development:

npx nodemon index.js


Then open your browser at:
👉 http://localhost:5000

You should see:

Server running 🚀

💬 Main Endpoint: /chat
Method: POST
URL: http://localhost:5000/chat
Headers:
{
  "Content-Type": "application/json"
}

Body (JSON):
{
  "message": "What are renewable energies?",
  "history": [
    { "role": "user", "content": "Explain recycling to me." },
    { "role": "assistant", "content": "Recycling means..." }
  ]
}

Parameters
Field	Type	Required	Description
message	string	✅	The user’s current message
history	array	❌	Previous conversation messages (optional)
📡 Streaming Response Format (SSE)

The server sends data using Server-Sent Events (SSE), allowing clients to receive responses progressively as the AI generates them.

Example response stream:

data: Hello! Let’s talk about renewable energies...\n\n
data: These include solar, wind, and hydro power...\n\n
data: [DONE]


When data: [DONE] is received, the stream is complete.

🧩 Project Structure
📂 ecopulse-api
 ├── 📄 index.js          # Main server file
 ├── 📄 package.json      # Project configuration
 ├── 📄 .env              # Environment variables (not committed)
 ├── 📄 .gitignore        # Ignored files
 └── 📄 README.md         # Project documentation

🌍 Assistant Behavior

The assistant EcoPulse has the following system prompt:

“You are an expert assistant on sustainability and the environment named EcoPulse.
Provide detailed, structured, and educational answers on topics such as:

Sustainability and environmental protection

Climate change and renewable energy

Circular economy and recycling

Natural resource conservation

Eco-friendly lifestyle practices

Use a friendly but professional tone and ensure clarity in your explanations.”

🧠 Example AI Response

Input:

{
  "message": "What can I do to reduce my carbon footprint?"
}


Streaming Output:

data: 🌍 Reducing your carbon footprint is a great goal.\n\n
data: Here are some practical tips:\n
data: 1. Use public transport or ride a bike.\n
data: 2. Lower your home energy consumption.\n
data: 3. Choose local and reusable products.\n\n
data: [DONE]

⚠️ Error Handling

If the message field is missing:

{ "error": "The 'message' field is required." }


If an error occurs with the OpenAI API, the SSE will return:

data: Error: <error message>
data: [DONE]

📜 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute it as long as credit is given to the original author.

💚 Author

Developed by Supernova Sparks
🌐 Project: EcoPulse – Education and Sustainability powered by AI