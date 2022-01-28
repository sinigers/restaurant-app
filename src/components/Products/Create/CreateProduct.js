import { useState, useEffect } from "react";
import "./CreateProduct.css";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { create } from "../../../services/productService";
// import { optionsTypes } from "./SelectOptions/SelectOption";
import { optionsAlergens } from "./SelectOptions/SelectOption";

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
        {/* <label for="floatingSelect">Product category:</label> */}
        {/* <div className="col-sm-6">
          <Select
            components={animatedComponents}
            options={optionsTypes}
            defaultValue={optionsTypes[0]}
            className="basic-single"
            classNamePrefix="Select genre"
            name="type"
            class="form-select"
          />
        </div> */}

        <div class="form-floating mb-3">
          <select class="form-select" id="floatingSelect" name="type">
            <option selected>Breakfast</option>
            <option value="Preorder">Preorder</option>
            <option value="Starters">Starters</option>
            <option value="Soups">Soups</option>
            <option value="Salads">Salads</option>
            <option value="BBQ">BBQ</option>
            <option value="with Meat">with Meat</option>
            <option value="Garnishes">Garnishes</option>
            <option value="Bread">Bread</option>
            <option value="without Meat">without Mea</option>
            <option value="Jam">Jam</option>
            <option value="Non Alcoholic">Non Alcoholic</option>
            <option value="Brandy">Brandy</option>
            <option value="Wiskey">Wiskey</option>
            <option value="Hot Drinks">Hot Drinks</option>
            <option value="Beer">Beer</option>
            <option value="Other">Other</option>
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
          <label for="floatingInput">Title*</label>
        </div>
        <div class="form-floating mb-3">
          <input
            name="price"
            type="number"
            class="form-control"
            id="floatingInput"
            placeholder="Price"
          />
          <label for="floatingInput">Price*</label>
        </div>
        <div class="form-floating mb-3">
          <textarea
            name="body"
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Description"
          />
          <label for="floatingInput">Description</label>
        </div>

        <div style={{ display: "flex" }}>
          <div class="form-floating mb-3">
            <input
              name="weight"
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Weight"
            />
            <label for="floatingInput">Weight*</label>
          </div>

          <div class="form-floating mb-3">
            <select class="form-select" id="floatingSelect" name="unit">
              <option value="gr" selected>
                gram
              </option>
              <option value="kg">kilogram</option>
              <option value="ml">milliliter</option>
              <option value="l">liter</option>
              <option value="psc">psc</option>
              <option value="psc/g">piece/g</option>
              <option value="psc/k">piece/kg</option>
            </select>
            {/* <label for="floatingSelect">Unit*</label> */}
          </div>
        </div>
        <select
          class="form-select"
          multiple
          aria-label="multiple select example"
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <label>Product alergens:</label>
        <div className="col-sm-6">
          <Select
            isMulti
            // defaultValue={optionsAlergens[0]}
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
