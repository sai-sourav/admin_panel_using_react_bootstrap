import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addProduct } from "../../crudcrudapi";

import "./addProduct.css";

export default function AddProduct(props) {
  const mednameref = useRef();
  const descref = useRef();
  const priceref = useRef();
  const quantityref = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const obj = {
      medname: mednameref.current.value,
      desc: descref.current.value,
      price: priceref.current.value,
      quantity: quantityref.current.value,
    };
    try {
      await addProduct(obj);
      e.target.reset();
      props.refresh();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="addproduct">
      <Form onSubmit={submitHandler}>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="medname">
            {/* <Form.Label>Medicine Name</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="Enter Name"
              ref={mednameref}
            />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="desc">
            <Form.Control type="text" placeholder="Description" ref={descref} />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="price">
            <Form.Control type="text" placeholder="Price" ref={priceref} />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="quantity">
            <Form.Control
              type="text"
              placeholder="Quantity"
              ref={quantityref}
            />
          </Form.Group>
          <Col>
            <Button variant="primary" type="submit">
              Add Product
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
