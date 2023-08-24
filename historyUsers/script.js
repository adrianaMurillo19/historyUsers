
/*
• “Un usuario puede realizar una búsqueda simple básica que busca una palabra o frase tanto en el campo del autor como en el del título”.
• “Un usuario puede buscar libros ingresando valores en cualquier combinación de autor, título e ISBN”
• “Un usuario puede calificar los libros del 1 (malo) al 5 (bueno). El libro no tiene que ser uno que el usuario nos haya comprado”
• “Un usuario puede escribir una reseña de un libro. Puede obtener una vista previa de la reseña antes de enviarla. El libro no tiene que ser uno
el usuario nos compró”
 */

const h1 = document.querySelector('h1');//seleccionar por el nombre de la Etiqueta
const input1 = document.querySelector('#titulo');
const input2 = document.querySelector('#autor');
const btn    = document.querySelector('#btnCalcular');

function btnClick(){

    let articulos = [

        {title: "el club de las cinco", escritor: "pepito"},
        {title: "the ghost", escritor: "felipe"},
        {title: "el club de las cinco", escritor: "miguel"},
        

    ];

    for(let i=0 ; i < articulos.length; i++){

        if(articulos[i].title == input1.value || articulos[i].escritor == input2.value){

            console.log("estos son los libros"+ articulos[i]);
        }else
              console.log("lo que buscas no se encuentra disponible: " );
        
    }
    
}