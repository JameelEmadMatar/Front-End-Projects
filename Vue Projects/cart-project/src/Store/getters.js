export const cartItemCount = (state) => {
    return state.cart.length;
}
export const totalPrice = (state) => {
    let total = state.cart.reduce((acc,product) => {
        acc += product.price * product.quantity
        return acc
},0)
    return total;
};