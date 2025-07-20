/* Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones: (tabla ilustrada)
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.
*/

// creo el objeto Persona
class Persona {
  // propiedades encapsuladascon "#" para que no se puedan modificar desde afuera
  #nombre;
  #edad;
  #dni;
  #sexo;
  #peso;
  #altura;
  #anioNacimiento;

  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.#nombre = nombre;
    this.#edad = parseInt(edad);
    this.#dni = dni;
    this.#sexo = sexo.toUpperCase();
    this.#peso = parseFloat(peso);
    this.#altura = parseFloat(altura);
    this.#anioNacimiento = parseInt(anioNacimiento);
  }

  // Método para mostrar generación
  mostrarGeneracion() {
    const anio = this.#anioNacimiento;
    let generacion = "";
    let rasgo = "";

    if (anio >= 1930 && anio <= 1948) {
      generacion = "Silent Generation";
      rasgo = "Austeridad";
    } else if (anio >= 1949 && anio <= 1968) {
      generacion = "Baby Boom";
      rasgo = "Ambición";
    } else if (anio >= 1969 && anio <= 1980) {
      generacion = "Generación X";
      rasgo = "Obsesión por el éxito";
    } else if (anio >= 1981 && anio <= 1993) {
      generacion = "Generación Y (Millennials)";
      rasgo = "Frustración";
    } else if (anio >= 1994 && anio <= 2010) {
      generacion = "Generación Z";
      rasgo = "Irreverencia";
    } else {
      generacion = "generación sin registro";
      rasgo = "No se tiene información de esta generación";
    }
    alert(
      `${
        this.#nombre
      } pertenece a la ${generacion} y su rasgo característico es: ${rasgo}.`
    );
  }

  // Método para saber si es mayor de edad
  esMayorDeEdad() {
    if (this.#edad >= 18) {
      alert(`${this.#nombre} es mayor de edad.`);
    } else {
      alert(`${this.#nombre} NO es mayor de edad.`);
    }
  }

  // Método para mostrar todos los datos de la persona
  mostrarDatos() {
    alert(`
      Nombre: ${this.#nombre}
      Edad: ${this.#edad}
      DNI: ${this.#dni}
      Sexo: ${this.#sexo}
      Peso: ${this.#peso} [kg]
      Altura: ${this.#altura} [m]
      Año de nacimiento: ${this.#anioNacimiento}
    `);
  }
}

// Creo variable para guardar el objeto persona que se va a crear
let persona = null;

// Asocio EVENTO al formulario para que se pueda crear el objeto Persona
const formulario = document.getElementById("formPersona");
formulario.addEventListener("submit", function (e) {
  e.preventDefault(); // para que no se actualice y vacíe constantemente el formulario
  const nombre = document.getElementById("formNombre").value; // variable -> busco con byID (evento) y devuelve el valor
  const edad = document.getElementById("formEdad").value;
  const dni = document.getElementById("formDNI").value;
  const sexo = document.getElementById("formSexo").value;
  const peso = document.getElementById("formPeso").value;
  const altura = document.getElementById("formAltura").value;
  const anioNacimiento = document.getElementById("formAnioNacimiento").value;

  persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento); // muestro instancia de persona

  alert("✅ Persona creada con éxito.");
  formulario.reset();
});

// Eventos para los botones que llaman a los métodos
const btnGeneracion = document.getElementById("btnGeneracion");
btnGeneracion.addEventListener("click", () => {
  if (persona) {
    persona.mostrarGeneracion();
  } else {
    alert("Primero debés crear una persona.");
  }
});

const btnMayorEdad = document.getElementById("btnMayorEdad");
btnMayorEdad.addEventListener("click", () => {
  if (persona) {
    persona.esMayorDeEdad();
  } else {
    alert("Primero debés crear una persona.");
  }
});

const btnMostrarDatos = document.getElementById("btnMostrarDatos");
btnMostrarDatos.addEventListener("click", () => {
  if (persona) {
    persona.mostrarDatos();
  } else {
    alert("Primero debés crear una persona.");
  }
});