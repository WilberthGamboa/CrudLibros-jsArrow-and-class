/*Dar de altar una colección de libros mediante un formulario que solicite: título, autor, editorial
Listar todos los libros de la colección
Ordenar la colección por título, autor o editorial
Eliminar un libro de la colección
Imprimir la colección de libros
La captura del nombre de autor debe incluir la funcionalidad de autocompletar
La aplicación debe utilizar el objeto localStorage para el manejo persistente de los datos
Las funcionalidades deben estar implementadas con funciones anónimas*/


//creamos el objeto libro
var libros = [];

window.onload = function() {
     text = localStorage.getItem("json");
     hola =JSON.parse(text);

    for (let index = 0; index < hola.length; index++) {
        let libro = new Libro(hola[index].titulo,hola[index].autor,hola[index].editorial);
        libros.push(libro);
        
    }
    
  };

  

class Libro {
    constructor(titulo,autor,editorial){
       this.titulo=titulo;
        this.autor=autor;
        this.editorial=editorial;
    }

    get getTitulo(){
        return this.titulo;
    }

    get getAutor(){
        return this.autor;
    }

    get getEditorial(){
        return this.editorial;
    }

   
    
}

const btnAgregar = document.getElementById('agregar');
const btnEliminar = document.getElementById('eliminar');
const btnListar = document.getElementById("listar");
const btnOtitulo = document.getElementById("oTitulo");
const btnOautor = document.getElementById("oAutor");
const btnOeditorial = document.getElementById("oEditorial");
const btnImprimir = document.getElementById("imprimir");

btnImprimir.onclick = ()   =>{
    window.print();
}

btnAgregar.onclick = () =>{

    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let editorial = document.getElementById("editorial").value;
    
    var libro = new Libro(titulo,autor,editorial);
    libros.push(libro);

    myJSON =JSON.stringify(libros);
    
    localStorage.setItem("json", myJSON);

    

}


btnEliminar.onclick = () =>{
    libros.pop();
    myJSON =JSON.stringify(libros);
    
    localStorage.setItem("json", myJSON);
}


var div = document.getElementById("tabla");


btnListar.onclick=()=>{
    if(div.childNodes.length >0){
      
        div.innerHTML="";

    }
        
   
    
   
    for (let index = 0; index < libros.length; index++) {
    
        var p = document.createElement("div");
     
    p.innerHTML= "Titulo: "+libros[index].getTitulo + " Autor: " +libros[index].getAutor+" Editorial: "+libros[index].getEditorial;
 

     div.appendChild(p);

   
    }
    /*
    const buttons = document.getElementsByClassName("eliminar")
    for (var i = 0; i < buttons.length; i++){

    var x= (function (_i) {
        buttons[_i].addEventListener('click', function(){
          currD = _i;
        
          console.log(_i);


            libros.splice(currD,currD-1); // 1 es la cantidad de elemento a eliminar
            myJSON =JSON.stringify(libros);
    
            localStorage.setItem("json", myJSON);

            div.innerHTML="";
            for (let index = 0; index < libros.length; index++) {
    
                var p = document.createElement("div");
             
            p.innerHTML= "Titulo: "+libros[index].getTitulo + " Autor: " +libros[index].getAutor+" Editorial: "+libros[index].getEditorial+ " "  + '<input type="button" value="eliminar" name="" class="eliminar" >';
         
        
             div.appendChild(p);
        
           
            }
            
        });

        currD = _i;
        console.log(_i);
    })(i);
    */
}


    


btnOautor.onclick = () =>{
    libros.sort(function (a, b) {
        if (a.getAutor > b.getAutor) {
          return 1;
        }
        if (a.getAutor < b.getAutor) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
}

btnOeditorial.onclick = ()  => {
    libros.sort(function (a, b) {
        if (a.getEditorial > b.getEditorial) {
          return 1;
        }
        if (a.getEditorial < b.getEditorial) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
}

window.addEventListener('beforeunload', function (e) {



});


// test

