// import React, { useEffect, useState } from 'react'
// import LayOut from '../../component/LayOut/LayOut'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import productUrl from '../../Api/endPoints'
// import ProductCard from '../../component/Product/ProductCard'
// import Loader from '../../component/Loader/Loader'



// function ProductDetail() {
//   const {productId} = useParams()
//   const [product, setProduct] = useState({})
//   const [isLoading, setIsLoading] = useState(false);
//   useEffect(() => {
//     setIsLoading(true)
//     axios.get(`${productUrl}/products/${productId}`)
//       .then((res) => {
//         // console.log(res.data)
//         setProduct(res.data);
//         setIsLoading(false)
//       })
//       .catch((err) => {
//         console.log("Error fetching product:", err);
//         setIsLoading(false)
//       });
//   }, []);
  
//   return (
//     <LayOut>
//       {isLoading? (<Loader/>):(
//         <ProductCard product={product} flex={true} renderDesc={true} renderAdd={true}/>
//       )}
    
//     </LayOut>
    
//   )
// }

// export default ProductDetail
import React, { useEffect, useState } from 'react'
import LayOut from "../../component/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../Component/Product/ProductCard';
import Loader from '../../Component/Loader/Loader';


function ProductDetail() {
  const { productId } = useParams()
  const [product, setProduct]=useState({})
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    setIsLoading(true)
    axios.get(`${productUrl}/Products/${productId}`)
    .then((res)=>{
      setProduct(res.data)
      setIsLoading(false)
    }).catch((err)=>{
      console.log("fetching product:", err)
      setIsLoading(false)
    })
  }, [])
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renDiscription={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail
