import React from 'react'
import { LuMenu } from "react-icons/lu";
import classes from "./Header.module.css";


function LowerHeader() {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li>
          <LuMenu />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader
