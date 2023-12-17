var products = [];
function addProduct() {
    var productNameInput = document.getElementById('productName');
    var productPriceInput = document.getElementById('productPrice');
    var addedProductsDisplay = document.getElementById('addedProductsDisplay');
    if (productNameInput && productPriceInput && addedProductsDisplay) {
        var name_1 = productNameInput.value.trim();
        var price = parseFloat(productPriceInput.value.trim());
        if (name_1 && !isNaN(price)) {
            products.push({ name: name_1, price: price });
            productNameInput.value = '';
            productPriceInput.value = '';
            console.log('Termék hozzáadva:', { name: name_1, price: price });
            addedProductsDisplay.innerHTML += "<p>".concat(name_1, ": HUF").concat(price.toFixed(2), "</p>");
        }
        else {
            console.error('Adj meg valós értékeket!');
        }
    }
}
function processProducts() {
    var productDisplay = document.getElementById('productDisplay');
    if (productDisplay) {
        if (products.length >= 3) {
            var cheapestProductName = products.reduce(function (prev, curr) { return (prev.price < curr.price ? prev : curr); }).name;
            var totalPrice = products.reduce(function (sum, product) { return sum + product.price; }, 0);
            var averagePrice_1 = totalPrice / products.length;
            var priceDifferences = products.map(function (product) { return Math.pow(product.price - averagePrice_1, 2); });
            var priceDispersion = Math.sqrt(priceDifferences.reduce(function (sum, diff) { return sum + diff; }, 0) / products.length);
            productDisplay.innerHTML = "\n          <h2>Term\u00E9kinform\u00E1ci\u00F3</h2>\n          <p>A legolcs\u00F3bb term\u00E9k: ".concat(cheapestProductName, "</p>\n          <p>A term\u00E9kek \u00E1tlag\u00E1ra: ").concat(averagePrice_1.toFixed(2), "</p>\n          <p>A term\u00E9kek \u00E1rainak sz\u00F3r\u00E1sa: ").concat(priceDispersion.toFixed(2), "</p>\n        ");
        }
        else {
            productDisplay.innerHTML = 'Kérlek adj meg legalább 3 terméket, árral.';
        }
    }
}
