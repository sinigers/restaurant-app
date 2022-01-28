import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getOne } from "../../../services/productService";
import { edit } from "../../../services/productService";

import makeAnimated from "react-select/animated";
import Select from "react-select";

import { optionsTypes } from "../Create/SelectOptions/SelectOption";
import { optionsAlergens } from "../Create/SelectOptions/SelectOption";
import { optionsUnits } from "../Create/SelectOptions/SelectOption";

// import "./Edit.css";
// import "../edit/SelectOption/SelectOption.css";

const Edit = () => {
  const animatedComponents = makeAnimated();
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState();
  const [selectedValue, setSelectedValue] = useState([]);
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    getOne(productId).then((result) => {
      setProduct(result);
    });
  }, []);

  useEffect(() => {
    if (error !== "") {
      setError("");
    }
  }, [error]);
  // const valueSelectHandler = (val) => {
  //   setCategories(val);
  //   setSelectedValue(val.map((x) => x.value));
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    const productData = Object.fromEntries(new FormData(e.target));
    // const {
    //   title,
    //   body,
    //   alergens,
    //   weight,
    //   unit,
    //   type,
    //   price,
    //   imageURL
    // } = Object.fromEntries(new FormData(e.target));

    edit(
      // {
      //   title,
      //   body,
      //   alergens,
      //   weight,
      //   unit,
      //   type,
      //   price,
      //   imageURL
      // },
      productData,
      productId
    ).then((result) => {
      // console.log(productData);
      // console.log("----");
      // console.log(result);
      // navigate(`/details/${product._id}`);
      navigate(`/menu`);
    });
  };

  return (
    <div className="create">
      <h2>Edit Product</h2>
      <form onSubmit={submitHandler}>
        <label for="floatingSelect">Product category:</label>
        {/* <input type="text" name="type" /> */}
        <div className="col-sm-6">
          <Select
            components={animatedComponents}
            options={optionsTypes}
            defaultValue={product.type}
            className="basic-single"
            name="type"
            class="form-select"
          />
        </div>

        {/* <label>Title:</label> */}
        <div class="form-floating mb-3">
          <input
            name="title"
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Title"
            defaultValue={product.title}
          />
          <label for="floatingInput">Title</label>
        </div>
        <div class="form-floating mb-3">
          <input
            name="price"
            type="number"
            class="form-control"
            id="floatingInput"
            placeholder="Price"
            defaultValue={product.price}
          />
          <label for="floatingInput">Price</label>
        </div>
        <div class="form-floating mb-3">
          <textarea
            name="body"
            type="number"
            class="form-control"
            id="floatingInput"
            placeholder="Description"
            defaultValue={product.body}
          />
          <label for="floatingInput">Product description:</label>
        </div>
        <div class="form-floating mb-3">
          <input
            name="weight"
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Weight"
            defaultValue={product.weight}
          />
          <label for="floatingInput">Weight</label>
        </div>

        <label>Product unit:</label>
        <div className="col-sm-6">
          <Select
            name="unit"
            components={animatedComponents}
            options={optionsUnits}
            className="basic-single"
            defaultValue={product.unit}
          />
        </div>

        <label>Product alergens:</label>
        <div className="col-sm-6">
          <Select
            defaultValue
            isMulti
            // onChange={valueSelectHandler}
            components={animatedComponents}
            options={optionsAlergens}
            className="basic-multi-select"
            name="alergens"
            defaultValue={product.alergens}
          />
        </div>

        <div class="form-floating mb-3">
          <input
            name="imageURL"
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="imageURL"
            defaultValue={product.imageURL}
          />
          <label for="floatingInput">imageURL</label>
        </div>

        {!isPending && (
          <button class="btn btn-primary btn-shadow btn-lg">Update</button>
        )}
        {isPending && <button disabled>Adding product ...</button>}
      </form>
    </div>
  );
};

export default Edit;
