import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CreateSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.cost * item.quantity,
    0
  );
  const handleUpdateQuantity = (plant, diff) => {
    dispatch(updateQuantity({ plant, diff }));
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <h2>Total Cart Amount: ${totalAmount}</h2>
      <div>
        <ul>
          {cartItems.map((plant) => (
            <li key={plant.id}>
              <img src={plant.image} alt="" />
              <div>
                <p>{plant.name}</p>
                <p>{plant.cost}</p>
                <div className="quantity-control">
                  <button onClick={() => handleUpdateQuantity(plant, -1)}>
                    -
                  </button>
                  <p>{plant.quantity}</p>
                  <button onClick={() => handleUpdateQuantity(plant, 1)}>
                    +
                  </button>
                </div>
                <p>Total: ${plant.quantity * plant.cost}</p>
                <button onClick={() => handleRemoveItem(plant.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CartItem;
