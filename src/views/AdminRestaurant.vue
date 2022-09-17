<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ restaurant.name }}</h1>
        <span class="badge badge-secondary mt-1 mb-3">
          {{ restaurant.categoryName }}
        </span>
      </div>
      <div class="col-md-4">
        <img class="img-responsive center-block" :src="restaurant.image | emptyImage"
          style="width: 250px;margin-bottom: 25px;">
        <div class="well">
          <ul class="list-unstyled">
            <li>
              <strong>Opening Hour:</strong>
              {{ restaurant.openingHours }}
            </li>
            <li>
              <strong>Tel:</strong>
              {{ restaurant.tel }}
            </li>
            <li>
              <strong>Address:</strong>
              {{ restaurant.address }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <p>{{ restaurant.description }}</p>
      </div>
    </div>
    <hr>
    <button type="button" class="btn btn-link" @click="$router.back()">回上一頁</button>
  </div>
</template>
<script>
import { emptyImageFilter } from '../utils/mixins'
const dummyData = {
  restaurant: {
    "id": 2,
    "name": "Dahlia Ankunding",
    "tel": "052.465.8024",
    "address": "75167 Nichole Freeway",
    "opening_hours": "08:00",
    "description": "Et cumque doloremque dignissimos provident quis.\nEst porro eum accusamus animi neque maiores.\nUnde ipsam molestiae corporis at temporibus ad.\nId rerum amet ut tempore dolores est ea provident atque.",
    "image": "https://loremflickr.com/320/240/restaurant,food/?random=44.43780352485172",
    "viewCounts": 0,
    "createdAt": "2022-09-15T16:02:37.000Z",
    "updatedAt": "2022-09-15T16:02:37.000Z",
    "CategoryId": 5,
    "Category": {
      "id": 5,
      "name": "素食料理",
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z"
    }
  }
}

export default {
  name: 'AdminRestaurant',
  mixins: [emptyImageFilter],
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: ''
      }
    }
  },
  mounted() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    /*eslint-disable */
    fetchRestaurant(restaurantId) {
      const { restaurant } = dummyData
      const { id, name, Category, image, opening_hours: openingHours, tel, address, description } = restaurant
      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        categoryName: Category ? Category.name : '未分類',
        image,
        openingHours,
        tel,
        address,
        description
      }
    }
  }
}
</script>