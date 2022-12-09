import React, { useEffect, useState } from 'react'
import Product from './Product'
import { useParams } from 'react-router-dom'
const Details = () => {
    const [products,setProduct] = useState([])
    const api_url = 'https://fakestoreapi.com/products'
    const params = useParams()
      useEffect(() => {
        fetch(`${api_url}/${params.productId}`).then(res=>res.json()).then(data=>setProduct(data))
      },[params.productId])
  return (
    <>
        <Product product = {products} showButton = {false}/>
    </>
  )
}

export default Details
