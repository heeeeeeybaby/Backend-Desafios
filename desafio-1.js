/********   DESAFÍO 1   **********/

// Clase auxiliar para crear los productos

class Product {
    constructor(title = "", description = "", price = 0, thumbnail = "", code = "", stock = 0){
        this.title = title, 
        this.description = description, 
        this.price = price, 
        this.thumbnail = thumbnail, 
        this.code = code, 
        this.stock = stock,
        this.id = Product.incrementID()
    }
    static incrementID() {
        if (this.idIncrement) { 
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    } 
}

// Productos creados con la clase Product

const product1 = new Product ("Polera Marco Antonio 100% Algodón", "Polera con la leyenda 'Si no te hubieras ido' disponible en diferentes colores", 10990, "", "pol-001", 10)
const product2 = new Product ("Polera Loba 100% Algodón", "Polera con la leyenda 'Por que una loba como yo, no ta pa tipos como tú'", 9990, "", "pol-002", 15)
const product3 = new Product ("Tazón 'Huele a Peligro'", "Tazón de loza con leyenda a prueba de temperatura", 7990, "", "tzn-001", 6)
const product4 = new Product ("Tazón 'Mujeres, lo que nos pidan, PODEMOS'", "Tazón de loza con leyenda a prueba de temperatura", 7990, "", "tzn-002", 4)
const product5 = new Product ("Delantal 'Mil pedazos de mi corazón, volaron por toda la habitación'", "Cocinarás mejor y sacarás adelante todo el potencial de despecho", 15990, "", "dln-001", 20)
const product6 = new Product ("Delantal 'Quizás la casa, la rutina, se ha convertido en tu enemiga'", "Cocinarás mejor y sacarás adelante todo el potencial de despecho de la gran Ana Gabriel y Vicky Carr", 10990, "", "dln-002", 10)
const product7 = new Product();

class ProductManager {
    constructor(products){
        this.products = []
    }

    getProducts(){
            return this.products;
    }
    
    // Método addProducts genera un id único por cada producto que ingresa, debe arrojar un error porque el código estará repetido.
    addProduct(product) {
        if (this.products.find(producto => producto.code == product.code)) {
            console.log(product.code + " El producto ya ha sido agregado")
        } else {
            this.products.push(product)
        }
    }

    getProductByCode(code) {
        const product = this.products.find(producto => producto.code == code)
        if (product) { 
            return true
        }
        return false
    }


    getProductById(id) {
        const product = this.products.find(producto => producto.id == id)
        if (product) { 
            return product
        }
        return id + " Este ID de producto no ha sido encontrado";
    }
}

//Se creará una instancia de la clase “ProductManager”

const productManager = new ProductManager(); 

//Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

console.log("Comprueba que el array inicial está vacío: ")
console.log(productManager.getProducts());

productManager.addProduct(product1); 
productManager.addProduct(product2); 
productManager.addProduct(product3); 
productManager.addProduct(product4, product5); 

console.log("Comprueba que arroja error al agregar productos con el mismo código: ")
productManager.addProduct(product4); 

//Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado

console.log("Comprueba que agrega productos al array: ")
console.log(productManager.getProducts());

//Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
console.log("Comprueba que al buscar por ID trae el producto: ")
console.log(productManager.getProductById(1))
console.log(productManager.getProductById(4672))