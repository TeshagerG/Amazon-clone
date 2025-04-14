import React, { useContext } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { BiCart } from "react-icons/bi";
import classes from "./header.module.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
// import { DataContext } from '../DataProvider/DataProvider';

function Header() {
  // const[{basket}, dispatch]=useContext(DataContext);
  const [{ basket }, dispatch] = useContext(DataContext);
    const totalItem = basket?.reduce((amount, item) => {
      return item.amount + amount;
    }, 0);
  return (
    <section className={classes.fixed}>
      <section className={classes.header_container}>
        <div className={classes.logo_container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
              alt=""
            />
          </Link>
          <div className={classes.delivery}>
            <span>
              <IoLocationOutline />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        <div className={classes.Search}>
          {/* search */}
          <select name="#" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="Search Amazon" />
          {/* search icon */}
          <IoMdSearch />
        </div>

        <div className={classes.order_contaner}>
          <Link to="" className={classes.language}>
            <img
              src="https://pngimg.com/uploads/flags/small/flags_PNG14592.png"
              alt=""
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>

          <Link to="">
            <p>Sign in</p>
            <span>Account & List</span>
            {/* Dropdown icon */}
            <IoMdArrowDropdownCircle />
          </Link>
          <Link to="">
            <p>returns</p>
            <span>& Orders</span>
          </Link>
          <Link to="/cart" className={classes.cart}>
            {/* cart icon */}
            <span>{totalItem}</span>
            <BiCart size={35} />
          </Link>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;

// import React, { useContext } from "react";
// import { IoLocationOutline } from "react-icons/io5";
// import { FaSearch } from "react-icons/fa";
// import { BiCart } from "react-icons/bi";
// import classes from "./Header.module.css"; // Adjust the path based on your project structure
// import LowerHeader from "./LowerHeader";
// import { Link } from "react-router-dom";
// import { DataContext } from "../DataProvider/DataProvider";

// const Header = () => {
//   const [{ basket }, dispatch] = useContext(DataContext);
//   const totalItem = basket?.reduce((amount, item) => {
//     return item.amount + amount;
//   }, 0);
//   return (
//     <section className={classes.fixed}>
//       <section>
//         <div className={classes.header_container}>
//           {/* Logo Section */}
//           <div className={classes.logo_container}>
//             <Link to="/">
//               <img
//                 src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"
//                 alt="Amazon logo"
//               />
//             </Link>
//             {/* Delivery Location Section */}
//             <div className={classes.delivery}>
//               <span>
//                 <IoLocationOutline />
//               </span>
//               <div>
//                 <p>Delivered to</p>
//                 <span>Ethiopia</span>
//               </div>
//             </div>
//           </div>

//           {/* Search Section */}
//           <div className={classes.search}>
//             <select name="categories" id="categories">
//               <option value="all">All</option>
//               {/* Add more options as needed */}
//             </select>
//             <input type="text" placeholder="Search for products" />
//             <button>
//               <FaSearch size={25} />
//             </button>
//           </div>

//           {/* Account and Cart Section */}
//           <div className={classes.language}>
//             {/* Language Selector */}
//             <Link to="#">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/412/412828.png"
//                 alt="Language Selector"
//               />
//               <section name="language" id="language">
//                 <option value="EN">EN</option>
//                 {/* Add more languages if needed */}
//               </section>
//             </Link>

//             {/* Account & Lists */}
//             <Link to="/auth">
//               <p>Sign In</p>
//               <span>Account & Lists</span>
//             </Link>

//             {/* Returns & Orders */}
//             <Link to="/orders">
//               <p>Returns</p>
//               <span>& Orders</span>
//             </Link>

//             {/* Cart */}
//             <Link to="/cart" className={classes.cart}>
//               <BiCart size={35} />
//               <span>{totalItem}</span>
//             </Link>
//           </div>
//         </div>
//       </section>
//       <LowerHeader />
//     </section>
//   );
// };

// export default Header;
