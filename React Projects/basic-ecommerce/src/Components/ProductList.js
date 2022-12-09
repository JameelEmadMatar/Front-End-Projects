import React, { useEffect, useState } from 'react'
import Product from './Product'
const ProductList = () => {
    const [products,setProduct] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(data=>setProduct(data))
      },[])
  return (
    <>
        <h1 className='text-center p-3'>Our Product</h1>
        <div className='container'>
            <div className='row'>
                {products.map((products) => {
                    return(
                        <div className='col-3' key={products.id}>
                            <Product product = {products} showButton={true}/>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}
export default ProductList