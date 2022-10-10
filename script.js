// abrir un <a> desd DOM

// let aJuguemos=document.createElement("a");
// let btnJuguemos=document.getElementById("juguemos");
// aJuguemos.target="_blank";
// aJuguemos.href="./index-juguemos.html";
// function openJuguemos() {
//     console.log("click");
//     aJuguemos.click();
// }


// para este boton se utilizo un evento que abre una ventana nueva
function openURL(a) {
    window.open (

        `./index-${a}.html`,
        "_blank"
    )
}
//btnJuguemos.addEventListener("Click",function() {
//    console.log("click");
//});
//btnJuguemos.addEventListener("click",function(){openURL(this.Id)});
//console.log(btnJuguemos);






//comportamiento para la pagina con l rompezabezas .Se usa la funcion Random() para cargar una imagn u otra
let arrayImagenes=["./assets/imagenes/Rompe1.png","./assets/imagenes/rompe2.png","./assets/imagenes/Rompe3.png"];
const img=()=> {

let srcOrigen1=document.getElementById("imgOrigen1");
srcOrigen1.setAttribute("src",arrayImagenes[Math.round(Math.random()*2)]);

let srcOrigen2=document.getElementById("imgOrigen2");
srcOrigen2.setAttribute("src",arrayImagenes[Math.round(Math.random()*2)]);

let srcOrigen3=document.getElementById("imgOrigen3");
srcOrigen3.setAttribute("src",arrayImagenes[Math.round(Math.random()*2)]);

console.log("funcion Img()");
}

// srcOrigen1.setAttribute("src",arrayImagenes[Math.random()*2]) ;

console.dir(arrayImagenes[0])



//DOM
let botonPausa = document.querySelector(".pausa");
let video = document.querySelectorAll("video");
//indices -> 
//  0           1   ...
//[1ervideo,2davideo]

let tiempoVideo=document.getElementById("tiempo");

//obtengo la duracion del video al producirse el evento Onloadedmetadata y la muestro en el span 
video[0].onloadedmetadata=function(){tiempoVideo.innerHTML=this.duration.toFixed(3)};

//setTimeout consta de 3 partes: setTimeout() ; adentro la funcion a ejecutar, y el tiempo a esperar antes de reproducir

const mostrarDuracion=()=>{
   if(video[0].currentTime<=video[0].duration+1){
    //tiempoVideo.textContent=video[1].duration
    tiempoVideo.innerHTML=`${video[0].currentTime.toFixed(2)} : ${video[0].duration.toFixed(3)}`;}
    else{
        video.pause();
        video[0].currentTime=0;
    }
    
}


const reprod=()=>{
    

    video[0].play()// inicia la reproduccion o continua desde donde se pauso
    //tiempoVideo.innerHTML=`${video[1].currentTime} : ${video[1].duration}`;
    console.log("clickeo el boton PLAY")
    //demoramos el tiempo de mostrar la duracion para que espere a que se cargue el video;
    //setTimeout(mostrarDuracion,300);
    let textVideo=document.getElementById("textVideo");
    textVideo.textContent="";
    setInterval(mostrarDuracion,300);
}







botonPausa.addEventListener("click",()=>{
        //que se pause el video
        video[0].pause()
        console.dir(video[0])
        textVideo.textContent="HISTORIA DE LA PROGRAMACION";
        
        
});

let a=document.getElementsByClassName("buttonAnclas");
console.dir(a);









