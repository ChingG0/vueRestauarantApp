<template>
  <div class="container py-5">
     <!-- 餐廳表單 AdminRestaurantForm -->
     <AdminRestaurantFrom @after-submit="handleAfterSubmit"/>
   </div>
 </template>
 <script>
import AdminRestaurantFrom from '../components/Admin/AdminRestaurantFrom.vue';
  export default{
    name: "AdminRestaurantNew",
    components: { AdminRestaurantFrom },
    methods:{
      handleAfterSubmit(formData){
        for(let [name,value] of formData.entries()){
          console.log(name + value)
        }
      }
    }
}
 </script>