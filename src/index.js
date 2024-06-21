import React, { useState } from "react";
import "./index.css";

function ProductValidation () {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [nameError, setNameError] = useState(null); // Initialize to null
  const [quantityError, setQuantityError] = useState(null); // Initialize to null

  const isProductNameValid = productName.trim() !== "";
  const isQuantityValid = quantity.trim() !== "";

  const isSubmitDisabled = productName.trim() === "" || quantity.trim() === "";

  const handleNameChange = (event) => {
    setProductName(event.target.value);
    if (!event.target.value.trim()) {
      setNameError("Product name is required");
    } else {
      setNameError(null); // Reset error when valid
    }
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
    if (!event.target.value.trim()) {
      setQuantityError("Quantity is required");
    } else {
      setQuantityError(null); // Reset error when valid
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Your form submission logic goes here
  // };

  return (
    <div className="layout-column justify-contents-center align-items-center">
      <section className="card pa-50">
        <form className="layout-column" noValidate>
          <label>
            <input
              type="text"
              onInput={handleNameChange}
              onBlur={handleNameChange}
              data-testid="name-input"
              className={`white large outlined ${nameError ? 'error' : ''}`}
              placeholder="Product name"
            />
            {nameError && (
              <p className="error-text form-hint" data-testid="name-input-error">
                {nameError}
              </p>
            )}
          </label>
          <label>
            <input
              type="number"
              data-testid="quantity-input"
              onInput={handleQuantityChange}
              onBlur={handleQuantityChange}
              className={`white large outlined ${quantityError ? 'error' : ''}`}
              placeholder="Quantity"
            />
            {quantityError && (
              <p className="error-text form-hint" data-testid="quantity-input-error">
                {quantityError}
              </p>
            )}
          </label>
          <button className="mt-50" type="submit" data-testid="submit-button" disabled={isSubmitDisabled}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default ProductValidation;
