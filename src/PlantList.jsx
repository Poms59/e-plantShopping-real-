import React from 'react';
import './ProductList.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CreateSlice';

const PlantList = () => {
  const baseImageURL = '/shoppingreact/images';
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const disabledProductIds = cartItems.map((item) => item.id);
  const plantsArray = [
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
          name: 'Jasmine',
          imageUrl: `${baseImageURL}/jasmine.jpg`,
          description: 'Jasmine description',
          cost: '10',
        },
        {
          id: 13,
          name: 'Peace-Lilies',
          imageUrl: `${baseImageURL}/peace-lilies.jpg`,
          description: 'Peace-Lilies description',
          cost: '10',
        },
        {
          id: 14,
          name: 'Rosemary',
          imageUrl: `${baseImageURL}/rosemary.jpg`,
          description: 'Rosemary description',
          cost: '10',
        },
        {
          id: 15,
          name: 'Lemon Balm',
          imageUrl: `${baseImageURL}/lemon-balm.jpg`,
          description: 'Lemonbalm description',
          cost: '10',
        },
        {
          id: 16,
          name: 'Marigold',
          imageUrl: `${baseImageURL}/marigold.jpg`,
          description: 'Marigold description',
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
          name: 'Aloe Vera',
          imageUrl: `${baseImageURL}/aloe-vera.jpg`,
          description: 'Aloe-vera description',
          cost: '10',
        },
        {
          id: 22,
          name: 'Boston Fern',
          imageUrl: `${baseImageURL}/boston-fern.jpg`,
          description: 'Boston-fern description',
          cost: '10',
        },
        {
          id: 23,
          name: 'Rubber Plant',
          imageUrl: `${baseImageURL}/rubber-plant.jpg`,
          description: 'Rubber-plant description',
          cost: '10',
        },
        {
          id: 24,
          name: 'Snake Plant',
          imageUrl: `${baseImageURL}/snake-plant.jpg`,
          description: 'Snake-plant description',
          cost: '10',
        },
        {
          id: 25,
          name: 'Spider Plant',
          imageUrl: `${baseImageURL}/spider-plant.jpg`,
          description: 'Spider-plant description',
          cost: '10',
        },
        {
          id: 26,
          name: 'Mint',
          imageUrl: `${baseImageURL}/mint.jpg`,
          description: 'Mint description',
          cost: '10',
        },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
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
                    disabledProductIds.includes(plant.id) ? 'disabled' : ''
                  }`}
                  onClick={() => handleAddToCart(plant)}
                  disabled={disabledProductIds.includes(plant.id)}
                >
                  {disabledProductIds.includes(plant.id) ? 'Added' : 'Add'} to
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
