export function showSellectedProducts1(state,optionsellect){
    if(optionsellect === "All Projects"){
        state.ProductSellected = state.Products
    }else{
        state.ProductSellected = state.Products.filter((item) => {
            return item.text === optionsellect
        });
    }
}
export function showSearchProducts1(state,searchWord){
    const re = new RegExp(searchWord, "gi");
    state.ProductSellected = state.Products.filter((item) => {
        return item.title.match(re)
    });
}