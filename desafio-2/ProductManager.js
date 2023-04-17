//Importo solamente promesas
import { promises as fs } from 'fs';

//La clase debe contar con una variable this.path, el cual se inicializará desde el constructor y debe recibir la ruta a trabajar desde el momento de generar su instancia.
class ProductManager {
    constructor(path) {
        this.path = path
        this.products = []
    }

    //Debe tener un método addProduct el cual debe recibir un objeto con el formato previamente especificado, asignarle un id autoincrementable y guardarlo en el arreglo (recuerda siempre guardarlo como un array en el archivo).
    async addProduct(product) {
        const prodsJSON = await fs.readFile(this.path, 'utf-8')
        const prods = JSON.parse(prodsJSON)
        producto.id = ProductManager.incrementarID()
        prods.push(product)
        await fs.writeFile(this.path, JSON.stringify(prods))
        return "Producto creado"
    }

    /*     async addProduct(product) {
        if (this.products.find(producto => producto.code == product.code)) {
            return "Este producto ya existe"
        } else {
            this.products.push(product)
        }
    } */
    //Debe tener un método getProducts, el cual debe leer el archivo de productos y devolver todos los productos en formato de arreglo.
    async getProducts() {
        const products = await fs.readFile(this.path, 'utf-8')
        const prods = JSON.parse(products)
        console.log(prods)
    }

    //Debe tener un método getProductById, el cual debe recibir un id, y tras leer el archivo, debe buscar el producto con el id especificado y devolverlo en formato objeto
    async getProductById(id) {
        const products = await fs.readFile(this.path, 'utf-8')
        const product = this.products.find(producto => producto.id == id)

        if (product) { 
            return product
        }

        return "Producto no encontrado"
    }

    //Debe tener un método updateProduct, el cual debe recibir el id del producto a actualizar, así también como el campo a actualizar (puede ser el objeto completo, como en una DB), y debe actualizar el producto que tenga ese id en el archivo. NO DEBE BORRARSE SU ID 

    async updateProduct(id, { title, description, price, thumbnail, code, stock }) {
        const prodsJSON = await fs.readFile(this.path, 'utf-8')
        const prods = JSON.parse(prodsJSON)
        if (prods.some(prod => prod.id === parseInt(id))) {
            let index = prods.findIndex(prod => prod.id === parseInt(id))
            prods[index].title = title
            prods[index].description = description
            prods[index].price = price
            prods[index].thumbnail = thumbnail
            prods[index].code = code
            prods[index].stock = stock
            await fs.writeFile(this.path, JSON.stringify(prods))
            return "Producto actualizado"
        } else {
            return "Producto no encontrado"
        }
    }
    

    //Debe tener un método deleteProduct, el cual debe recibir un id y debe eliminar el producto que tenga ese id en el archivo.
    async deleteProduct(id) {
        const prodsJSON = await fs.readFile(this.path, 'utf-8')
        const prods = JSON.parse(prodsJSON)
        if (prods.some(prod => prod.id === parseInt(id))) {
            const prodsFiltrados = prods.filter(prod => prod.id !== parseInt(id))
            await fs.writeFile(this.path, JSON.stringify(prodsFiltrados))
            return "Producto eliminado"
        } else {
            return "Producto no encontrado"
        }
    }
}

//Debe guardar objetos con el siguiente formato
class Product {
    constructor(title = "", description = "", price = 0, thumbnail = "", code = "", stock = 0) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = Product.incrementID()
    }

    static incrementID() {
        if (this.idIncrement) { //Existe esta propiedad
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }
}

const product1 = new Product ("Polera Marco Antonio 100% Algodón", "Polera con la leyenda 'Si no te hubieras ido' disponible en diferentes colores", 10990, "", "pol-001", 10)
const product2 = new Product ("Polera Loba 100% Algodón", "Polera con la leyenda 'Por que una loba como yo, no ta pa tipos como tú'", 9990, "", "pol-002", 15)
const product3 = new Product ("Tazón 'Huele a Peligro'", "Tazón de loza con leyenda a prueba de temperatura", 7990, "", "tzn-001", 6)
const product4 = new Product ("Tazón 'Mujeres, lo que nos pidan, PODEMOS'", "Tazón de loza con leyenda a prueba de temperatura", 7990, "", "tzn-002", 4)
const product5 = new Product ("Delantal 'Mil pedazos de mi corazón, volaron por toda la habitación'", "Cocinarás mejor y sacarás adelante todo el potencial de despecho", 15990, "", "dln-001", 20)
const product6 = new Product ("Delantal 'Quizás la casa, la rutina, se ha convertido en tu enemiga'", "Cocinarás mejor y sacarás adelante todo el potencial de despecho de la gran Ana Gabriel y Vicky Carr", 10990, "", "dln-002", 10)
const product7 = new Product();


const productManager = new ProductManager('info.txt')
productManager.getProducts().then(prod => console.log(prod))
