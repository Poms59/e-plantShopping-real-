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
          description: 'Calming scent, used in aromatherapy',
          cost: '10',
        },
        {
          id: 12,
          name: 'Jasmine',
          imageUrl: `${baseImageURL}/jasmine.jpg`,
          description: 'Sweet fragrance, promotes relaxation',
          cost: '10',
        },
        {
          id: 13,
          name: 'Peace Lily',
          imageUrl: `${baseImageURL}/peace-lilies.jpg`,
          description: 'Removes mold spores and purifies the air',
          cost: '10',
        },
        {
          id: 14,
          name: 'Rosemary',
          imageUrl: `${baseImageURL}/rosemary.jpg`,
          description: 'Invigorating scent, often used in cooking',
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
          description: 'Purifies the air and has healing properties for skin',
          cost: '10',
        },
        {
          id: 22,
          name: 'Boston Fern',
          imageUrl: `${baseImageURL}/boston-fern.jpg`,
          description: 'Adds humidity to the air and removes toxins',
          cost: '10',
        },
        {
          id: 23,
          name: 'Rubber Plant',
          imageUrl: `${baseImageURL}/rubber-plant.jpg`,
          description: 'Easy to care for and effective at removing toxins',
          cost: '10',
        },
        {
          id: 24,
          name: 'Snake Plant',
          imageUrl: `${baseImageURL}/snake-plant.jpg`,
          description: 'Produces oxygen at night, improving air quality',
          cost: '10',
        },
        {
          id: 25,
          name: 'Spider Plant',
          imageUrl: `${baseImageURL}/spider-plant.jpg`,
          description: 'Filters formaldehyde and xylene from the air',
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
