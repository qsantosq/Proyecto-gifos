
// Carga de busquedas guardadas
document.addEventListener('DOMContentLoaded', ()=>{
    MostrarmisGifs(); /// Muestro mis Gifos si es que tengo al iniciar la pagina.

    // Activo thema segun localstorage
if(themeActivado){
    document.documentElement.setAttribute('theme', themeActivado)
        if(themeActivado === "day"){ 
            pagestyle.href = "css/estiloscamara.css";
        }if(themeActivado === "dark"){ 
            pagestyle.href = "css/darkcamara.css" ;
            img.src = "img/gifOF_logo_dark.png"   
        }
    }
})



// Variables definidas de manera general
let themeActivado = localStorage.getItem('theme');
let  pagestyle = document.getElementById("pagestyle");
let img = document.getElementById("logo-dark");
let comenzar = document.getElementById("comenzar");
let subir = document.getElementById("listo");
let enlace = document.getElementById('enlace');
let final = document.getElementById('final');
let botonCancelar = document.getElementById('boton-cancelar');
let flecha = document.getElementById('flecha');
let tercerosBotones = document.getElementById("terceros-botones");
let contenedorDos = document.getElementById("segundo-conten");
let contenedorTres = document.getElementById("tercer-conten");
let captura = document.getElementById("grabar");
let lol = document.getElementById("lol");
let botonlisto = document.getElementById("boton-listo");
let botonlol = document.getElementById("lol-2");
let cuartoBotones = document.getElementById("cuarto-botones");
let continuar = document.getElementById("boton-listo");
let sectionset = document.getElementById("section-set");
let tituloescondido = document.getElementById("displayTitulo2");
let titulonoescondido = document.getElementById("displayTitulo1");
var tiempoPreview = document.getElementById("tiempo");
let userName = "qsantosq";
let apiKey = "oR2Okp0NR1mAQNHe6NjvMh0nzcpssIQ6";
let blob;
let GifosGuardados = [];
let xmlh = new XMLHttpRequest();
let imgcamara = document.getElementById("lol");
let continuarDos = document.getElementById("lol-2");
let iconostop = document.getElementById("lol-2");
let cancelarsubida = document.getElementById("quinto-boton");
let stop = document.getElementById("boton-listo");
let video = document.getElementById("video");
let videosave = document.getElementById("video2");




// Secciones que empiezan escondidas
tercerosBotones.style.display = "none";
contenedorDos.style.display = "none";
contenedorTres.style.display = "none";
cuartoBotones.style.display = "none";
sectionset.style.display = "none";
tituloescondido.style.display = "none";




    

 


// Al dar en comenzar muestro secciones correspondientes y inicio el navigator media y realizo su configurión
comenzar.addEventListener("click", () => {
    const contenedorUno = document.getElementById("primer-conten");
    contenedorUno.style.display = "none";
    contenedorDos.style.display = "block";
    navigator.mediaDevices.getUserMedia({
        video: {
                    width: { min: 840 },
                    height: { min: 434 }
                }
    })
    .then(record)
    // Llamo a record - funcoin que defino abajo
    .catch(err => console.log(err))
})





// Defino la funcion record
function record (stream){
    video.srcObject = stream;
    video.play()
// propiedades del giff
    recorder = RecordRTC(stream, {
        type: 'gif',
        frameRate: 190,
        quality: 30,
        width: 360,
        hidden: 240,
        
    onGifRecordingStarted: function() {
        console.log('started')
    }, // cierro onGifRecordingStarted
    }); // cierro RecordRTC



    

// Empiezo a grabar con el boton de capturar
 document.querySelector("#grabar").addEventListener("click",function(ev){
        tituloescondido.style.display = "block";
        titulonoescondido.style.display = "none";
        recorder.startRecording();
        console.log(recorder.state);
        empiezareloj = new Date().getTime();        
        tiempoGrabacion();

})


// Empiezo con la imagen
imgcamara.addEventListener("click",function(ev){
    tituloescondido.style.display = "block";
    titulonoescondido.style.display = "none";
    recorder.startRecording();
    console.log(recorder.state);
    empiezareloj = new Date().getTime();    
    tiempoGrabacion();
})



function tiempoGrabacion() {
    if (!recorder) {
        return;
        }
 // Cuento cada 1 seg, trate de hacerlo por milesimas pero hace salteos en el tiempo y no queda bien
    tiempo.innerText = reproducirSegundos((new Date().getTime() - empiezareloj) / 1000);
    setTimeout(tiempoGrabacion, 1000); 
}



 // Cuento cada 1 seg, trate de hacerlo por milesimas pero hace salteos en el tiempo y no queda bien
stop.addEventListener("click", () => {       
        recorder.stopRecording(function() {
            videosave.style.display = "block";
            video.style.display = "none";
            blob = recorder.blob;
            let url = URL.createObjectURL(blob);
            videosave.src = url  
             subir.addEventListener("click", subircapptura)
            }) //Final StopRecording
    })//Final Evento Stop




iconostop.addEventListener("click", () => {       
    recorder.stopRecording(function() {
        videosave.style.display = "block";
        video.style.display = "none";
        blob = recorder.blob;
        let url = URL.createObjectURL(blob);
        videosave.src = url  

     subir.addEventListener("click", subircapptura)
        }) //Final StopRecording
})


 } // final de la funcion Record


