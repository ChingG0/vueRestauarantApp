<template>
  <div class="container py-5">
    <AdminRestaurantFrom :initRestaurant="restaurant" @after-submit="handleAfterSubmit"/>
  </div>
</template>
<script>
import AdminRestaurantFrom from '../components/Admin/AdminRestaurantFrom.vue';
const dummyData = {
  restaurant: {
    "id": 2,
    "name": "Dahlia Ankunding",
    "tel": "052.465.8024",
    "address": "75167 Nichole Freeway",
    "opening_hours": "08:00",
    "description": "Et cumque doloremque dignissimos provident quis.\nEst porro eum accusamus animi neque maiores.\nUnde ipsam molestiae corporis at temporibus ad.\nId rerum amet ut tempore dolores est ea provident atque.",
    "image": "https://loremflickr.com/320/240/restaurant,food/?random=44.43780352485172",
    "CategoryId": null,
  }
}
export default {
  components: {
    AdminRestaurantFrom
  },
  data() {
    return {
      restaurant: {
        id: 2,
        name: '',
        tel: '',
        address: '',
        openingHours: '',
        description: '',
        image: '',
        CategoryId: '',
      }
    }
  },
  created() {
    const {id} = this.$route.params
    this.fetchRestaurant(id)
  },
  methods: {
    /*eslint-disable */
    fetchRestaurant(restaurantId) {
      console.log(restaurantId)
      const { restaurant } = dummyData
      const { id, name, tel, address, opening_hours: openingHours, description, image, CategoryId} = restaurant
      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        tel,
        address,
        openingHours,
        description,
        image,
        CategoryId
      }
    },
    handleAfterSubmit(formData){
        for(let [name,value] of formData.entries()){
          console.log(name + value)
        }
      }
  }
}
</script>