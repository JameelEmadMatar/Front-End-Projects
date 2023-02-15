import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id : 'user',
    state : () => ({
        user : null,
        token : null,
        temp_code : null,
    }),
    getters : {
        getUser : (state) => state.user,
        getUserToekn : (state) => state.token,
        getTemp_code : (state) => state.temp_code,
    },
    actions : {
        updateUser(user , token) {
            this.user = user
            this.token = token
        },
        updateTempCode(code){
            this.temp_code = code
        }
    },
    persist: true,
})