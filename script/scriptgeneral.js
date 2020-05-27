// Variables definidas de manera general
let apiKey = "oR2Okp0NR1mAQNHe6NjvMh0nzcpssIQ6";
let endpoint = 'https://api.giphy.com/v1/gifs/trending?' + '&api_key=' + apiKey;
let lol = "riotgames";
let digimon = "digimon";
let poke = "pokemon";
let overwatch = "overwatch";
let cat = "Cat";
let anime = "anime";
let Sport = "Sport";
let textoBusqueda = document.getElementById("textoBusqueda");
let busquedaSearch = document.getElementById("search").value.trim();
let from = document.getElementById("from");
let buscarbtn = document.getElementById("btn-buscar")
let input = document.getElementById("search");
let buscarDespegable = document.getElementById("inputSug");
let dashed = document.getElementById("dashed");
let pagestyle = document.getElementById("pagestyle");
let temas = document.getElementsByClassName("temas")[0];
let img = document.getElementById("logo");
let lupa = document.getElementById("lupa");
let body = document.getElementById('body');
let bodyclass = localStorage.getItem('theme');



  // Determino una serie de acontecimientos para la modificacion de elemntos segun el tema y para que inicie segun tema elegido.
document.addEventListener("DOMContentLoaded", async () => {
    let themeActivado = localStorage.getItem('theme');
    let activateThemes = (bodyclass) => {
        
        if (bodyclass == 'dark') {
            body.classList.add("dark");
            body.classList.remove("day");
            img.src = "img/gifOF_logo_dark.png";
            lupa.src = "img/CombinedShape.svg"; 
             } else if (bodyclass == 'day') {
                body.classList.add("days");
                body.classList.remove("dark");
                  } else {
                body.classList.add('dark')
                  }
    
        if(themeActivado === null){ 
           pagestyle.href = "css/estilos.css";
            }
    
                    
        if(themeActivado === "day"){ 
           pagestyle.href = "css/estilos.css";
               from.addEventListener('input', () => {
                if (input.value.length > 0){
                        lupa.src = "img/lupa.svg";           
                    } else {
                            lupa.src = "img/lupa_inactive.svg";
         }
    })
 }
    
    
    
        if(themeActivado === "dark") { 
           pagestyle.href = "css/dark.css";
            
            from.addEventListener('input', () => {
                if (input.value.length > 0){
                buscarbtn.style.backgroundColor = "#EE3EFE";
                lupa.src = "img/lupa_light.svg";
                buscarbtn.style.color = "#ffffff";
                } else {
                    buscarbtn.style.color = "#808080";
                    buscarbtn.style.backgroundColor = "#b4b4b4";
                    lupa.src = "img/CombinedShape.svg"; 
                 
                    }
                 })   
                 
        }
    
         }       
        let busquedas = obtenerBusquedas();
        busquedas.forEach((busqueda)=>{
        desplegarBusquedas(busqueda)
        })
    activateThemes(bodyclass)
    })

    
    







    //// BUSCANDO LAS PALABRAS CON EL BUSCADOR
fetch(endpoint).then(res => {
    return res.json();
}).then(res => {
    console.log(res.data);

    for (let i = 0; i < res.data.length; i++ ){
       let figura = document.getElementById("primera-fila");
        let contenedorimg = document.createElement("div");
        let contenedortitulo = document.createElement("div");
       let img = document.createElement("img");
       let titulo = document.createElement("h4");
  

            img.src = res.data[i].images.downsized.url;
            titulo.innerText = res.data[i].title;
            figura.appendChild(contenedorimg);
            // elemento.className
            contenedorimg.appendChild(img);
            contenedorimg.appendChild(contenedortitulo);
            contenedortitulo.appendChild(titulo);
            contenedorimg.setAttribute("width", "270px");
           img.setAttribute("width", "270px");
           img.setAttribute("height", "270px");
           contenedorimg.classList.add('conteIMG');
           contenedortitulo.classList.add('contetitulo');
           titulo.style.display = "none";



           contenedortitulo.style.display = "none";
             titulo.style.display = "none";

           img.onmouseover = function() {
              
            titulo.style.color = "#ffffff";
            titulo.style.display = "block";
            contenedortitulo.style.position = "absolute";

            contenedortitulo.style.top = "252px";
            titulo.style.position = "absolute";
            titulo.style.top = "4px";
            contenedortitulo.style.display = "block";

        };

       
        
        img.onmouseout = function() {
            contenedortitulo.style.display = "none";
            titulo.style.display = "none";
        
        };





          }
    return json;
})
.catch(error => {
    return error;
});