function subircapptura() {
let URL = 'https://upload.giphy.com/v1/gifs?' + 'api_key=' + apiKey + '&username=' + userName;
    //Muestro las pestallas correspondientes
    contenedorDos.style.display = "none"
    sectionset.style.display = "block"
        data = new FormData(); //Creo el FromData
        data.append('file', blob, 'misGif.gif');
        xmlh.responseType = 'json'; // Configuro el XMLHttpRequest
        xmlh.open('POST', URL);
        xmlh.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xmlh.send(data);
        xmlh.onload = function() {
            //si el estado no es 200 mando un alerta
            if ( this.status !== 200) {
                alert(`Error`); 
            } else {  //si es correcto continuo
                let id = xmlh.response.data.id;
                console.log(xmlh.response.data);
                if (id) {
                    GuardarGifs(id);
                    sectionset.style.display = "none";
                    contenedorTres.style.display = "block";       
                }
            }
        };
    }




function GuardarGifs(id) {
    fetch('https://api.giphy.com/v1/gifs/' + id + '?' + '&api_key=' + apiKey).then(response => {
     return response.json();
        }).then(dataGif => {
            let url = dataGif.data.images.original.url;
            document.getElementById("migif").src = url;
            enlace.setAttribute("value", url);//guardar el elnace 
                if (localStorage.getItem('gifs')) {  //me fijo si hay algo guardado, de no ser asi hago el push al array para guardarlo
                    GifosGuardados = JSON.parse(localStorage.getItem('gifs'));
                    GifosGuardados.push(url);
                    localStorage.setItem('gifs', JSON.stringify(GifosGuardados));
                } else {
                    GifosGuardados.push(url);
                    localStorage.setItem('gifs', JSON.stringify(GifosGuardados));
                }
    });
}

   


//Realizo una funcion para mostrar mis gifs del localstorage, activo la funcion arriba del todo
function MostrarmisGifs() {
    if (localStorage.getItem("gifs"))
    {
    let imagengif = document.getElementById("misgifs");
        GifosGuardados = JSON.parse(localStorage.getItem("gifs"));
        GifosGuardados.forEach(gifss => {
        if (gifss) {
            let contenedorgif = document.createElement("img");
                contenedorgif.src = gifss;
                imagengif.appendChild(contenedorgif);
                }
            });
        }
}//Cierro la funcion Mostrarmisgifos


//Descargar gif con el botonon
document.getElementById('descarga').onclick = function () {
    invokeSaveAsDialog(blob);
     }


// Al clickiar en el boton del enlace lo copio
enlace.addEventListener('click', function(event) {
    let text = enlace.getAttribute('value');
    navigator.clipboard.writeText(text).then(function() {
    alert("copiado con éxito");
    });
});


// al dar listo regreso a la pagina y muestro el gif
final.addEventListener('click', () => {
    window.location.assign("captura.html");    
})


 // Funcion para reproducir los segundos, hago sus cuentas para empezar a contar
 function reproducirSegundos(segs) {
    var hora = Math.floor(segs / 3600);
    var minutos = Math.floor((segs - (hora * 3600)) / 60);// 
    var segundos = Math.floor(segs - (hora * 3600) - (minutos * 60));
        minutos = (minutos < 10)? "0" + minutos : minutos;
        segundos = (segundos < 10)? "0" + segundos : segundos;
            if (hora <= 0) { return minutos + ':' + segundos; }
        return hora + ':' + minutos + ':' + segundos;
}



// Al clickear en repetir regreso a la pagina para reiniciar el proceso
let repetir = document.getElementById("lol-3")
repetir.addEventListener('click', () => {
    window.location.assign("captura.html");    
})


// Hacer click en cancelar o en el flecha tte lleva al index
botonCancelar.addEventListener('click', () => {
    window.location.assign("index.html"); 
});


cancelarsubida.addEventListener('click', () => {
    window.location.assign("index.html"); 
});


flecha.addEventListener('click', () => {
     window.location.assign("index.html");
});



// Al hacer click escondo y muestro las secciones correspondientes
captura.addEventListener("click", () => {
       captura.style.display = "none";
       lol.style.display = "none";
       botonlisto.style.display = "block";
       botonlol.style.display = "block"
       tercerosBotones.style.display = "flex";
})



// Al hacer click escondo y muestro las secciones correspondientes
continuar.addEventListener("click", () => {
    tercerosBotones.style.display = "none";
    cuartoBotones.style.display = "block"
    cuartoBotones.style.display = "flex"
})




// Al hacer click escondo y muestro las secciones correspondientes
captura.addEventListener("click", () => {
    captura.style.display = "none";
    lol.style.display = "none";
    botonlisto.style.display = "block";
    botonlol.style.display = "block"
    tercerosBotones.style.display = "flex";
})




// Al hacer click escondo y muestro las secciones correspondientes
imgcamara.addEventListener("click", () => {
    captura.style.display = "none";
    lol.style.display = "none";
    botonlisto.style.display = "block";
    botonlol.style.display = "block"
    tercerosBotones.style.display = "flex";
})





// Al hacer click escondo y muestro las secciones correspondientes
continuarDos.addEventListener("click", () => {
    tercerosBotones.style.display = "none";
    cuartoBotones.style.display = "block"
    cuartoBotones.style.display = "flex"
})










