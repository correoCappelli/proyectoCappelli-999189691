let arrayImagenes=["./assets/imagenes/Rompe1.png","./assets/imagenes/rompe2.png","./assets/imagenes/Rompe3.png"];

// La  funcion img() se ejecuta al clickear el boton "Reiniciar" del rompecabezas Drag & Drop. 
// Se utiliza el metodo Math.random() para poner de forma aleatoria las imagenes al reiniciar
// Tambien se vuelve a reestablecer el texto "arrastre y suelte la imagen aqui".
// Se utiliza sessionStorage para guardar un booleano True en las claves dropEn1, dropEn2 y dropEn3. 
// Si ya existe la imagen en determinada posicion entonces si se suelta una imagen donde ya existe otra, se muestra un cartel Alert("ya existe una imagen en el casillero").
// Con la funcion partidasJugadasSesion() se utiliza localStorage para informar la cantidad de partidas completadas (con las 3 cartas colocadas) 
// al volver a la pagina o al actualizar la misma.  


let partidasJugadasSesion=()=> {
    
 if(localStorage.getItem("cant1")!=null && localStorage.getItem("cant2")!=null && localStorage.getItem("cant3")!=null) {

    let cant1=parseInt(localStorage.getItem("cant1"));
    let cant2=parseInt(localStorage.getItem("cant2"));
    let cant3=parseInt(localStorage.getItem("cant3"));

    if(cant1!=0 && cant2!=0 && cant3!=0){

        if (cant1==cant2 && cant3==cant1){
                alert(`Partidas completadas en esta Sesion__ ${cant1}`);

        } else {
        var min=Math.min(cant1,cant2,cant3);
        alert(`Partidas completadas en esta Sesion__ ${min}`);
        
                 }
    } 
}
localStorage.clear();
}


const img=()=> {

    sessionStorage.clear();

    let ranImg1=arrayImagenes[Math.round(Math.random()*2)];
    let ranImg2;
    let ranImg3;

        if(ranImg1==arrayImagenes[0]){
            ranImg2=arrayImagenes[1]; ranImg3=arrayImagenes[2];}
        if(ranImg1==arrayImagenes[1]){
            ranImg2=arrayImagenes[2]; ranImg3=arrayImagenes[0];}
        if(ranImg1==arrayImagenes[2]){
            ranImg2=arrayImagenes[0]; ranImg3=arrayImagenes[1];} 

    let srcOrigen1=document.getElementById("imgOrigen1");
    srcOrigen1.setAttribute("src",ranImg1);
    srcOrigen1.hidden=false;
    let srcDestino1=document.getElementById("destino1");
    srcDestino1.innerHTML="arrastre y suelte la imagen aqui";

    let srcOrigen2=document.getElementById("imgOrigen2");
    srcOrigen2.setAttribute("src",ranImg2);
    srcOrigen2.hidden=false;
    let srcDestino2=document.getElementById("destino2");
    srcDestino2.innerHTML="arrastre y suelte la imagen aqui";

    let srcOrigen3=document.getElementById("imgOrigen3");
    srcOrigen3.setAttribute("src",ranImg3);
    srcOrigen3.hidden=false;
    let srcDestino3=document.getElementById("destino3");
    srcDestino3.innerHTML="arrastre y suelte la imagen aqui";

    console.log("funcion Img()");
}

// Se establecen los Eventos para el Drag & Drop utilizando "dragstart" en el origen y "dragover" y "drop" para el destino. El "dragover" dispara el metodo 
// preventDefault() sobre el contenedor destino.
// Se utilizan los metodos setData y getData guardar una copia de la imagen y copiarla en el destino  
// Se utiliza la propiedad hidden="true" para ocultar la imagen original al soltar en el destino. 
// Teniendo cuidado de ocultar la imagen correcta segun el origen de salida.

console.dir(arrayImagenes[0])

let destino1=document.getElementById("destino1");
let destino2=document.getElementById("destino2");
let destino3=document.getElementById("destino3");

let origen1=document.getElementById("imgOrigen1");
let origen2=document.getElementById("imgOrigen2");
let origen3=document.getElementById("imgOrigen3");

// Al cargar la pagina index-juguemos.html se muestran las tres imagenes. S añade el rspectivo atributo "src" al elemento Origen1, Origen2 y Origen3

