import { Link } from "react-router-dom";

import "./Card.css";

const Card = ({ product }) => {
  return (
    <div class="menus d-flex align-items-center">
      {/* <Link to={`/products/details/${product.id}`}> */}
      <div class="menu-img rounded-circle">
        <img class="img-fluid" src={product.imageURL} alt="" />
      </div>
      <div class="text-wrap">
        <div class="row align-items-start">
          <div class="col-8">
            <h4>{product.title}</h4>
          </div>
          <div class="col-4">
            <h4 class="text-muted menu-price">${product.price}</h4>
            <p class="text-muted menu-price">{product.weight}g</p>
          </div>
        </div>
        <p>
          {product.body} / {product.alergens}
        </p>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Card;
