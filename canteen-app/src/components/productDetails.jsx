import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByIdAction } from "../actions/productactions";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();

  // Dispatch action to get product based on id at the of page loading
  useEffect(() => {
    dispatch(getProductByIdAction(params.id));
  }, []);

  const product = useSelector((state) => state.fakestore.product);

  console.log(product);
  return (
    <div className="mt-5 container">
      <div className="row">
        <div className="col-md-3">
          <img
            src={product.image}
            width="250px"
            className="shadow p-3 mb-5 bg-body rounded"
          />
          <input
            type="button"
            value="Add To Cart"
            className="btn btn-primary mt-1"
          />
          <input
            type="button"
            value="Buy Now"
            className="btn btn-secondary ms-2 mt-1"
          />
        </div>
        <div className="col-md-9 text-start ">
          <h4>{product.title} </h4>
          <small>
            <b>Category: </b>
            {product.category}
          </small>
          <h4 className="mt-3">
            <b>Price: </b>
            <i class="bi bi-currency-rupee"></i>
            {product.price}
          </h4>
          <p>
            <b>Description: </b> {product.description}
          </p>
          Quantity:
          <input type="number" className="ms-2" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;