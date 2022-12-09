import axiosClient from '../axiosClient'

export function addToCart({ commit },id){
    axiosClient.get(`/products/${id}`)
    .then(({ data }) =>{
        commit('setCartProuct',data);
    });
}

export function deleteFromCart({ commit },product){
    commit('deleteFromCart1',product);
}


export function clear({ commit }){
    commit('clear');
}