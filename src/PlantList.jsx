import React, { useState } from 'react';
import './ProductList.css';

const PlantList = () => {
  const baseImageURL = '/shoppingreact/images';
  const [plantsArray, setPlantsArray] = useState([
    {
      id: 1,
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          id: 1,
          name: 'Lavender',
          imageUrl: `${baseImageURL}/lavender.jpg`,
          description: 'Lavenders description',
          cost: '10',
        },
        {
          id: 2,
          name: 'Lavender',
          imageUrl: `${baseImageURL}/lavender.jpg`,
          description: 'Lavenders description',
          cost: '10',
        },
        {
          id: 2,
          name: 'Lavender',
          imageUrl: `${baseImageURL}/lavender.jpg`,
          description: 'Lavenders description',
          cost: '10',
        },
        {
          id: 1,
          name: 'Lavender',
          imageUrl: `${baseImageURL}/lavender.jpg`,
          description: 'Lavenders description',
          cost: '10',
        },
        {
          id: 2,
          name: 'Lavender',
          imageUrl: `${baseImageURL}/lavender.jpg`,
          description: 'Lavenders description',
          cost: '10',
        },
        {
          id: 2,
          name: 'Lavender',
          imageUrl: `${baseImageURL}/lavender.jpg`,
          description: 'Lavenders description',
          cost: '10',
        },
      ],
    },
  ]);

  const handleAddToCart = () => {};
  return (
    <div className="product-grid">
      {plantsArray.map((category) => (
        <div key={category.id}>
          <h1>
            <div>{category.category}</div>
          </h1>
          <div className="product-list">
            {category.plants.map((plant) => (
              <div className="product-card" key={plant.id}>
                <div className="product-title">{plant.name}</div>
                <div className="product-image-container">
                  <img
                    src={plant.imageUrl}
                    className="product-image"
                    alt="lavender"
                  />
                </div>
                <div className="product-price">${plant.cost}</div>
                <div className="product-description">{plant.description}</div>
                <button className="product-button" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlantList;
