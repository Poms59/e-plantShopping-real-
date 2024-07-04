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
          imageUrl: `https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
          description: 'Calming scent, used in aromatherapy',
          cost: '10',
        },
        {
          id: 12,
          name: 'Jasmine',
          imageUrl: `https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
          description: 'Sweet fragrance, promotes relaxation',
          cost: '10',
        },
        {
          id: 13,
          name: 'Peace Lily',
          imageUrl: `https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg`,
          description: 'Removes mold spores and purifies the air',
          cost: '10',
        },
        {
          id: 14,
          name: 'Rosemary',
          imageUrl: `https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg`,
          description: 'Invigorating scent, often used in cooking',
          cost: '10',
        },
        {
          id: 15,
          name: 'Lemon Balm',
          imageUrl: `https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg`,
          description: 'Lemonbalm description',
          cost: '10',
        },
        {
          id: 16,
          name: 'Marigold',
          imageUrl: `https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg`,
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
          imageUrl: `https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg`,
          description: 'Purifies the air and has healing properties for skin',
          cost: '10',
        },
        {
          id: 22,
          name: 'Boston Fern',
          imageUrl: `https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg`,
          description: 'Adds humidity to the air and removes toxins',
          cost: '10',
        },
        {
          id: 23,
          name: 'Rubber Plant',
          imageUrl: `https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg`,
          description: 'Easy to care for and effective at removing toxins',
          cost: '10',
        },
        {
          id: 24,
          name: 'Snake Plant',
          imageUrl: `https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg`,
          description: 'Produces oxygen at night, improving air quality',
          cost: '10',
        },
        {
          id: 25,
          name: 'Spider Plant',
          imageUrl: `https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg`,
          description: 'Filters formaldehyde and xylene from the air',
          cost: '10',
        },
        {
          id: 26,
          name: 'Mint',
          imageUrl: `https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg`,
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