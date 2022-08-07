const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_blue.jpg',
            description: 'A warm fuzzy pair of socks.',
            url: 'https://www.github.com/tiagopinhotx',
            inventory: 8,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', }
              ],
            sizes: ['P', 'M', 'G', 'GG']

        }
    },
    methods:{
        addToCart(){
                this.cart += 1
        }, 
        removeFromCart(){
            if(this.cart > 0){
                this.cart -= 1
            }
           },
        cartIsFilled(){
            if(this.cart > 0){
                return true
            }else{
                return false
            }
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        isInStock(){
            return this.inventory > 0 ? true : false
        }
    }
})