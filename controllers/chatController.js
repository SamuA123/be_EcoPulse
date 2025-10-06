import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const sendMessage = async (req, res) => {
  const { message } = req.body;

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini", // rápido y económico
      messages: [
        { role: "system", content: "Eres un asistente experto en fenología, floración y patrones de ecosistemas." },
        { role: "user", content: message }
      ],
    });

    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al comunicarse con OpenAI" });
  }
};
