import React from "react";
import { Button } from "react-bootstrap";
import { addItemToCart } from "../../crudcrudapi";

export default function ProductItem(props) {
    const {medname, desc, price, quantity} = props.product
    const clickHandler = async() => {
        await addItemToCart(props.product);
    }
  return (
    <tr key={props.key}>
      <td>{props.index}</td>
      <td>{medname}</td>
      <td>{desc}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td><Button type="success" onClick={clickHandler}>Add Item to bill</Button></td>
    </tr>
  );
}
