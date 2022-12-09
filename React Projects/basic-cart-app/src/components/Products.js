import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../ReduxToolKit/Slices/ProductsSlice'
import { Button, Card, Container, Row } from 'react-bootstrap'
import { addToCart } from '../ReduxToolKit/Slices/CartSlice'
const Products = () => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProduct())
        console.log(products)
    },[])
  return (
    <div className="product p-4">
        <Container>
            <Row>
            {
                    products.map((product) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
                        <div className='card my-2'>
                            <Card.Img style={{ height : '300px'}}variant="top" src={product.image}/>
                            <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Card.Text>
                                {product.price}$
                            </Card.Text>
                            <Button variant="primary" onClick={()=>dispatch(addToCart(product))}>Add To Cart</Button>
                            </Card.Body>
                        </div>
                    </div>
                    ))
                }
            </Row>
        </Container>
    </div>
  )
}
export default Products