import { useState, useEffect } from "react";
import "./CreateProduct.css";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { create } from "../../../services/productService";
import { optionsTypes } from "./SelectOptions/SelectOption";
import { optionsAlergens } from "./SelectOptions/SelectOption";
import { optionsUnits } from "./SelectOptions/SelectOption";

const Create = () => {
  const animatedComponents = makeAnimated();
  const [type, setType] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (error !== "") {
      setError("");
    }
  }, [error]);

  const valueSelectHandler = (val) => {
    setSelectedValue(val.map((x) => x.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      title,
      price,
      body,
      weight,
      unit,
      alergens,
      imageURL,
      type
    } = Object.fromEntries(new FormData(e.currentTarget));

    create({
      title,
      price,
      body,
      weight,
      unit,
      alergens,
      imageURL,
      type
    }).then((data) => {
      navigate("/menu");
    });
  };

  return (
    <div className="create">
      <h2>Add new Product</h2>
      <form onSubmit={handleSubmit}>
        <label for="floatingSelect">Product category:</label>
        {/* <input type="text" name="type" /> */}
        <div className="col-sm-6">
          <Select
            components={animatedComponents}
            options={optionsTypes}
            defaultValue={optionsTypes[0]}
            className="basic-single"
            classNamePrefix="Select genre"
            name="type"
            class="form-select"
          />
        </div>

        <div class="form-floating mb-3">
          <select class="form-select" id="floatingSelect">
            <option selected>Breakfast</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label for="floatingSelect">Product category:</label>
        </div>

        {/* <label>Title:</label> */}
        <div class="form-floating mb-3">
          <input
            name="title"
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Title"
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
          />
          <label for="floatingInput">Price</label>
        </div>
        <div class="form-floating mb-3">
          <textarea
            name="body"
            type="number"
            class="form-control"
            id="floatingInput"
            placeholder="Price"
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
          />
          <label for="floatingInput">Weight</label>
        </div>

        <label>Product unit:</label>
        <div className="col-sm-6">
          <Select
            name="unit"
            defaultValue
            components={animatedComponents}
            options={optionsUnits}
            className="basic-single"
            classNamePrefix="Select genre"
            defaultValue={optionsUnits[0]}
          />
        </div>

        <label>Product alergens:</label>
        <div className="col-sm-6">
          <Select
            defaultValue
            isMulti
            onChange={valueSelectHandler}
            components={animatedComponents}
            options={optionsAlergens}
            className="basic-multi-select"
            classNamePrefix="Select genre"
            name="alergens"
          />
        </div>

        <div class="form-floating mb-3">
          <input
            name="imageURL"
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="imageURL"
          />
          <label for="floatingInput">imageURL</label>
        </div>

        {!isPending && (
          <button class="btn btn-primary btn-shadow btn-lg">Add product</button>
        )}
        {isPending && <button disabled>Adding product ...</button>}
      </form>
    </div>
  );
};

export default Create;
