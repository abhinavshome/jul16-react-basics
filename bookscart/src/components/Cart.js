import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <table>
        <tr>
          <th>Item</th>
          <th>Qty</th>
          <th>Price</th>
        </tr>
        {cart.items.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.qty}</td>
            <td>{item.price}</td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td>Total Price</td>
          <td>{cart.totalPrice}</td>
        </tr>
      </table>
    </div>
  );
};

export default Cart;
