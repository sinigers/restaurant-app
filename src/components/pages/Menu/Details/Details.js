import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

// import "../Details/Details.css";

import { getOne } from "../../../../services/productService";
import { deleteOne } from "../../../../services/productService";

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
    const productId = product._id;

    if (product.owner === user._id) {
      deleteOne(productId).then((result) => {
        navigate("/");
      });
    } else {
      navigate(`/details/${productId}`);
    }
  };

  return (
    <>
      <section className="section section--details">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="section__title section__title--mb">
                {product.title}
              </h1>
            </div>

            <div className="col-12 col-xl-6">
              <div className="card card--details">
                <div className="row">
                  <div className="col-12 col-sm-5 col-md-4 col-lg-3 col-xl-5">
                    <div className="card__cover">
                      <img src={product.imageUrl} alt="" />
                    </div>
                  </div>

                  <div className="col-12 col-md-8 col-lg-9 col-xl-7">
                    <div className="card__content">
                      <ul className="card__meta">
                        <li>
                          <span>Director:</span> {product.director}
                        </li>
                        <li>
                          <span>Genre:</span>
                          {genre.map((x) => (
                            <Link
                              key={x._id}
                              to={`/catalog/category/${x.toLowerCase()}`}
                            >
                              {x}
                            </Link>
                          ))}
                        </li>
                        <li>
                          <span>Release year:</span> {product.year}
                        </li>
                        <li>
                          <span>Running time:</span> {product.duration} min
                        </li>
                      </ul>

                      <div className="row-btn">
                        {user._id === product.owner ? (
                          <>
                            <Link to={`/edit/${product._id}`}>
                              <button className="form__btn">Edit</button>
                            </Link>
                            <button
                              className="form__btn "
                              onClick={onDeleteHendler}
                            >
                              Delete
                            </button>
                          </>
                        ) : (
                          <div className="comments__rate">
                            <p></p>
                          </div>
                        )}
                      </div>

                      <div className="row-btn"></div>
                      <div className="card__description">
                        {product.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
