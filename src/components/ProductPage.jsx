import React from "react";

import Product from "../assets/product.png";
import Tooltip from "../assets/tooltip.svg";
import Phone from "../assets/phone.svg";
import CertificateFirst from "../assets/certificate-1.png";
import CertificateSecond from "../assets/certificate-2.png";
import CertificateThird from "../assets/certificate-3.png";

const ProductPage = () => {
  return (
    <div className="mr-product container">
      <div className="d-flex justify-content-between mb-1">
        <p className="product-title">PRODUCT</p>
        <p className="product-title">PRICE</p>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <img src={Product} alt="product" className="product-image mt-2 mb-2 me-4" />
          <div className="">
            <div>
              <p className="product-subtitle mt-1">Test Product</p>
            </div>
            <div>
              <p>Product description</p>
            </div>
            <div>
              <a href="/">Auto-renewal</a>
            </div>
          </div>
        </div>
        <p className="product-subtitle mt-1">100.00 USD</p>
      </div>
      <hr />
      <div className="d-flex align-items-center justify-content-end mt-2 mb-2">
        <img src={Tooltip} alt="?" />
        <p className="ms-1">
          VAT (20.00%): <span className="fw-bold me-1">20.00</span>USD
        </p>
      </div>
      <hr />
      <div className="d-flex align-items-center justify-content-end mt-2 mb-3">
        <p className="product-total">TOTAL: 120.00 USD</p>
      </div>
      <div>
        <p className="product-text">
          Do not hesitate to contact our CUSTOMER CARE CENTER for more information about payment and
          delivery.
        </p>
        <p className="product-text mb-2">
          Please state the order ID from the confirmation email as a reference so that we can assist
          you efficiently.
        </p>
        <p className="product-text mb-2">
          24/7 English phone support for online payment related issues:
        </p>
      </div>
      <div className="d-flex mb-2">
        <img src={Phone} alt="#" className="me-2" />
        <div>
          <p className="product-text fw-bold">
            + 1-888-317-4868 <span className="product-text">(Toll free)</span>{" "}
          </p>
          <p className="product-text fw-bold">
            + 1-647-977-7769 <span className="product-text">(International)</span>
          </p>
        </div>
      </div>
      <div>
        <p className="product-text mb-2">
          By submitting your Order, you acknowledge that you are purchasing from PayPro Global
          (PayPro Global, Inc., PayPro Europe Limited or PayPro U.S. Inc.), an authorized e-Commerce
          reseller.
        </p>
        <p className="product-text mb">
          Once the transaction is complete, your contact information will be shared with the product
          vendor for ongoing support purposes.
        </p>
      </div>
      <div className="d-flex justify-content-center product-images">
        <img src={CertificateFirst} alt="certificate" className="me-3" />
        <img src={CertificateSecond} alt="certificate" className="me-3" />
        <img src={CertificateThird} alt="certificate" className="me-3 mb-product-images" />
      </div>
    </div>
  );
};

export default ProductPage;
