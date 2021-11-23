/* EMPLEO DE ARRAY */


let prodId = 0;
class Producto{
    constructor(tipo, marca, precio, talle, año, color){
        this.tipo =  tipo;
        this.marca =  marca;
        this.precio =  precio;
        this.talle = talle;
        this.año =  año;
        this.color = color;
        this.id = prodId;
        }  
        showDetail(){
            return "Tipo de producto: " + this.tipo + ", Marca: " + this.marca +  ", Precio: " + this.precio + ", Talle: " + this.talle + ", Año: " + this.año + ", Color: " + this.color
        }
}

/* LAS ENTRADAS VIA PROMPT Y LOS ALERTS NO PERTENECEN A LA INTERFAZ DEL SIMULADOR FINAL */

/* PROPIEDADES Y METODOS DEL ARRAY ".push" */

/* let productos = [];
for(let i = 0; i <= 0; i++){
    let prod = prompt("Ingrese el tipo de producto")
    let prodmarca = prompt("Ingrese la marca del producto")
    let prodprecio = prompt("Ingrese el precio del producto")
    let prodtalle = prompt("Ingrese el talle del producto")
    let prodaño = prompt("Ingrese el año del producto")
    let prodcolor = prompt("Ingrese el color del producto")

    alert("A continuación, ingrese los datos de un nuevo producto:")
    productos.push(new Producto(prod, prodmarca, prodprecio, prodtalle, prodaño, prodcolor))
    prodId = prodId +1
} */



for(let i = 0; i < productos.length; i++){
    console.log(productos[i].showDetail())
}





/* LA FUNCION FILTRO ES UTIL PARA EL VENDEDOR */

/* function filtro ( ) {

    let orden = parseInt (prompt(" Tipea 1, si preferís ordenar por precio. Tipea 2, si preferís alfabeticamente "))
 

    if ( orden == 1) {

        console.log("Elegiste por precio") 
        
        productos.sort(  function (precio1,precio2  ) {

            if (precio1.precio > precio2.precio) { 
              return 1;
            } else if (precio1.precio < precio2.precio) {
              return -1;
            } else {
                return 0;
            }

          }); console.log(productos);


    } else if ( orden == 2) {

        console.log("Elegiste alfabeticamente")

        productos.sort(function (a, b) {
            if ( a.nombre > b.nombre )
              return 1;
            if ( a.nombre < b.nombre )
              return -1;
            return 0
        });  console.log(productos);

    } else {
        console.log("error")
    }
}

filtro() */


let productosContainer = document.getElementById("productos")
for (let producto of productos){ 
    let titulo = document.createElement("h1")
    titulo.textContent = producto.tipo
    productosContainer.append(titulo)
}





/* A CONTINUACION, CAPTURA DE EVENTOS, con criterio homogéneo: veces que el usuario deriva en el perfil de Youtube de la marca, haciendo click en el link del footer */



function conteo(e){
e.preventDefault();
let youTube = document.getElementById("youTube");

   console.log("Redireccionamientos a Youtube:" + youTube);

}

youTube.addEventListener("click" , conteo);








/* UTILIZACION DE AJAX */
$.ajax({


    url:'http://api.openweathermap.org/data/2.5/weather',
    type:"GET",
    data:{
        q:'Tandil',
        appid: 'bbf8893c6e8030e157bb633d11a66e17',
        dataType:"jsonp",
        units: 'metric'
    },
    success:function(data){

        console.log( data);
        let icono = data.weather[0].icon;
        let iconoURL = "http://openweathermap.org/img/w/" + icono + ".png";
        $("#icono").attr("src" , iconoURL);
        let contenido= `<div> 
                            <p>${data.name}</p>                            
                            <p>${data.weather[0].main}</p>
                            <p>TEMPERATURA: ${data.main.temp}</p>
                            <p>HUMEDAD: ${data.main.humidity}</p>
                        </div>`;


        $("#caja").append(contenido);

    }
})


/* ANIMACION */

$("#Regina").hide();

$("#pOwnedParent").click(function(){
    $("#Regina").show();
    $("#Regina").animate({height:"400px" , width:"150px"})
})