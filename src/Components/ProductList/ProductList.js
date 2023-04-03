import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { getProducts } from "../../crudcrudapi";
import ProductItem from "./ProductItem";

export default function ProductList(props) {
  const [products, updateProducts] = useState([])
    useEffect(() => {
      (async () => {
        try{
        const product = await getProducts();
        if (product){
          updateProducts(product.items);
        }
        }catch(err){
          console.log(err);
          updateProducts([])
        }
      })();
    },[updateProducts, props.refresh])
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
          {products.map((product, ind) => {
            return <ProductItem key={Math.random().toString} product={product} index={ind + 1} />
          })}
          
        </tbody>
      </Table>
    </div>
  );
}
