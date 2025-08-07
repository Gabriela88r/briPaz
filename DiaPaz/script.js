// Objeto con preguntas y respuestas
const respuestas = {
       "Hola": "¡Hola! Estoy muy bien, gracias por preguntar. ¿Y tú?",
    "¿Cómo te llamas?": "Soy el chatbot, y estoy aquí para ayudarte a aprender sobre la paz y la democracia.",
    "¿Cuántos años tienes?": "No tengo edad, ¡soy solo un chatbot!",
    "¿De dónde eres?": "Soy un programa, así que no tengo un lugar específico, pero estoy aquí para ayudarte donde sea que estés.",
    "¿Puedo hacer cualquier pregunta?": "Claro, puedes preguntarme lo que quieras. Si no sé la respuesta, ¡te ayudaré a buscarla!",
    "¿Qué te gusta hacer?": "Me gusta ayudar a las personas a aprender cosas nuevas, como sobre la democracia y la paz.",
    "¿Tienes amigos?": "¡Sí! Tengo a todos los que interactúan conmigo. Cada conversación es una nueva amistad.",
    "¿Puedes contarme un chiste?": "¡Claro! ¿Por qué el libro de matemáticas se deprimió? Porque tenía demasiados problemas.",
    "¿Sabes cantar?": "No puedo cantar, pero puedo ayudarte a encontrar canciones para escuchar.",
    "¿Qué significa paz?": "La paz es cuando las personas viven juntas sin pelear y se respetan mutuamente.",
    "¿Cuál es tu comida favorita?": "¡No como! Pero, si pudiera, creo que me gustaría una pizza con mucho queso.",
    "¿Te gustan los animales?": "¡Sí! Los animales son increíbles. Algunos de ellos también nos enseñan sobre la paz y la armonía.",
    "¿Por qué es importante escuchar a los demás?": "Escuchar es importante porque así entendemos las ideas y sentimientos de otras personas. Nos ayuda a ser más amables y respetuosos.",
    "¿Qué es la amistad?": "La amistad es una relación especial donde las personas se cuidan y se apoyan mutuamente.",
    "¿Por qué es bueno ser amable?": "Ser amable ayuda a que todos se sientan felices y respetados. La amabilidad puede hacer que el mundo sea mejor.",
    "¿Qué es un robot?": "Un robot es una máquina que puede hacer tareas automáticamente. Yo soy un tipo de robot, pero de software, no de metal.",
    "¿Tienes familia?": "No tengo familia, pero siempre estoy aquí para ayudar a todos como una gran comunidad.",
    "¿Qué significa respeto?": "El respeto es tratar a los demás como te gustaría que te trataran a ti, con amabilidad y consideración.",
    "¿Puedo preguntarte algo de matemáticas?": "Claro, ¡puedes preguntarme sobre matemáticas! Intentaré ayudarte con lo que sé.",
    "¿Qué significa igualdad?": "La igualdad significa tratar a todas las personas con el mismo respeto y darles las mismas oportunidades, sin importar su raza, género o religión.",

    // Preguntas Relacionadas con la Democracia y la Paz
    "¿Qué es la democracia?": "La democracia es un sistema de gobierno donde todos los ciudadanos tienen derecho a votar y elegir a sus líderes.",
    "¿Por qué es importante la democracia?": "La democracia es importante porque da voz a las personas, permitiéndoles participar en las decisiones que afectan a su vida.",
    "¿Qué significa votar?": "Votar es el acto de elegir a las personas que tomarán decisiones importantes por todos en un país.",
    "¿Cómo se elige al presidente?": "El presidente se elige a través de una elección en la que las personas votan por el candidato que creen que será el mejor líder.",
    "¿Qué derechos tenemos en una democracia?": "En una democracia, tenemos derechos como la libertad de expresión, el derecho al voto y el derecho a la educación, entre otros.",
    "¿Qué es una constitución?": "La constitución es un conjunto de leyes fundamentales que establecen cómo debe funcionar un país.",
    "¿Qué significa ser un buen ciudadano?": "Ser un buen ciudadano significa respetar las leyes, ayudar a los demás y participar en la comunidad.",
    "¿Por qué debemos respetar a los demás?": "Respetar a los demás es fundamental para vivir en armonía, especialmente en una democracia, donde todos tienen derechos.",
    "¿Qué es la paz?": "La paz es vivir sin violencia, con respeto y armonía entre todas las personas.",
    "¿Qué podemos hacer para fomentar la paz?": "Podemos ser amables, resolver los problemas con diálogo y respetar a los demás para fomentar la paz.",
    "¿Qué son los derechos humanos?": "Los derechos humanos son los derechos que todas las personas deben tener por igual, como el derecho a vivir, a ser libre y a ser tratadas con dignidad.",
    "¿Por qué es importante la justicia?": "La justicia es importante porque asegura que todos reciban un trato justo, sin importar quiénes sean o de dónde vengan.",
    "¿Qué significa libertad?": "La libertad es el derecho de hacer lo que queramos, siempre y cuando no lastimemos a los demás.",
    "¿Cómo podemos contribuir a la paz mundial?": "Podemos contribuir siendo amables, resolviendo conflictos sin violencia y respetando a las personas de diferentes culturas y creencias.",
    "¿Qué significa ser tolerante?": "Ser tolerante significa aceptar y respetar las diferencias de los demás, como sus creencias, opiniones o costumbres.",
    "¿Qué es un conflicto?": "Un conflicto es un desacuerdo o una lucha entre personas o grupos debido a diferencias de opiniones o intereses.",
    "¿Qué podemos hacer para resolver conflictos sin violencia?": "Podemos resolver conflictos mediante el diálogo, buscando soluciones que respeten las opiniones de todos.",
    "¿Por qué es importante el voto?": "El voto es importante porque es una manera de influir en las decisiones del gobierno y elegir a las personas que nos representarán.",
    "¿Qué es una elección?": "Una elección es un proceso en el que las personas eligen a sus líderes o toman decisiones sobre temas importantes.",
    "¿Cómo puedo ser un buen líder?": "Ser un buen líder significa escuchar a los demás, tomar decisiones justas y trabajar para mejorar la vida de las personas.",
    "¿Qué significa democracia participativa?": "La democracia participativa es un tipo de democracia donde las personas no solo votan, sino que también tienen voz en las decisiones diarias del gobierno.",
    "¿Qué es un partido político?": "Un partido político es un grupo de personas que tienen ideas similares sobre cómo debe gobernarse un país.",
    "¿Por qué la democracia es mejor que otras formas de gobierno?": "La democracia es mejor porque permite que todas las personas tengan voz y voto en las decisiones, y asegura que los líderes sean elegidos por el pueblo.",
    "¿Qué significa la palabra 'justicia'?": "Justicia significa dar a cada persona lo que le corresponde, basándose en la equidad y el respeto.",
    "¿Por qué la tolerancia es importante para la paz?": "La tolerancia es importante porque nos ayuda a aceptar las diferencias entre las personas y a vivir en armonía, sin conflictos.",
    "¿Qué es la paz social?": "La paz social es cuando las personas viven juntas en armonía, sin conflictos, y se respetan mutuamente en la sociedad.",
    "¿Qué acciones pueden promover la paz?": "Escuchar a los demás, ser amables, ayudar a quienes lo necesitan y buscar soluciones pacíficas a los problemas.",
    "¿Qué significa igualdad de derechos?": "La igualdad de derechos significa que todas las personas deben ser tratadas con el mismo respeto y tener las mismas oportunidades, sin importar su origen, género o religión."

};

