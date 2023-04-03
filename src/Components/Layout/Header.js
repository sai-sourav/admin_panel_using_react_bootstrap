import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartContext from '../../Context/cart-context';

export default function Header() {
  const cartctx = useContext(CartContext);
  const clickhandler = () => {
    cartctx.updateshowCart();
  }
  return (
    <Navbar bg="dark" sticky='top' expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Button type='primary' onClick={clickhandler}>Cart</Button>
      </Container>
    </Navbar>
  )
}
