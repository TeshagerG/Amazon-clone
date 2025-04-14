import React, { useContext } from "react";
import classes from "./cart.module.css";
import LayOut from "../../component/LayOut/LayOut";
import ProductCard from "../../Component/Product/ProductCard";
import { DataContext} from "../../component/DataProvider/DataProvider";
import CurrencyFormat from "../../Component/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket?.reduce((amount, item) => {
    return item.price*item.amount + amount;
  }, 0);


  // const total = basket.reduce((amount, item) => {
  //   const itemAmount = item.amount;
  //   return amount + item.price * itemAmount;
  // }, 0);

// function Cart() {
//   const [{ basket }, dispatch] = useContext(DataContext);

// const total = (basket || []).reduce((amount, item) => {
//   const itemAmount = item.amount ?? 1;
//   return amount + item.price * itemAmount;
// }, 0);


  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello welcome to</h2>
          <h3>your shopping basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Opps there is no item in your Cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className={classes.cart_product}>
                  <ProductCard
                    key={i}
                    product={item}
                    renDiscription={true}
                    renderAdd={false}
                    flex={true}
                  />
                  <div className={classes.btn_container}>
                    <button
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      <IoIosArrowUp size={20} />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <IoIosArrowDown size={20} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotatal({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/Payment">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
