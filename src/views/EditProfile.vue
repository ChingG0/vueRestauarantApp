<template>
  <div class="album py-5 bg-light">
    <EditProfile @after-profile-submit="handleAfterSubmit" />
  </div>
</template>
<script>
import EditProfile from '../components/EditProfile.vue';
export default {
  components: { EditProfile },
  methods: {
    handleAfterSubmit(formData) {
      for (let [name, value] of formData.entries()) {
        console.log(name + value)
      }
    }
  }
}
</script>

