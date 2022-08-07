app.component("review-list", {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `
  <div class="review-container">
  <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} gave this {{ review.rating }} stars 
        {{ (review.recommend == "Yes") ? " and would recommend this product" : "" }} 
        <br/>
        "{{ review.review }}"
        <br/>
        
        <br/>
      </li>
    </ul>
  </div>
`
})