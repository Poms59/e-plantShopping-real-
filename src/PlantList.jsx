import React, { useState } from 'react';
import './ProductList.css';
import { useDispatch } from 'react-redux';
import { addItem } from './CreateSlice';

const PlantList = () => {
  const baseImageURL = '/shoppingreact/images';
  const dispatch = useDispatch();
  const [disabledProducts, setDisabledProducts] = useState([]);
  const [plantsArray, setPlantsArray] = useState([
    {
      id: 1,
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          id: 11,
          name: 'Lavender',
          imageUrl: `${baseImageURL}/lavender.jpg`,
          description: 'Lavenders description',
          cost: '10',
        },
        {
          id: 12,
          name: 'Lavender',
          imageUrl: `${baseImageURL}/lavender.jpg`,
          description: 'Lavenders description',
          cost: '10',
        },
        {
          id: 13,
          name: 'Lavender',
          imageUrl: `${baseImageURL}/lavender.jpg`,
          description: 'Lavenders description',
          cost: '10',
        },
        {
          id: 14,
          name: 'Lavender',
          imageUrl: `${baseImageURL}/lavender.jpg`,
          description: 'Lavenders description',
          cost: '10',
        },
        {
          id: 15,
          name: 'Lavender',
          imageUrl: `${baseImageURL}/lavender.jpg`,
          description: 'Lavenders description',
          cost: '10',
        },
        {
          id: 16,
          name: 'Lavender',
          imageUrl: `${baseImageURL}/lavender.jpg`,
          description: 'Lavenders description',
          cost: '10',
        },
      ],
    },
    {
      id: 2,
      category: 'Air Purifying Plants',
      plants: [
        {
          id: 21,
          name: 'Lavender',
          imageUrl: `${baseImageURL}/lavender.jpg`,
          description: 'Lavenders description',
          cost: '10',
        },
        {
          id: 22,
          name: 'Lavender',
          imageUrl: `${baseImageURL}/lavender.jpg`,
          description: 'Lavenders description',
          cost: '10',
        },
        {
          id: 23,
          name: 'Lavender',
          imageUrl: `${baseImageURL}/lavender.jpg`,
          description: 'Lavenders description',
          cost: '10',
        },
        {
          id: 24,
          name: 'Lavender',
          imageUrl: `${baseImageURL}/lavender.jpg`,
          description: 'Lavenders description',
          cost: '10',
        },
        {
          id: 25,
          name: 'Lavender',
          imageUrl: `${baseImageURL}/lavender.jpg`,
          description: 'Lavenders description',
          cost: '10',
        },
        {
          id: 26,
          name: 'Lavender',
          imageUrl: `${baseImageURL}/lavender.jpg`,
          description: 'Lavenders description',
          cost: '10',
        },
      ],
    },
  ]);

  const handleAddToCart = (plant) => {
    console.log('pressed');
    dispatch(addItem(plant));
    setDisabledProducts([...disabledProducts, plant.id]);
  };
  return (
    <div className="product-grid">
      {plantsArray.map((category) => (
        <div key={category.id}>
          <h1>
            <div className="product-category">{category.category}</div>
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
                <button
                  className={`product-button ${
                    disabledProducts.includes(plant.id) ? 'disabled' : ''
                  }`}
                  onClick={() => handleAddToCart(plant)}
                  disabled={disabledProducts.includes(plant.id)}
                >
                  {disabledProducts.includes(plant.id) ? 'Added' : 'Add'} to
                  Cart
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