//// BUSCANDO LAS PALABRAS CON EL BUSCADOR

function conectarGiff(search) {

    if (search == undefined) {
        var str = document.getElementById("search").value
    }
    const endpoint = fetch('https://api.giphy.com/v1/gifs/search?q=' + str + '&api_key=' + apiKey )
    .then(response => {
        return response.json();
    }).then(contenido => {
        console.log(contenido.data) ;
        console.log("META", contenido.meta);
        const vaciar = document.getElementById("primera-fila");
        vaciar.innerHTML = "";
        for (let i = 0; i < contenido.data.length; i++){

            let figura = document.getElementById("primera-fila");
            let contenedorimg = document.createElement("div");
            let contenedortitulo = document.createElement("div");
            let img = document.createElement("img");
            let titulo = document.createElement("h4");
      
    
                img.src = contenido.data[i].images.downsized.url;
                titulo.innerText = contenido.data[i].title;
                figura.appendChild(contenedorimg);
                // elemento.className
                contenedorimg.appendChild(img);
                contenedorimg.appendChild(contenedortitulo);
                contenedortitulo.appendChild(titulo);
                contenedorimg.setAttribute("width", "270px");
               img.setAttribute("width", "270px");
               img.setAttribute("height", "270px");
               contenedorimg.classList.add('conteIMG');
               contenedortitulo.classList.add('contetitulo');
               titulo.style.display = "none";
    
    
    
               contenedortitulo.style.display = "none";
                 titulo.style.display = "none";
    
               img.onmouseover = function() {
                  
                titulo.style.color = "#ffffff";
                titulo.style.display = "block";
                contenedortitulo.style.position = "absolute";
    
                contenedortitulo.style.top = "252px";
                titulo.style.position = "absolute";
                titulo.style.top = "4px";
                contenedortitulo.style.display = "block";
    
            };
    
           
            
            img.onmouseout = function() {
                contenedortitulo.style.display = "none";
                titulo.style.display = "none";
            
            };
    



            document.getElementById("textoBusqueda").innerHTML =  str;

         }
         agregarBusquedas(str);
         desplegarBusquedas(str);
        return contenido;
    })
    .catch(error => {
        return error;
    });
return endpoint;
}





//// Traigo 1 imagen apra la sugerencia
let endpointJon = 'https://api.giphy.com/v1/gifs/search?q=' + lol + '&api_key=' + apiKey;
fetch(endpointJon).then(lol => {
    return lol.json();
})
.then(lol => {
    console.log(lol.data);
       let titulo = document.getElementById("tituloimg");
       let imglol = document.createElement("img")
           imglol.src = lol.data[1].images.downsized.url;
           titulo.appendChild(imglol);
           imglol.setAttribute("width", "265");
           imglol.setAttribute("height", "273px")
    return json;
})
.catch(error => {
    return error;
});




//  Buscador para riotgames
 function buscarRiot(){
     const endpointJon = 'https://api.giphy.com/v1/gifs/search?q=' + lol + '&api_key=' + apiKey;
     const vaciar = document.getElementById("primera-fila");
     vaciar.innerHTML = "";

     fetch(endpointJon).then(lol => {
         return lol.json();
     }).then( lol => {
             console.log(lol.data);
             for (let i = 0; i < lol.data.length; i++){
                let figura = document.getElementById("primera-fila");
                let contenedorimg = document.createElement("div");
                let contenedortitulo = document.createElement("div");
                let img = document.createElement("img");
                let titulo = document.createElement("h4");
          
        
                    img.src = lol.data[i].images.downsized.url;
                    titulo.innerText = lol.data[i].title;
                    figura.appendChild(contenedorimg);
                    // elemento.className
                    contenedorimg.appendChild(img);
                    contenedorimg.appendChild(contenedortitulo);
                    contenedortitulo.appendChild(titulo);
                    contenedorimg.setAttribute("width", "270px");
                    img.setAttribute("width", "270px");
                    img.setAttribute("height", "270px");
                    contenedorimg.classList.add('conteIMG');
                    contenedortitulo.classList.add('contetitulo');
                    titulo.style.display = "none";
        
        
        
                   contenedortitulo.style.display = "none";
                     titulo.style.display = "none";
        
                   img.onmouseover = function() {
                      
                    titulo.style.color = "#ffffff";
                    titulo.style.display = "block";
                    contenedortitulo.style.position = "absolute";
        
                    contenedortitulo.style.top = "252px";
                    titulo.style.position = "absolute";
                    titulo.style.top = "4px";
                    contenedortitulo.style.display = "block";
        
                };
        
               
                
                img.onmouseout = function() {
                    contenedortitulo.style.display = "none";
                    titulo.style.display = "none";
                
                };
        
                    }
                         return buscarTendencias;
                     })
                     .catch(error => {
                         return error;
                     });
 };















