const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: false
        }
    },
    methods:{
        updateCart(id) {
            this.cart.push(id)
          },
          removeFromCart() {
            this.cart.pop()
        }
    },
    computed:{
        cartIsFilled(){
            return this.cart > 0 ? true : false
        }
    }
        
})