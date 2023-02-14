function Leer()
{
    const ciudad = document.getElementById("input").value;
    const llave = '';
    const pagina_api = 'http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${llave}&units=metric'
    buscar(pagina_api);

    function buscar(pagina_api)
    {
        fetch(pagina_api)
      .then(data => {
        return data.json()
      }).then(resultado=>{
            console.log(resultado);

            const {Search=[]} = resultado;
            
            console.log(Search);
            document.getElementById("lista").innerHTML='';

            Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                         <img width='100%' src=${p.Poster} alt="No hay poster"></img>
            </div>`;
            })
      });
    }
}