// Traigo 1 imagen apra la sugerencia
let endpointdigi = 'https://api.giphy.com/v1/gifs/search?q=' + digimon + '&api_key=' + apiKey;
fetch(endpointdigi).then(digi => {
    return digi.json();
})
.then(digi => {
    console.log(digi.data);
           let titulo = document.getElementById("tituloimgDigi");
           let imgdigi = document.createElement("img")
           imgdigi.src = digi.data[1].images.downsized.url;
           titulo.appendChild(imgdigi);
           imgdigi.setAttribute("width", "265px");
           imgdigi.setAttribute("height", "273px")
    return json;


})
.catch(error => {
    return error;
});



//  Buscador para digimon
 function buscarDigimon(){
     const endpoint = 'https://api.giphy.com/v1/gifs/search?q=' + digimon + '&api_key=' + apiKey;
     const vaciar = document.getElementById("primera-fila");
     vaciar.innerHTML = "";

     fetch(endpoint).then(digimon => {
         return digimon.json();
     }).then( digimon => {
             console.log(digimon.data);
             for (let i = 0; i < digimon.data.length; i++){
                let figura = document.getElementById("primera-fila");
                let contenedorimg = document.createElement("div");
                let contenedortitulo = document.createElement("div");
                let img = document.createElement("img");
                let titulo = document.createElement("h4");
          
        
                    img.src = digimon.data[i].images.downsized.url;
                    titulo.innerText = digimon.data[i].title;
                    figura.appendChild(contenedorimg);
                    // elemento.className
                    contenedorimg.appendChild(img);
                    contenedorimg.appendChild(contenedortitulo);
                    contenedortitulo.appendChild(titulo);
                    contenedorimg.setAttribute("width", "270px");
                    img.setAttribute("width", "270px");
                    img.setAttribute("height", "270px");
                    contenedorimg.classList.add('conteIMG');
                    contenedortitulo.classList.add('contetitulo');
                    titulo.style.display = "none";
        
        
        
                   contenedortitulo.style.display = "none";
                     titulo.style.display = "none";
        
                   img.onmouseover = function() {
                      
                    titulo.style.color = "#ffffff";
                    titulo.style.display = "block";
                    contenedortitulo.style.position = "absolute";
        
                    contenedortitulo.style.top = "252px";
                    titulo.style.position = "absolute";
                    titulo.style.top = "4px";
                    contenedortitulo.style.display = "block";
        
                };
        
               
                
                img.onmouseout = function() {
                    contenedortitulo.style.display = "none";
                    titulo.style.display = "none";
                
                };
        
    
                    }
             return buscarDigimon;
                 })
                     .catch(error => {
                         return error;
                     });
 };







 // Traigo 1 imagen apra la sugerencia
 let endpointpoke = 'https://api.giphy.com/v1/gifs/search?q=' + poke + '&api_key=' + apiKey;
 fetch(endpointpoke).then(poke => {
     return poke.json();
 })
 .then(poke => {
     console.log(poke.data);
           let titulo = document.getElementById("tituloimgPoke");
           let imgpoke = document.createElement("img")
            imgpoke.src = poke.data[1].images.downsized.url;
            titulo.appendChild(imgpoke);
            imgpoke.setAttribute("width", "265px");
            imgpoke.setAttribute("height", "273px")
     return json;
 })
 .catch(error => {
     return error;
 });






