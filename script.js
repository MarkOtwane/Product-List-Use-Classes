class Products{
    constructor(image, name, description, price){
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price
    }

    displayPage(){
        const productList = document.getElementById("right");
        productList.innerHTML += `
        <div>
            <img src= "${this.image}">
            <button>Add to Cart</button>
                <p>${this.name}</p>
                <h4>${this.description}</h4>
                <span>$ ${this.price}</span>
                </div>
        `

    }

    
}

// Create objects using arrays
const product = [
    new Products("food1.png","Waffle", "Waffle with Berries", "6.50"),
    new Products("food1.png", "Creme Brulee", "Vanilla Bean Creme Brulee" ,"7.00"),
    new Products("food1.png", "Macaron", "Macaron Mix of Five","8.00"),
    new Products("food1.png", "Tiramisu", "Classic Tiramisu" ,"5.50"),
    new Products("food1.png", "Baklava", "Pistachio Baklava" ,"4.00"),
    new Products("food1.png", "Pie", "Lemon Meringeu Pie" ,"5.00"),
    new Products("food1.png", "Cake", "Red Velvet Cake" ,"4.50"),
    new Products("food1.png", "Brownie","Salted Caramel Brownie" ,"5.50"),
    new Products("food1.png", "Panna cotta", "Vanilla Panna Cotta" ,"6.50")

];
// looping through the array 
product.forEach(function(item){
    item.displayPage()
});

// left
class Cart{
    constructor(head, image, message){
        this.image = image;
        this.head = head;
        this.message = message;
    }

    displayLeft(){
        const cart = document.getElementById("left");
        left.innerHTML += `
        <div class="all">
            <h1>${this.head}</h1>
            <div>
            <img src= "${this.image}">
            <p>${this.message}</p>
            </div>
            </div>
        `

    }

    
}

// Create objects using arrays
const output = [
    new Cart("Your Cart(0)","food1.png", "Your added items will display here")

];
// looping through the array 
output.forEach(function(leftout){
    leftout.displayLeft()
});