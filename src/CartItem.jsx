import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CreateSlice';
import './ProductList.css';

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
              <div className="cart-card">
                <div className="cart-img-container">
                  <img className="cart-img" src={plant.imageUrl} alt="" />
                </div>
                <div className="cart-detail-container">
                  <h2>{plant.name}</h2>
                  <p className="product-price">${plant.cost}</p>
                  <div className="quantity-control">
                    <button
                      className="quantity-control-btn"
                      onClick={() => handleUpdateQuantity(plant, -1)}
                    >
                      -
                    </button>
                    <p className="quantity-control-text">{plant.quantity}</p>
                    <button
                      className="quantity-control-btn"
                      onClick={() => handleUpdateQuantity(plant, 1)}
                    >
                      +
                    </button>
                  </div>
                  <h3>Total: ${plant.quantity * plant.cost}</h3>
                  <button
                    className="cart-remove-btn"
                    onClick={() => handleRemoveItem(plant.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-btn-container">
          <button className="cart-btn">Continue Shopping</button>
        </div>
        <div className="cart-btn-container">
          <button className="cart-btn">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