//  Buscador para pokemon
 function buscarPokemon(){
     const endpoint = 'https://api.giphy.com/v1/gifs/search?q=' + poke + '&api_key=' + apiKey;
     const vaciar = document.getElementById("primera-fila");
     vaciar.innerHTML = "";

     fetch(endpoint).then(pokemon => {
         return pokemon.json();
     }).then( pokemon => {

             console.log(pokemon.data);
             for (i = 0; i < pokemon.data.length; i++){
                let figura = document.getElementById("primera-fila");
                let contenedorimg = document.createElement("div");
                let contenedortitulo = document.createElement("div");
                let img = document.createElement("img");
                let titulo = document.createElement("h4");
          
        
                    img.src = pokemon.data[i].images.downsized.url;
                    titulo.innerText = pokemon.data[i].title;
                    figura.appendChild(contenedorimg);
                    // elemento.className
                    contenedorimg.appendChild(img);
                    contenedorimg.appendChild(contenedortitulo);
                    contenedortitulo.appendChild(titulo);
                    contenedorimg.setAttribute("width", "270px");
                    img.setAttribute("width", "270px");
                    img.setAttribute("height", "270px");
                    contenedorimg.classList.add('conteIMG');
                    contenedortitulo.classList.add('contetitulo');
                    titulo.style.display = "none";
        
        
        
                   contenedortitulo.style.display = "none";
                     titulo.style.display = "none";
        
                   img.onmouseover = function() {
                      
                    titulo.style.color = "#ffffff";
                    titulo.style.display = "block";
                    contenedortitulo.style.position = "absolute";
        
                    contenedortitulo.style.top = "252px";
                    titulo.style.position = "absolute";
                    titulo.style.top = "4px";
                    contenedortitulo.style.display = "block";
        
                };
        
               
                
                img.onmouseout = function() {
                    contenedortitulo.style.display = "none";
                    titulo.style.display = "none";
                
                };
            }
                         return buscarPokemon;
                     })
                     .catch(error => {
                         return error;
                     });
                 }







   
// Traigo 1 imagen apra la sugerencia
let endpointover = 'https://api.giphy.com/v1/gifs/search?q=' + overwatch + '&api_key=' + apiKey;
fetch(endpointover).then(overwatch => {
      return overwatch.json();
    })
         .then(overwatch => {
             console.log(overwatch.data);
 //    let figura = document.getElementById("primera-fila");
            let titulo = document.getElementById("tituloimgOver");
            let imgoverwatch = document.createElement("img")
            imgoverwatch.src = overwatch.data[1].images.downsized.url;
            titulo.appendChild(imgoverwatch);
            imgoverwatch.setAttribute("width", "265px");
            imgoverwatch.setAttribute("height", "273px")
         return json;
    })
        .catch(error => {
          return error;
          });







// Funcion para la busqueda de overwatch
function buscaroverwatch(){
    const endpoint = 'https://api.giphy.com/v1/gifs/search?q=' + overwatch + '&api_key=' + apiKey;
    const vaciar = document.getElementById("primera-fila");
    vaciar.innerHTML = "";


        fetch(endpoint).then(overwatch => {
        return overwatch.json();
        }).then( overwatch => {
            console.log(overwatch.data);
            for (i = 0; i < overwatch.data.length; i++){
                let figura = document.getElementById("primera-fila");
                let contenedorimg = document.createElement("div");
                let contenedortitulo = document.createElement("div");
                let img = document.createElement("img");
                let titulo = document.createElement("h4");
          
        
                    img.src = overwatch.data[i].images.downsized.url;
                    titulo.innerText = overwatch.data[i].title;
                    figura.appendChild(contenedorimg);
                    // elemento.className
                    contenedorimg.appendChild(img);
                    contenedorimg.appendChild(contenedortitulo);
                    contenedortitulo.appendChild(titulo);
                    contenedorimg.setAttribute("width", "270px");
                    img.setAttribute("width", "270px");
                    img.setAttribute("height", "270px");
                    contenedorimg.classList.add('conteIMG');
                    contenedortitulo.classList.add('contetitulo');
                    titulo.style.display = "none";
        
        
        
                   contenedortitulo.style.display = "none";
                     titulo.style.display = "none";
        
                   img.onmouseover = function() {
                      
                    titulo.style.color = "#ffffff";
                    titulo.style.display = "block";
                    contenedortitulo.style.position = "absolute";
        
                    contenedortitulo.style.top = "252px";
                    titulo.style.position = "absolute";
                    titulo.style.top = "4px";
                    contenedortitulo.style.display = "block";
        
                };
        
               
                
                img.onmouseout = function() {
                    contenedortitulo.style.display = "none";
                    titulo.style.display = "none";
                
                };
            
        }
return buscaroverwatch;
 })
  .catch(error => {
     return error;
        });
 }









