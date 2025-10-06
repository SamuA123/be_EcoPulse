import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

// Streaming endpoint con historial
app.post("/chat", async (req, res) => {
  try {
    const { message, history = [] } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: "Falta el mensaje en la petición." });
    }

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    // Construir mensajes con historial
    const messages = [
      {
        role: "system",
        content: `Eres un asistente experto en sostenibilidad y medio ambiente llamado EcoPulse.

Proporciona respuestas detalladas, bien estructuradas y educativas sobre:
- Sostenibilidad y medio ambiente
- Cambio climático y energías renovables
- Economía circular y reciclaje
- Conservación de recursos naturales
- Prácticas ecológicas

Formato de respuestas:
- Usa párrafos separados con líneas en blanco
- Utiliza listas numeradas o con viñetas cuando sea apropiado
- Incluye ejemplos prácticos cuando sea relevante
- Mantén un tono amigable pero profesional

Estructura tu respuesta de forma clara y legible.`
      },
      // Incluir historial (limitado a los últimos 10 mensajes para no exceder tokens)
      ...history.slice(-10).map(msg => ({
        role: msg.role,
        content: msg.content
      }))
    ];

    const stream = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
      stream: true,
      temperature: 0.7,
      max_tokens: 1000,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) {
        // Escapar el contenido para evitar problemas con caracteres especiales
        const safeContent = content.replace(/\n/g, '\\n');
        res.write(`data: ${safeContent}\n\n`);
      }
    }

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (error) {
    console.error("❌ Error en streaming:", error.message);
    
    // Enviar error en formato SSE
    if (!res.headersSent) {
      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");
    }
    
    res.write(`data: Error: ${error.message}\n\n`);
    res.write("data: [DONE]\n\n");
    res.end();
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
});