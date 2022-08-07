app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :class="[!isInStock() ?'out-of-stock-img' : '']" :src="image" alt="">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p> {{ description }} </p>
        <b><p v-if="onSale">{{saleMsg}}</p></b>
        <p v-if="inStock > 10">In Stock </p>
        <p v-if="almostSoldOut">Almost Sold Out, 
          only {{ variants[selectedVariant].quantity }} left</p>
        <p v-if="!inStock">Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <product-details :details="details"></product-details>
       
        <ul>
          <li v-for="(size, index) in sizes" 
            :key="index">
              {{ size }}
          </li>
        </ul>

        <div class="color-circle" 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          :style="{ backgroundColor: variant.color }"
          @mouseover="updateVariant(index)">
        </div>

        <button class="button" 
          :class="{disabledButton: !inStock}"
          :disabled="!inStock"
          @click="addToCart">
            {{ inStock ? "Add to Cart" : "Out of Stock" }}
          </button>

        <button class="button" 
          @click="removeFromCart" 
          v-if="cartIsFilled">
            Remove from Cart
          </button>
      
        <a :href="url">Made by Pinho Santiago</a>

      </div>
    </div>
  </div>`
  ,
  data(){
    
  return {
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      description: 'A warm fuzzy pair of socks.',
      url: 'https://www.github.com/tiagopinhotx',
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
          { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
          { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 2 },
        ],
      sizes: ['P', 'M', 'G', 'GG']

  }
  },
  methods:{
    addToCart(){
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
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

    inventory(){
        return this.variants.reduce((a, b) => a + b.quantity, 0)
    },

    inStock(){
        return this.variants[this.selectedVariant].quantity
    },

    almostSoldOut(){
        return this.variants[this.selectedVariant].quantity <= 10 && 
                this.variants[this.selectedVariant].quantity > 0
    },

    cartIsFilled(){
        return this.cart > 0 ? true : false
    },
    saleMsg(){
        return this.onSale ? this.brand + ' ' + this.product + ' is on sale'
        :''
    },

    shipping() {
    if (this.premium) {
      return 'Free'
    }
      return 2.99
    }


}})


/*



*/