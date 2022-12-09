import React from 'react'
import { Button, Container, Image, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { clear, deleteFromCart } from '../ReduxToolKit/Slices/CartSlice'
const Cart = () => {
    const cartProduct = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const totalPrice = cartProduct.reduce((acc,product) => {
        acc += product.price * product.quantity
        return acc
    },0)
  return (
    <Container className='py-5'>
        <h1>Welcome To Cart</h1>
        <Button variant = "primary" className='my-2' onClick={()=>dispatch(clear())}>Clear Cart</Button>
        <h4>Total Price : {totalPrice.toFixed(2)} $</h4>
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {
                    cartProduct.map((product)=>(
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td><Image src={product.image} alt="" width="100px" height="100px"></Image></td>
                            <td>{product.price}$</td>
                            <td>{product.quantity}</td>
                            <td>
                            <Button variant = "danger" className='mx-1' onClick={()=>dispatch(deleteFromCart(product))}>Delete</Button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    </Container>
  )
}

export default Cart
