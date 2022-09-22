// page picada
let carrito = 0;
const picada = [];
let contador = 0;
class productoPicadas {
    constructor(id, nombre, precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
    
    }
    
}

let picada1 = new productoPicadas (1, 'Picada Mediterranea', 1850);
let picada2 = new productoPicadas (2, 'Picada Orejano', 2000);
let picada3 = new productoPicadas (3, 'Picada Patagonia', 1900);

picada.push(picada1, picada2, picada3);



const elementos = document.getElementsByClassName('agregar');

let agregar = function(){
    let id = this.dataset.idpicada; 
    carrito += picada.find(x => x.id == id).precio;
    
    contador++;
    document.getElementById('cantidad').innerHTML = "$" + carrito;

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto agregado',
        showConfirmButton: false,
        timer: 1500
      });

}


Array.from(elementos).forEach(function(element) {
    element.addEventListener('click', agregar);


});








   

   

