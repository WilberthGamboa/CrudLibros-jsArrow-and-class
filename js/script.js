/*Dar de altar una colección de libros mediante un formulario que solicite: título, autor, editorial
Listar todos los libros de la colección
Ordenar la colección por título, autor o editorial
Eliminar un libro de la colección
Imprimir la colección de libros
La captura del nombre de autor debe incluir la funcionalidad de autocompletar
La aplicación debe utilizar el objeto localStorage para el manejo persistente de los datos
Las funcionalidades deben estar implementadas con funciones anónimas*/


//creamos el objeto libro


  

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

var libros = [];

btnAgregar.onclick = () =>{
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let editorial = document.getElementById("editorial").value;


    var libro = new Libro(titulo,autor,editorial);
  
    libros.push(libro);

}


btnEliminar.onclick = () =>{
    libros.pop();
}
var div = document.getElementById("tabla");
btnListar.onclick=()=>{
    if(div.childNodes.length >0){
      
        div.innerHTML="";

    }
        
   
    
   
    for (let index = 0; index < libros.length; index++) {
    
        var p = document.createElement("div");
     
    p.textContent= "Titulo: "+libros[index].getTitulo + " Autor: " +libros[index].getAutor+" Editorial: "+libros[index].getEditorial ;
     div.appendChild(p);
   
    }


    
}
