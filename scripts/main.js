let productsHTML = ``;

products.forEach((product) => {

  
  productsHTML += `
  <div class="product-container wrapper">
        <div class="product-image-container hover-animation">
          <img class = "product-image-back js-product-image" 
           src="${product.secImage}">
          <img class = "product-image js-product-image" 
            src="${product.image}">
        </div>
        <div class="product-name">
         ${product.name}
        </div>
        <div class="product-price">
         $${(product.priceCents / 100).toFixed(2)}
        </div> 
        <div class="product-spacer"></div>
      </div>`;
});


document.querySelector('.js-products-grid').innerHTML = productsHTML;