// Funcion para la busqueda de la primera sugerencia
function SugerenciaUno(){
const endpoint = 'https://api.giphy.com/v1/gifs/search?q=' + cat + '&api_key=' + apiKey;
const vaciar = document.getElementById("primera-fila");
 vaciar.innerHTML = "";
                
                
    fetch(endpoint).then(cat => {
        return cat.json();
    }).then( cat => {
          console.log(cat.data);
            for (i = 0; i < cat.data.length; i++){

                let figura = document.getElementById("primera-fila");
                let contenedorimg = document.createElement("div");
                let contenedortitulo = document.createElement("div");
                let img = document.createElement("img");
                let titulo = document.createElement("h4");
          
        
                    img.src = cat.data[i].images.downsized.url;
                    titulo.innerText = cat.data[i].title;
                    figura.appendChild(contenedorimg);
                    // elemento.className
                    contenedorimg.appendChild(img);
                    contenedorimg.appendChild(contenedortitulo);
                    contenedortitulo.appendChild(titulo);
                    contenedorimg.setAttribute("width", "270px");
                    img.setAttribute("width", "270px");
                    img.setAttribute("height", "270px");
                    contenedorimg.classList.add('conteIMG');
                    contenedortitulo.classList.add('contetitulo');
                    titulo.style.display = "none";
        
        
        
                   contenedortitulo.style.display = "none";
                     titulo.style.display = "none";
        
                   img.onmouseover = function() {
                      
                    titulo.style.color = "#ffffff";
                    titulo.style.display = "block";
                    contenedortitulo.style.position = "absolute";
        
                    contenedortitulo.style.top = "252px";
                    titulo.style.position = "absolute";
                    titulo.style.top = "4px";
                    contenedortitulo.style.display = "block";
        
                };
        
               
                
                img.onmouseout = function() {
                    contenedortitulo.style.display = "none";
                    titulo.style.display = "none";
                
                };
                document.getElementById("textoBusqueda").innerHTML =  "Cat";
            textoBusqueda.scrollIntoView()
        }
return SugerenciaUno;
    })
.catch(error => {
return error;
    });
}






// Funcion para la busqueda de la segunda sugerencia
function SugerenciaDos(){
const endpoint = 'https://api.giphy.com/v1/gifs/search?q=' + anime + '&api_key=' + apiKey;
const vaciar = document.getElementById("primera-fila");
vaciar.innerHTML = "";
                                
                                
    fetch(endpoint).then(anime => {
        return anime.json();
    }).then( anime => {
                                
        console.log(anime.data);
        for (i = 0; i < anime.data.length; i++){
            let figura = document.getElementById("primera-fila");
            let contenedorimg = document.createElement("div");
            let contenedortitulo = document.createElement("div");
            let img = document.createElement("img");
            let titulo = document.createElement("h4");
      
    
                img.src = anime.data[i].images.downsized.url;
                titulo.innerText = anime.data[i].title;
                figura.appendChild(contenedorimg);
                // elemento.className
                contenedorimg.appendChild(img);
                contenedorimg.appendChild(contenedortitulo);
                contenedortitulo.appendChild(titulo);
                contenedorimg.setAttribute("width", "270px");
                img.setAttribute("width", "270px");
                img.setAttribute("height", "270px");
                contenedorimg.classList.add('conteIMG');
                contenedortitulo.classList.add('contetitulo');
                titulo.style.display = "none";
    
    
    
               contenedortitulo.style.display = "none";
                 titulo.style.display = "none";
    
               img.onmouseover = function() {
                  
                titulo.style.color = "#ffffff";
                titulo.style.display = "block";
                contenedortitulo.style.position = "absolute";
    
                contenedortitulo.style.top = "252px";
                titulo.style.position = "absolute";
                titulo.style.top = "4px";
                contenedortitulo.style.display = "block";
    
            };
    
           
            
            img.onmouseout = function() {
                contenedortitulo.style.display = "none";
                titulo.style.display = "none";
            
            };
        document.getElementById("textoBusqueda").innerHTML =  "Anime";
        textoBusqueda.scrollIntoView()
    }
         return SugerenciaDos;
 })
     .catch(error => {
return error;
});
}
                
                    


