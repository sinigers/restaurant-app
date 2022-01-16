import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import * as productService from "../../services/productService";
import SectionComponent from "../Common/SectionComponent/SectionComponent";
import Product from "./Product/Product";

const Products = () => {
  const { state } = useLocation();
  const [products, setProducts] = useState(state ? state.products : []);
  useEffect(() => {
    if (!state) {
      productService
        .getAll()
        .then((result) => {
          setPoducts(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [state]);
  return (
    <div>
      <SectionComponent
        backgroundImage="/images/image_6.jpg"
        name="Catalog"
        title="Choose Product For Your Trip"
      />

      <section className="ftco-section bg-light">
        <div className="container">
          {products.length > 0 ? (
            <div className="row">
              {products.map((x) => (
                <Product key={x._id} product={x} />
              ))}
            </div>
          ) : (
            <p>
              {state ? "no available products for this dates" : "no products"}
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
