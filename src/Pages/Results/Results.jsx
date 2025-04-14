// import React, { useEffect, useState } from "react";
// import LayOut from "../../component/LayOut/LayOut";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import ProductCard from "../../component/Product/ProductCard";
// import productUrl from "../../Api/endPoints";
// import classes from "./Results.module.css";
// import Loader from "../../component/Loader/Loader";

// function Results() {
//   const [results, setResults] = useState([]);
//   const { categoryName } = useParams();
//   const [isLoading, setIsLoading] = useState(false);
//   useEffect(() => {
//     setIsLoading(true);
//     axios
//       .get(`${productUrl}/products/category/${categoryName}`)
//       .then((res) => {
//         setResults(res.data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         //  console.error(err);
//         setResults([]); // Fallback to empty results on error
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <LayOut>
//       <section className={classes.results}>
//         <h1 style={{ padding: "30px" }}>Results</h1>
//         <p style={{ padding: "30px" }}>Category / {categoryName}</p>
//         <hr />
//         {isLoading ? (
//           <Loader />
//         ) : (
//           <div className={classes.products_container}>
//             {results?.map((product) => (
//               <ProductCard
//                 key={product.id}
//                 renderDesc={false}
//                 renderAdd={true}
//                 product={product}
//               />
//             ))}
//           </div>
//         )}
//       </section>
//     </LayOut>
//   );
// }

// export default Results;
import React, { useEffect, useState } from "react";
import LayOut from "../../component/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import {productUrl} from "../../Api/endPoints";
import classes from "./Results.module.css";
import ProductCard from "../../Component/Product/ProductCard";
import Loader from "../../Component/Loader/Loader";

function Results() {
  const {categoryName} = useParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
         setIsLoading(false)       
      });
  }, []);
  return (
    <LayOut>
      <section className={classes.results}>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category /{categoryName}</p>
        <hr />
      </section>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              renDiscription={false}
              renderAdd={true}
            />
          ))}
        </div>
      )}
    </LayOut>
  );
}

export default Results;
