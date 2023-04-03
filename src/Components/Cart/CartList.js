import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import Table from "react-bootstrap/Table";
import { getCart } from "../../crudcrudapi";

export default function CartList(props) {
  const [cartproducts, updatecartProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const cart = await getCart();
        if (!cart) {
          return updatecartProducts([]);
        }
        return updatecartProducts(cart.items);
      } catch (err) {
        console.log(err);
        return updatecartProducts([]);
      }
    })();
  });
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Medicine Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartproducts.map((product, ind) => {
            return (
              <CartItem
                product={product}
                key={Math.random().toString()}
                index={ind + 1}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
