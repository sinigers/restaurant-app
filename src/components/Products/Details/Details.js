import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import "./Details.css";

import { getOne } from "../../../services/productService";
import { deleteOne } from "../../../services/productService";

const Details = () => {
  const navigate = useNavigate();

  let { productId } = useParams();

  const [product, setProduct] = useState([]);

  window.scrollTo({
    top: 0,
    behavior: "auto"
  });

  useEffect(() => {
    getOne(productId).then((result) => {
      setProduct(result);
    });
  }, [productId]);

  const onDeleteHendler = () => {
    deleteOne(productId).then((result) => {
      navigate("/");
    });
  };

  return (
    <div>
      <div class="row mt-5">
        <div class="col-lg-5 col-md-6 align-self-center py-5">
          <div class="dishes-text">
            <h3>
              <span>{product.title}</span>
            </h3>
            <h3>{product.type}</h3>
            <p class="pt-3">{product.body}</p>
            <h3 class="special-dishes-price">${product.price}</h3>
            <Link to="#" class="btn-primary mt-3">
              edit
            </Link>

            <Link to="#" onClick={onDeleteHendler} class="btn-primary mt-3">
              delete
            </Link>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-2 col-md-6 align-self-center mt-4 mt-md-0">
          <img
            src="https://cdn3.photostockeditor.com/c/0711/food-beef-steak-with-fork-cutlery-cutlery-image.jpg"
            alt=""
            class="img-fluid shadow w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