// Función para generar la respuesta del chatbot
function getChatbotResponse(userText) {
    const respuesta = respuestas[userText];
    return respuesta || "Lo siento, no entiendo esa pregunta. ¿Puedes preguntarme otra cosa sobre democracia o paz?";
}

// Función para mostrar opciones rápidas
function mostrarOpcionesRapidas() {
    const opciones = [
        "¿Qué es la democracia?", 
        "¿Por qué es importante la democracia?", 
        "¿Qué es la paz?", 
       
        "¿Qué significa votar?", 
        "¿Qué significa libertad?"
    ];

    const quickOptionsContainer = document.getElementById("quickOptions");
    quickOptionsContainer.innerHTML = ''; // Limpiar las opciones anteriores

    // Crear botones para cada opción rápida
    opciones.forEach(opcion => {
        const button = document.createElement("button");
        button.textContent = opcion;
        button.addEventListener("click", () => {
            enviarMensaje(opcion);
        });
        quickOptionsContainer.appendChild(button);
    });
}

// Función para manejar el mensaje del usuario y la respuesta
function enviarMensaje(userText) {
    const chatMessages = document.getElementById("chatbotMessages");
    const userMessage = document.createElement("div");
    userMessage.innerHTML = `<strong>Tú:</strong> ${userText}`;
    chatMessages.appendChild(userMessage);

    // Respuesta del chatbot
    const botResponse = getChatbotResponse(userText);
    const botMessage = document.createElement("div");
    botMessage.innerHTML = `<strong>Chatbot:</strong> ${botResponse}`;
    chatMessages.appendChild(botMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Mostrar las opciones rápidas nuevamente
    mostrarOpcionesRapidas();
}

// Función para abrir el chat
const openChatBtn = document.getElementById("openChatBtn");
openChatBtn.addEventListener("click", () => {
    document.getElementById("chatModal").style.display = "block";
    mostrarOpcionesRapidas(); // Mostrar las opciones rápidas al abrir el chat
});

// Función para cerrar el chat
const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", () => {
    document.getElementById("chatModal").style.display = "none";
});
// Función para reproducir o detener la canción
const playSongBtn = document.getElementById("playSongBtn");
const songAudio = document.getElementById("songAudio");

playSongBtn.addEventListener("click", () => {
    // Si la canción está en pausa o no ha comenzado a reproducirse
    if (songAudio.paused) {
        songAudio.play();  // Reproducir la canción
        playSongBtn.textContent = "Parar Reproducción";  // Cambiar el texto del botón
    } else {
        songAudio.pause();  // Detener la canción
        songAudio.currentTime = 0;  // Reiniciar la canción al principio
        playSongBtn.textContent = "Reproducir Canción";  // Cambiar el texto del botón
    }
});
