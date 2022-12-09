export function setCartProuct(state,payload){
    const findProduct = state.cart.find((product) => product.id === payload.id)
    if(findProduct){
        findProduct.quantity += 1
    }else{
        const productClone = {...payload,quantity:1}
        state.cart.push(productClone)
    }
}
export function deleteFromCart1(state,product){
    state.cart = state.cart.filter((item) => {
        return item.id !== product.id
    });
}
export function clear (state){
    state.cart = [];
}