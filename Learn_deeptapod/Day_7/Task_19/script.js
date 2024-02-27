const products = [
    { id: 1, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"] },
    { id: 2, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"] },
    { id: 3, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] },
];

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const productList = document.getElementById("productList");

function displayProducts(filteredProducts) {
    productList.innerHTML = "";
    if (filteredProducts.length === 0) {
        const noProductsMessage = document.createElement("p");
        noProductsMessage.textContent = "No products found.";
        productList.appendChild(noProductsMessage);
    } else {
        filteredProducts.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.textContent = `${product.name} (${product.category}) - $${product.price}`;
            productList.appendChild(productDiv);
        });
    }
}

function handleFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === "" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    displayProducts(filteredProducts);
}
searchInput.addEventListener("input", handleFilters);
categoryFilter.addEventListener("change", handleFilters);
handleFilters(); 
