const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A warm fuzzy pair of socks.',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.twitch.tv/pinhotx',
            inventory: 8,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester']

        }
    }
})