// Funcion para la busqueda de la tercer sugerencia
function SugerenciaTres(){
const endpoint = 'https://api.giphy.com/v1/gifs/search?q=' + Sport + '&api_key=' + apiKey;
const vaciar = document.getElementById("primera-fila");
vaciar.innerHTML = "";
                                                
    fetch(endpoint).then(Sport => {
        return Sport.json();
    }).then( Sport => {

        console.log(Sport.data);
        for (i = 0; i < Sport.data.length; i++){
            let figura = document.getElementById("primera-fila");
            let contenedorimg = document.createElement("div");
            let contenedortitulo = document.createElement("div");
            let img = document.createElement("img");
            let titulo = document.createElement("h4");
      
    
                img.src = Sport.data[i].images.downsized.url;
                titulo.innerText = Sport.data[i].title;
                figura.appendChild(contenedorimg);
                // elemento.className
                contenedorimg.appendChild(img);
                contenedorimg.appendChild(contenedortitulo);
                contenedortitulo.appendChild(titulo);
                contenedorimg.setAttribute("width", "270px");
                img.setAttribute("width", "270px");
                img.setAttribute("height", "270px");
                contenedorimg.classList.add('conteIMG');
                contenedortitulo.classList.add('contetitulo');
                titulo.style.display = "none";
    
    
    
               contenedortitulo.style.display = "none";
                 titulo.style.display = "none";
    
               img.onmouseover = function() {
                  
                titulo.style.color = "#ffffff";
                titulo.style.display = "block";
                contenedortitulo.style.position = "absolute";
    
                contenedortitulo.style.top = "252px";
                titulo.style.position = "absolute";
                titulo.style.top = "4px";
                contenedortitulo.style.display = "block";
    
            };
    
           
            
            img.onmouseout = function() {
                contenedortitulo.style.display = "none";
                titulo.style.display = "none";
            
            };
        document.getElementById("textoBusqueda").innerHTML =  "Sport";
        textoBusqueda.scrollIntoView()
    }   
return SugerenciaTres;
    })
.catch(error => {
return error;
    });                              
}
                                







//// Funcion para cambiar el texto de Tendencias 
function DesplegarRiot() {
        document.getElementById("textoBusqueda").innerHTML = "" + "Riot Games";
        textoBusqueda.scrollIntoView();
      };

function Desplegardigimon() {
          document.getElementById("textoBusqueda").innerHTML = "" + "Digimon";
          textoBusqueda.scrollIntoView();
        };

function DesplegarPokemon() {
          document.getElementById("textoBusqueda").innerHTML = "" + "Pokemon";
          textoBusqueda.scrollIntoView();
        };
  
function DesplegarOverwath() {
          document.getElementById("textoBusqueda").innerHTML = "" + "Overwath";
          textoBusqueda.scrollIntoView();
        };
        

function buscarresultado() {
            document.getElementById("textoBusqueda").innerHTML = "" + busquedaSearch;
            textoBusqueda.scrollIntoView();
        };
                                    


            
          




// Busco con el teclado

function handle(e){
    if(e.keyCode === 13 && input.value.length > 0 ){
        input.removeAttribute('onSubmit')
        e.preventDefault(); 
        conectarGiff()
        textoBusqueda.scrollIntoView() 
    }
}






// Activo el boton al escribir
// if (inputValor != '') {  
//     botonBusqueda.removeAttribute('disabled');  
buscarbtn.setAttribute('disabled', 'disabled');
buscarDespegable.style.display = "none";

