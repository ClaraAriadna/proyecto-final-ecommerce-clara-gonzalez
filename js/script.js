const botones = ["cajitas-boton", "fanal-boton", "mosaico-8-boton", "mosaico-11-boton"];

function agregarAlCarrito() {
    for (let i of botones) {
        document.getElementById(i).addEventListener("click", function () {
            let producto = document.createElement("li");
            document.getElementById("lista-carrito").appendChild(producto);
            switch (i) {
                case "cajitas-boton":
                    producto.innerText = "Cajitas ($8000)";
                    calcularTotal(8000);
                    break;
                case "fanal-boton":
                    producto.innerText = "Fanal ($6500)";
                    calcularTotal(6500);
                    break;
                case "mosaico-8-boton":
                case "mosaico-11-boton":
                    producto.innerText = "Macetas con mosaico ($12000)";
                    calcularTotal(12000);
                    break;
            }
        });
    }
}

function calcularTotal(precio) {
    document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + precio;
}

agregarAlCarrito();
