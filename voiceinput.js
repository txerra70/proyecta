// Verificar si el navegador soporta el reconocimiento de voz
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (window.SpeechRecognition) {
    let recognition = new SpeechRecognition();
    recognition.lang = 'es-ES'; // Configurar el idioma a español
    recognition.interimResults = false;

    // Evento al iniciar el reconocimiento de voz
    document.getElementById('startVoiceInput').addEventListener('click', () => {
        recognition.start();
    });

    // Manejar el resultado del reconocimiento de voz
    recognition.addEventListener('result', (e) => {
        let voiceText = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');

        document.getElementById('cityInput').value = voiceText; // Asignar el texto reconocido al campo de entrada
        showData(); // Llamar a la función para mostrar el clima
    });

    recognition.addEventListener('end', recognition.start); // Reiniciar el reconocimiento de voz cuando termine
} else {
    console.log("Tu navegador no soporta el reconocimiento de voz");
}
