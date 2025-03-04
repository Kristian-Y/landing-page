const products = [
    {
      id: 1,
      name: "Gaming Mouse RGB",
      price: 49.99,
      image: "./imgs/mouse.jpg",
      category: "Accessories",
      description: "High-performance gaming mouse with customizable RGB lighting.",
      rating: 4.8,
      stock: 25,
      colors: ["#00E5FF", "#FF007F", "#121212"]
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 89.99,
      image: "./imgs/keyboard.jpg",
      category: "Accessories",
      description: "RGB mechanical keyboard with customizable keys and fast response time.",
      rating: 4.7,
      stock: 15,
      colors: ["#FF2E63", "#1F1F1F", "#00ADB5"]
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: 129.99,
      image: "wireless-headphones.jpg",
      category: "Audio",
      description: "Premium noise-canceling wireless headphones with deep bass.",
      rating: 4.6,
      stock: 10,
      colors: ["#181818", "#D4AF37", "#A8A8A8"]
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 199.99,
      image: "smartwatch.jpg",
      category: "Wearables",
      description: "Stylish smartwatch with fitness tracking and long battery life.",
      rating: 4.9,
      stock: 8,
      colors: ["#2C2C2C", "#8AB661", "#F4A261"]
    },
    {
      id: 5,
      name: "4K Ultra HD Monitor",
      price: 299.99,
      image: "4k-monitor.jpg",
      category: "Displays",
      description: "32-inch 4K monitor with ultra-low latency and high contrast.",
      rating: 4.8,
      stock: 5,
      colors: ["#0D0D0D", "#232323", "#00E5FF"]
    }
  ];
  
let productList = document.getElementById("products")
localStorage.setItem('products', products)
productList.innerHTML = ''
products.forEach(product => {
    productList.innerHTML += `
        <div class="product" data-aos="fade-down" id="${product.id}">
            <img src="${product.image}" alt="Product 1">
            <h3>${product.name}</h3>
            <p>${product.price}$</p>
            <div class="btns">
                    <a href="">buy</a>
                    <a href="" id="">info</a>
            </div>
        </div>
    ` 
    document.addEventListener("click", () => {
      localStorage.setItem("c-item", product.id)
    })
});
  