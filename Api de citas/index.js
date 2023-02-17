//Funcion que tomara la cita de manera aleatoria
function tomarcita()
  {
                  
const cita = document.querySelector
("#cita");
const autor = document.querySelector
("#autor");
const dateAdded = document.querySelector
("#dateAdded");
const dateModified = document.querySelector
("#dateModified");
const btn = document.querySelector
("#btn");

  //Metodo de busqueda "fetch", este metodo llamara de forma directa a la pagina que genera la cita de maner aleatoria con uuna api
   fetch("http://api.quotable.io/random")

   //La promesa
          .then(llama => {return llama.json()})

          .then (data => {
            //En la constante "cita" mandara la informacion del contenido de la cita que aparece por el parametro "content"
             cita.innerHTML = `"${data.content}"`;
             //En la constante "autor" manda a llamar el autor de la cita que aparece por el parametro "author"
              autor.innerHTML = data.author;
              dateAdded.innerHTML = data.dateAdded;
              dateModified.innerHTML = data.dateModified;
          })
          .catch(error => console.log("Hubo un error"))
    }