import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-start mb-3 ">
      <Link
        to={`/products/get/${props.prod.id}`}
        style={{ textDecoration: "none" }}
      >
        <div className="card h-100 ">
          <img
            src={props.prod.image}
            className="card-img-top"
            alt={props.prod.title}
            width="120px"
            height="120px"
          />
          <div className="card-body">
            <small className="card-title">{props.prod.title}</small>
          </div>
          <small className="card-title text-end">
            <i class="bi bi-currency-rupee"></i>
            {props.prod.price}
          </small>
        </div>
      </Link>
    </div>
  );
};

export default Card;