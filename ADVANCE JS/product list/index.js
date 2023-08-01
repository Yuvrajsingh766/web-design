// Function to create product cards
function createProductCard(product) {
    return `
    <div class="product-card">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <img src="${product.image}" alt="${product.title}" width="200" height="200">
    </div>
  `;
}

// Function to display products in the HTML
function displayProducts(products) {
    const productListDiv = document.getElementById("product-list");
    products.forEach((product) => {
        const productCard = createProductCard(product);
        productListDiv.innerHTML += productCard;
    });
}

// Fetch products from the API and display them
fetch('https://fakestoreapi.com/products')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
        return response.json();
    })
    .then((data) => {
        displayProducts(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
