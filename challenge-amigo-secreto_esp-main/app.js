// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  // Capturar el valor del input
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  // Validar que el campo no esté vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Agregar el nombre al array
  amigos.push(nombre);

  // Limpiar el campo de entrada
  input.value = "";

  // Actualizar la lista visible
  mostrarLista();
}

// Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
  let lista = document.getElementById("listaAmigos");

  // Limpiar la lista antes de agregar
  lista.innerHTML = "";

  // Recorrer el array y crear elementos <li>
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Función para sortear un amigo de forma aleatoria
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear. Por favor, añade al menos un nombre.");
    return;
  }

  // Número aleatorio entre 0 y la longitud del array - 1
  let indice = Math.floor(Math.random() * amigos.length);
  let amigoSeleccionado = amigos[indice];

  // Mostrar resultado
  let resultado = document.getElementById("resultado");
  resultado.textContent = `El amigo secreto es: ${amigoSeleccionado}`;
}
