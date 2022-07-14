import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsAction } from "../actions/productactions";
import { Link } from "react-router-dom";

const Product = () => {
  const dispatch = useDispatch();
  //useEffect(func, [conditional stmt])
  // dispatches getAllProductsAction at the time of page loading
  useEffect(() => {
    dispatch(getAllProductsAction());
  }, []);

  // get products info from redux store
  const products = useSelector((state) => state.fakestore.products);
  console.log(products);

  return (
    <div className="container mt-3">
      <div className="row">
        <aside className="col-sm-12 col-md-2">
          <ul className="list-group">
            <li className="list-group-item active" aria-current="true">
              An active item
            </li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </aside>
        <div className="col-sm-12 col-md-10">
          <div className="row">
            {products.map((prod) => (
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-start mb-3 ">
                <Link
                  to={`/products/get/${prod.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="card h-100 ">
                    <img
                      src={prod.image}
                      className="card-img-top"
                      alt={prod.title}
                      width="120px"
                      height="120px"
                    />
                    <div className="card-body">
                      <small className="card-title">{prod.title}</small>
                    </div>
                    <small className="card-title text-end">
                      <i class="bi bi-currency-rupee"></i>
                      {prod.price}
                    </small>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;