🌱 EcoPulse API – Asistente de Sostenibilidad y Medio Ambiente

Este proyecto es una API basada en Express.js que utiliza el modelo GPT-4o-mini de OpenAI para proporcionar respuestas educativas y estructuradas sobre sostenibilidad, medio ambiente, energías renovables, reciclaje y más.

La API incluye un endpoint de streaming SSE (Server-Sent Events) que permite recibir las respuestas del modelo de forma continua, ideal para integraciones en tiempo real con interfaces de chat.

🚀 Características principales

✅ Servidor Express con CORS y JSON habilitados.

🔐 Variables de entorno gestionadas con dotenv.

💬 Endpoint /chat con historial de conversación incluido.

⚡ Streaming de respuestas del modelo mediante Server-Sent Events (SSE).

🧠 Rol del asistente definido como experto en sostenibilidad y medio ambiente.

🪶 Formato de respuestas claro, educativo y estructurado.

🛠️ Tecnologías utilizadas
Tecnología	Descripción
Node.js	Entorno de ejecución para JavaScript del lado del servidor
Express.js	Framework minimalista para construir APIs
OpenAI API	Motor de inteligencia artificial para generar respuestas
dotenv	Gestión de variables de entorno
CORS	Middleware para habilitar solicitudes desde otros orígenes
📦 Instalación y configuración
1. Clonar el repositorio
git clone https://github.com/tuusuario/ecopulse-api.git
cd ecopulse-api

2. Instalar dependencias
npm install

3. Configurar variables de entorno

Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

OPENAI_API_KEY=tu_clave_de_openai_aqui
PORT=5000


🔑 Puedes obtener tu clave de API desde https://platform.openai.com/account/api-keys

▶️ Ejecución del servidor

Inicia el servidor con:

npm start


O, si usas nodemon para desarrollo:

npx nodemon index.js


Luego abre en tu navegador:
👉 http://localhost:5000

Deberías ver el mensaje:

Servidor funcionando 🚀

💬 Endpoint principal: /chat
Método: POST
URL: http://localhost:5000/chat
Headers:
{
  "Content-Type": "application/json"
}

Body (JSON):
{
  "message": "¿Qué son las energías renovables?",
  "history": [
    { "role": "user", "content": "Explícame sobre reciclaje." },
    { "role": "assistant", "content": "El reciclaje consiste en..." }
  ]
}

Descripción de parámetros
Campo	Tipo	Requerido	Descripción
message	string	✅	Mensaje actual del usuario
history	array	❌	Historial de conversación (últimos mensajes)
📡 Formato de respuesta (Streaming SSE)

El servidor envía los datos en formato Server-Sent Events (SSE), permitiendo que el cliente reciba texto progresivamente mientras el modelo responde.

Ejemplo de datos recibidos:

data: Hola, te contaré sobre las energías renovables...\n\n
data: Estas incluyen la solar, eólica, hidráulica...\n\n
data: [DONE]


Cuando se recibe data: [DONE], significa que la transmisión ha finalizado.

🧩 Estructura del proyecto
📂 ecopulse-api
 ├── 📄 index.js          # Código principal del servidor
 ├── 📄 package.json      # Configuración del proyecto
 ├── 📄 .env              # Variables de entorno (no se sube al repositorio)
 ├── 📄 .gitignore        # Archivos ignorados por git
 └── 📄 README.md         # Documentación del proyecto

🌍 Comportamiento del asistente

El asistente EcoPulse tiene el siguiente rol del sistema configurado:

“Eres un asistente experto en sostenibilidad y medio ambiente llamado EcoPulse.
Proporciona respuestas detalladas, estructuradas y educativas sobre temas como:

Sostenibilidad y medio ambiente

Cambio climático y energías renovables

Economía circular y reciclaje

Conservación de recursos naturales

Prácticas ecológicas

Usa un tono amigable pero profesional y presenta tus respuestas con claridad.”

🧠 Ejemplo de respuesta del modelo

Entrada:

{
  "message": "¿Qué puedo hacer para reducir mi huella de carbono?"
}


Respuesta (streaming):

data: 🌍 Reducir tu huella de carbono es una excelente meta.\n\n
data: Aquí tienes algunas prácticas útiles:\n
data: 1. Usa transporte público o bicicleta.\n
data: 2. Reduce el consumo de energía en casa.\n
data: 3. Opta por productos locales y reutilizables.\n\n
data: [DONE]

⚠️ Manejo de errores

Si falta el campo message en el body, se devuelve:

{ "error": "Falta el mensaje en la petición." }


Si ocurre un error con OpenAI, se envía por streaming:

data: Error: <mensaje del error>
data: [DONE]

📜 Licencia

Este proyecto está bajo la licencia MIT.
Puedes usarlo, modificarlo y distribuirlo libremente, siempre dando el crédito correspondiente.

💚 Autor

Desarrollado por [Tu Nombre o Equipo de Desarrollo]
🌐 Proyecto: EcoPulse – Educación y sostenibilidad impulsada por IA