origen1.setAttribute("src",arrayImagenes[0]);
origen2.setAttribute("src",arrayImagenes[2]);
origen3.setAttribute("src",arrayImagenes[1]);




origen1.addEventListener("dragstart",(evento)=>{

    evento.dataTransfer.setData("Text",evento.path[0].attributes[1].nodeValue);
    console.log("se guardo la data img1")
    console.log(evento);
    console.log(evento.path[0].attributes[1].nodeValue);
       
})

destino1.addEventListener("dragover",(evento)=>{
    evento.preventDefault();
})


destino1.addEventListener("drop",(evento)=>{
    
    let imgDestino1=evento.dataTransfer.getData("Text");
    console.log(imgDestino1);

    if(sessionStorage.getItem("dropEn1")){
        alert("Ya hay una imagen en el casillero 1");   
    }else{
        destino1.innerHTML=`<img class="imagenRompecabezas" src=${imgDestino1}></img>`;
    
        if(imgDestino1==origen1.getAttribute("src")){origen1.hidden=true;}
        if(imgDestino1==origen2.getAttribute("src")){origen2.hidden=true;}
        if(imgDestino1==origen3.getAttribute("src")){origen3.hidden=true;}


        sessionStorage.setItem("dropEn1",true); 

        if(localStorage.getItem("cant1")==null){
        localStorage.setItem("cant1",1);
        }else{
            let cant1=parseInt(localStorage.getItem("cant1"));
            localStorage.setItem("cant1",cant1+=1);
        }
        }
})

origen2.addEventListener("dragstart",(evento)=>{

    evento.dataTransfer.setData("Text",evento.path[0].attributes[2].nodeValue);
    console.log("se guardo la data img2")
    console.log(evento);
    console.log(evento.path[0].attributes[2].nodeValue);
    
})

destino2.addEventListener("dragover",(evento)=>{
    evento.preventDefault();
})



destino2.addEventListener("drop",(evento)=>{
    
    let imgDestino2=evento.dataTransfer.getData("Text");
    console.log(imgDestino2);
    if(sessionStorage.getItem("dropEn2")){
        alert("Ya hay una imagen en el casillero 2");   
    }else{
        destino2.innerHTML=`<img class="imagenRompecabezas" src=${imgDestino2}></img>`;
        if(imgDestino2==origen1.getAttribute("src")){origen1.hidden=true;}
        if(imgDestino2==origen2.getAttribute("src")){origen2.hidden=true;}
        if(imgDestino2==origen3.getAttribute("src")){origen3.hidden=true;}

    
        sessionStorage.setItem("dropEn2",true);

        if(localStorage.getItem("cant2")==null){
            localStorage.setItem("cant2",1);
            }else{
                let cant2=parseInt(localStorage.getItem("cant2"));
                localStorage.setItem("cant2",cant2+=1);
            }
        }
})

origen3.addEventListener("dragstart",(evento)=>{

    evento.dataTransfer.setData("Text",evento.path[0].attributes[2].nodeValue);
    console.log("se guardo la data img3")
    console.log(evento);
    console.log(evento.path[0].attributes[2].nodeValue);

})

destino3.addEventListener("dragover",(evento)=>{
    evento.preventDefault();
})



destino3.addEventListener("drop",(evento)=>{
    
    let imgDestino3=evento.dataTransfer.getData("Text");
    console.log(imgDestino3);
    if(sessionStorage.getItem("dropEn3")){
        alert("Ya hay una imagen en el casillero 3");   
    }else{
         destino3.innerHTML=`<img class="imagenRompecabezas" src=${imgDestino3}></img>`;

         if(imgDestino3==origen1.getAttribute("src")){origen1.hidden=true;}
         if(imgDestino3==origen2.getAttribute("src")){origen2.hidden=true;}
         if(imgDestino3==origen3.getAttribute("src")){origen3.hidden=true;}


        sessionStorage.setItem("dropEn3",true);
        
        if(localStorage.getItem("cant3")==null){
            localStorage.setItem("cant3",1);
            }else{
                let cant3=parseInt(localStorage.getItem("cant3"));
                localStorage.setItem("cant3",cant3+=1);
            }
        }
})






