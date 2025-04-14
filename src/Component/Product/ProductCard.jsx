
import React, { useContext } from 'react'
import { Rating } from "@mui/material";
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { Type } from '../../Utility/action.type';
import { DataContext } from "../../component/DataProvider/DataProvider";

function ProductCard({product, flex, renDiscription, renderAdd}) {
  const {image, title, id, rating, price, description} = product;
  const[state, dispatch]=useContext(DataContext)

  const addToCart=()=>{
    dispatch({
      type:Type.ADD_TO_BASKET,
      item:{
        image, title, id, rating, price, description
      }
    })
  }
  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.products_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renDiscription && (
          <div style={{ maxWidth: "750px" }}> {description}</div>
        )}
        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          {/* {count} */}
          <small>{rating?.count}</small>
        </div>
        <div>{/* price */}</div>
        <CurrencyFormat amount={price} />
      </div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            <p>Add to cart</p>
          </button>
        )}
    </div>
  );
}

export default ProductCard
