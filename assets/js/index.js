const cargarTarea = [
  {
    id: Math.round(Math.random() * 400),
    nombre: "limpiar Casa",
    checkbox: false,
  },
  {
    id: Math.round(Math.random() * 400),
    nombre: "comprar Carne",
    checkbox: false,
  },
  {
    id: Math.round(Math.random() * 400),
    nombre: "Asear Casa",
    checkbox: false,
  },
];

// variables a utilizar
const listaDeTareas = document.querySelector("#llenadoTareas");
const tareaInput = document.querySelector("#txtIngreso");
const btnAgregar = document.querySelector("#btnAgregar");
const tareasRealizadas = document.querySelector("#contadorRealizadas");
const totalTareas = document.querySelector("#contadorTotal");
const checkbox = document.querySelector("#checkbox");

// cargar la tarea por su ID
// renderTareas();

//función de borrar
function borrar(id) {
  const index = cargarTarea.findIndex((ele) => ele.id === id);
  cargarTarea.splice(index, 1);
  renderTareas();
}

//escucha de botón agregar

btnAgregar.addEventListener("click", () => {
  /* Agregamos la nueva tarea al arreglo con un objeto que incluye un id y el nombre */
  const nuevoTarea = {
    id: Math.round(Math.random() * 400),
    nombre: tareaInput.value,
    checkbox: false,
  };

  cargarTarea.push(nuevoTarea);
  tareaInput.value = "";
  renderTareas();
});

// función  para mostrar las tareas en el HTML
function renderTareas() {
  let html = "";
  for (let tarea of cargarTarea) {
    html += `<li>${tarea.id} ${tarea.nombre} 
    <input type="checkbox" class="check" id="check${tarea.id}" onclick="chequeo()"/>
    <button onclick="borrar(${tarea.id})">Eliminar</button></li>`;
  }
  listaDeTareas.innerHTML = html;
  totalTareas.textContent = `${cargarTarea.length}`;
}

function chequeo() {
  let selcheck = document.querySelectorAll(".check");
  const checkArray = Array.from(selcheck);
  const filterCheck = checkArray.filter((x) => x.checked == true);
  contadorRealizadas.innerHTML = filterCheck.length;
}
