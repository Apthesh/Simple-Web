import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../css/producdetails.css"

export default function ProductDetails() {
  let { pid } = useParams();
  let fashionId = Number(pid); 
  // let a = useParams(); 
  // let productId = Number(a.pid);
  
  let [product, setProduct] = useState(null);
  // let [loading, setLoading] = useState(true);
  // let [error, setError] = useState(null);

  let fetchProductDetails = async () => {
    try {
      let response = await fetch(`https://fakestoreapi.com/products/${fashionId}`);
      if (!response.ok) throw new Error('Product not found');
      let data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error(error);
      // setError(error.message);
    }finally {
      // setLoading(false);
    } 
  };

  useEffect(() => {
    fetchProductDetails();
  });

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error fetching product: {error}</p>;
  // }

  return (
    <div>
      <h1><marquee  direction=""> PRODUCT DETAILS</marquee></h1>
      <div className='product-details'>
        <div className='image'>
          <img src={product?.image} alt={product?.title} />
        </div>
        <div className='details'> 
          <h2>{product?.title}</h2>
          <p className='des'><b>Description:</b> {product?.description}</p>
          <h1><b>Price:</b> ${product?.price}</h1>
          <h1><b>Quantity:</b> {product?.rating.count}</h1>
          <h1><b>Rating:</b> {product?.rating.rate}</h1>
        </div>
      </div>
    </div>
  );
}
