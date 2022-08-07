const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            description: 'A warm fuzzy pair of socks.',
            url: 'https://www.github.com/tiagopinhotx',
            inventory: 8,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
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
        updateVariant(index) {
            this.selectedVariant = index        
        },
        isInStock(){
            return this.inventory > 0 ? true : false
        }
    },
    computed: {
        image(){
           return this.variants[this.selectedVariant].image 
        },  
        title() {
            return this.brand + ' ' + this.product
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        cartIsFilled(){
            return this.cart > 0 ? true : false
        },
        saleMsg(){
            return this.onSale ? this.brand + ' ' + this.product + ' is on sale'
            :''
        }
        
    }
})