import { useState, useEffect } from "react";
import Loader from "../../Loader/Loader";

import { getAllProducts } from "../../../services/productService";
import Card from "./Card/Card";

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getAllProducts().then((result) => {
      setProducts(result);
      setLoader(false);
    });
  }, []);
  // console.log(products);

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

              <div>
                {loader ? (
                  <Loader />
                ) : (
                  <div>
                    {products.map((x) => (
                      <Card key={x._id} product={x} />
                    ))}
                  </div>
                )}
              </div>

              {/* {products.map((x) => (
                <Card key={x._id} product={x} />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
