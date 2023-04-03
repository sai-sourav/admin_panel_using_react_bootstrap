import React from 'react';
import { Button } from "react-bootstrap";
import { addProduct, removeCartItem } from '../../crudcrudapi';

export default function CartItem(props) {
    const {medname, desc, price, quantity} = props.product
    const clickHandler = async() => {
        await removeCartItem(props.product);
        await addProduct(props.product);
    }
  return (
    <tr key={props.key}>
      <td>{props.index}</td>
      <td>{medname}</td>
      <td>{desc}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td><Button type="danger" onClick={clickHandler}>remove</Button></td>
    </tr>
  )
}
