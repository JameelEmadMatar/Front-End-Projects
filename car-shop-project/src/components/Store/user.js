import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id : 'user',
    state : () => ({
        userName : null,
        userId : null,
        token : null,
    }),
    getters : {
        getUserName : (state) => state.userName,
        getUserId : (state) => state.userId,
        getUserToekn : (state) => state.token,
    },
    actions : {
        updateUser(userName , token ,userId) {
            this.userName = userName
            this.token = token
            this.userId = userId
        }
    },
    persist: true,
})