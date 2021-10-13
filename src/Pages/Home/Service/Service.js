import React from "react";
import { Link } from "react-router-dom";
import "./Srevice.css";
const Service = (props) => {
  const { id, name, price, description, img } = props.service;
  return (
    <div className="service pb-3">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5>Price: {price}</h5>
      <p className="px-4">{description}</p>
      <Link to={`/booking/${id}`}>
        <button className="btn btn-warning">Book {name.toLowerCase()}</button>
      </Link>
    </div>
  );
};

export default Service;
