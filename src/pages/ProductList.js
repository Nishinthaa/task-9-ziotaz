import React from 'react';


const ProductList = ({ products, addToCart, searchQuery, selectedCategory }) => {
  const filteredProducts = products.filter(
    (product) =>
      (!selectedCategory || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="products-page">
      <h2>Products</h2>
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;






