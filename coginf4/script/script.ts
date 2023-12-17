type Product = {
    name: string;
    price: number;
  };
  
  const products: Product[] = [];
  
  function addProduct() {
    const productNameInput = document.getElementById('productName') as HTMLInputElement;
    const productPriceInput = document.getElementById('productPrice') as HTMLInputElement;
    const addedProductsDisplay = document.getElementById('addedProductsDisplay');
  
    if (productNameInput && productPriceInput && addedProductsDisplay) {
      const name = productNameInput.value.trim();
      const price = parseFloat(productPriceInput.value.trim());
  
      if (name && !isNaN(price)) {
        products.push({ name, price });
        productNameInput.value = '';
        productPriceInput.value = '';
        console.log('Termék hozzáadva:', { name, price });
  
        
        addedProductsDisplay.innerHTML += `<p>${name}: HUF${price.toFixed(2)}</p>`;
      } else {
        console.error('Adj meg valós értékeket!');
      }
    }
  }
  
  function processProducts() {
    const productDisplay = document.getElementById('productDisplay');
  
    if (productDisplay) {
      if (products.length >= 3) {
        const cheapestProductName = products.reduce((prev, curr) => (prev.price < curr.price ? prev : curr)).name;
  
        const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
        const averagePrice = totalPrice / products.length;
  
        const priceDifferences = products.map(product => Math.pow(product.price - averagePrice, 2));
        const priceDispersion = Math.sqrt(priceDifferences.reduce((sum, diff) => sum + diff, 0) / products.length);
  
        productDisplay.innerHTML = `
          <h2>Termékinformáció</h2>
          <p>A legolcsóbb termék: ${cheapestProductName}</p>
          <p>A termékek átlagára: ${averagePrice.toFixed(2)}</p>
          <p>A termékek árainak szórása: ${priceDispersion.toFixed(2)}</p>
        `;
      } else {
        productDisplay.innerHTML = 'Kérlek adj meg legalább 3 terméket, árral.';
      }
    }
  }
  