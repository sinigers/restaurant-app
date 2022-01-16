import { useState, useEffect } from "react";

import { getAllProducts } from "../../../services/productService";
import Card from "./Card/Card";

const Menu = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((result) => {
      setProducts(result);
    });
  }, []);

  return (
    <>
      <div>
        <div className="catalog">
          <div className="container">
            <div className="row row--grid">
              <div class="heading-section text-center">
                <span class="subheading">Specialties</span>
                <h2>Our Menu</h2>
              </div>
              <div class="heading-menu">
                <h3 class="text-center mb-5">Breakfast</h3>
              </div>
              {products.map((x) => (
                <Card key={x._id} product={x} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