from.addEventListener('input', (e) => {
    if (input.value.length > 0 ){
        buscarDespegable.style.display = "block"
        buscarbtn.removeAttribute('disabled');
        buscarbtn.style.backgroundColor = "#F7C9F3";
       
} else {
        buscarbtn.setAttribute('disabled', 'disabled');
        buscarbtn.style.backgroundColor = "#E6E6E6";
        buscarDespegable.style.display = "none"
    }
})


































// creo una funcion en el cual al hacer click afguera de sugerencias se cierre
function clickafuera() {
    document.addEventListener('click', function (event) {
     var contendeorsugerencias = document.querySelector(".contenedor-sugerencias").contains(event.target);
      if (!contendeorsugerencias) {
       buscarDespegable.style.display = "none";
        document.removeEventListener('click', function () { });
        }
         });
     };


  // activo dicha funcion
 from.addEventListener("focusout", function () {
    clickafuera()
 })


//Obtener busquedas de localStorage
function obtenerBusquedas(){
    if(localStorage.getItem('busquedas')=== null){
        busquedas = []
    }else{
        busquedas = JSON.parse(localStorage.getItem('busquedas'))
        if(busquedas.length > 10){
            busquedas.pop()
        }
    }
    return busquedas
}



// Añadir las busquedas a localStorage
function agregarBusquedas(busqueda){
    let busquedas = obtenerBusquedas();
    busquedas.unshift(busqueda)
    localStorage.setItem('busquedas', JSON.stringify(busquedas));
}


//Carga de botones de las ultimas busquedas realizadas por el input
function desplegarBusquedas(busqueda){
    const container = document.querySelector('.resultadocreados')
    const lista = document.createElement('li')
    lista.innerHTML = `<button class="resultadoBusqueda">#${busqueda}</button>`
    container.insertBefore(lista, lista.nextSibling)

}



//realizaa la busqueda de los botones llamando a la funcon de conectargiff
document.querySelector('.resultadocreados').addEventListener('click',(e)=>{
    if(e.target.classList.contains('resultadoBusqueda')){
       let str = e.target.textContent
       search.value = str.slice(1);;
       search.focus();
       conectarGiff();
       textoBusqueda.scrollIntoView();
    }
})


// Funcion para cambiar de hooja de estilos
function cambiarsheet(sheet){
    document.getElementById('pagestyle').setAttribute('href', sheet);
}

// escondo temas para despues llamar su funcion
temas.style.display = "none";


//Puqueños cambios al hacer click en tema dark
function changedark(){
    const lupa = document.getElementById("lupa");
    const img = document.getElementById("logo");
    const buscarbtn = document.getElementById("btn-buscar");
    buscarbtn.style.backgroundColor = "#b4b4b4";
    img.src = "img/gifOF_logo_dark.png";
    lupa.src = "img/CombinedShape.svg";
    localStorage.setItem('theme', 'dark')

    //cambios en el input al escribir
    from.addEventListener('input', () => {
        if (input.value.length > 0){
            buscarbtn.style.backgroundColor = "#EE3EFE";
            lupa.src = "img/lupa_light.svg";
            buscarbtn.style.color = "#ffffff";

    } else {
            lupa.src = "img/CombinedShape.svg"; 
            buscarbtn.style.color = "#808080";
            buscarbtn.style.backgroundColor = "#b4b4b4";

        }
    })
    
}



//Puqueños cambios al hacer click en tema day
function changeday(){
        const buscarbtn = document.getElementById("btn-buscar");
        buscarbtn.style.backgroundColor = "#E6E6E6";
       const lupa = document.getElementById("lupa");
        const img = document.getElementById("logo")
        img.src = "img/gifOF_logo.png";
      
        localStorage.setItem('theme', 'day')  
        //cambios en el input al escribir   
        from.addEventListener('input', () => {
            if (input.value.length > 0){
                buscarbtn.style.backgroundColor = "#F7C9F3 ";
                lupa.src = "img/lupa.svg";
                buscarbtn.style.color = "#000000";        
            }
             else {
                    buscarbtn.style.backgroundColor = "#E6E6E6";
                    lupa.src = "img/lupa_inactive.svg";
                    buscarbtn.style.color = "#808080";
                 }
             })
}



 //Muestro los themes al hacer click
 function seleccionartheme() {
    if (temas.style.display == "none") {
        temas.style.display = "block";
    } else {
        temas.style.display = "none";
    }
  }
  












 
