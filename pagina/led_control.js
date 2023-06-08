// Definir las URL de las peticiones para encender y apagar los LEDs en el Arduino
const led1OnURL = 'http://192.168.0.18/led1-on';
const led1OffURL = 'http://192.168.0.18/led1-off';
const led2OnURL = 'http://192.168.0.18/led2-on';
const led2OffURL = 'http://192.168.0.18/led2-off';
const led3OnURL = 'http://192.168.0.18/led3-on';
const led3OffURL = 'http://192.168.0.18/led3-off';
const led4OnURL = 'http://192.168.0.18/led4-on';
const led4OffURL = 'http://192.168.0.18/led4-off';
const led5OnURL = 'http://192.168.0.18/led5-on';
const led5OffURL = 'http://192.168.0.18/led5-off';


// Obtener los botones de encendido y apagado de los LEDs
const led1OnButton = document.getElementById('led1-on');
const led1OffButton = document.getElementById('led1-off');
const led2OnButton = document.getElementById('led2-on');
const led2OffButton = document.getElementById('led2-off');
const led3OnButton = document.getElementById('led3-on');
const led3OffButton = document.getElementById('led3-off');
const led4OnButton = document.getElementById('led4-on');
const led4OffButton = document.getElementById('led4-off');
const led5OnButton = document.getElementById('led5-on');
const led5OffButton = document.getElementById('led5-off');


// Agregar eventos de clic a los botones de encendido y apagado
led1OnButton.addEventListener('click', () => sendRequest(led1OnURL));
led1OffButton.addEventListener('click', () => sendRequest(led1OffURL));
led2OnButton.addEventListener('click', () => sendRequest(led2OnURL));
led2OffButton.addEventListener('click', () => sendRequest(led2OffURL));
led3OnButton.addEventListener('click', () => sendRequest(led3OnURL));
led3OffButton.addEventListener('click', () => sendRequest(led3OffURL));
led4OnButton.addEventListener('click', () => sendRequest(led4OnURL));
led4OffButton.addEventListener('click', () => sendRequest(led4OffURL));
led5OnButton.addEventListener('click', () => sendRequest(led5OnURL));
led5OffButton.addEventListener('click', () => sendRequest(led5OffURL));


// Función para enviar una petición HTTP GET al Arduino
function sendRequest(url) {
  fetch(url)
    .then(response => {
      if (response.ok) {
        console.log('Petición enviada correctamente');
      } else {
        console.error('Error al enviar la petición');
      }
    })
    .catch(error => {
      console.error('Error en la conexión:', error);
    });
}
