
import React, { useState} from 'react';
import './cart.css';

const Cart = () => {
  const cartItemsLocal = JSON.parse(localStorage.getItem('cart'));
  const [newCartItems, setNewCartItems] = useState(cartItemsLocal);
  const [quantities, setQuantities] = useState(
    newCartItems.map((item) => item.quantity)
  );

  const less = (index) => {
    if (quantities[index] > 1) {
      setQuantities((prevQuantities) =>
        prevQuantities.map((quantity, i) => (i === index ? quantity - 1 : quantity))
      );

      const updatedCartItems = newCartItems.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity - 1 } : item
      );
      setNewCartItems(updatedCartItems);
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    }
  };

  const more = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) => (i === index ? quantity + 1 : quantity))
    );

    const updatedCartItems = newCartItems.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setNewCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const getTotalAmount = () => {
    let total = 0;
    for (let i = 0; i < newCartItems.length; i++) {
      total += newCartItems[i].price * quantities[i];
    }
    return total;
  };

  const removeBtn = (index) => {
    const filteredCartItems = newCartItems.filter((_, i) => i !== index);
    setNewCartItems(filteredCartItems);
    setQuantities((prevQuantities) => prevQuantities.filter((_, i) => i !== index));
    localStorage.setItem('cart', JSON.stringify(filteredCartItems));
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Image</th>
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {newCartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>
                <button className="removeBtn" onClick={() => removeBtn(index)}>
                  Remove
                </button>
              </td>
              <td>${item.price}</td>
              <td>
                <button className="q-btn" onClick={() => less(index)}>
                  -
                </button>
                {quantities[index]}
                
                <button className="q-btn" onClick={() => more(index)}>
                  +
                </button>
              </td>
              <td>${item.price * quantities[index]}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
          <td colSpan="4">Total:</td>
            <td>${getTotalAmount()}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;

