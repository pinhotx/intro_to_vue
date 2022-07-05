const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            description: 'A warm fuzzy pair of socks.',
            url: 'https://www.twitch.tv/pinhotx',
            inventory: 8,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', }
              ],
            sizes: ['P', 'M', 'G', 'GG']

        }
    }
})