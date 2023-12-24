<template>
  <div class="pro-title">
    Holiday Horsepower
    <span class="pro-title-dash"></span>
  </div>
  <div class="products-container">
    <ProBox v-for="bike in bikes" :key="bike.id.toString()" :id="bike.id" :image="bike.image" :description="bike.description"/>
  </div>
</template>

<script >
import ProBox from './ProBox.vue'
import {ref} from 'vue'

  export default{
  components: { ProBox },
    setup(){

      let bikes = ref([
        {
          id:123,
          image: "../../src/images/1.webp",
          description: 'The 2023 Road Glide Special is a classic touring design paired with premium H-D features. Open it up and take it in. for one'
        },
        {
          id:124,
          image: "../../src/images/1.webp",
          description: 'The 2023 Road Glide Special is a classic touring design paired with premium H-D features. Open it up and take it in.'
        },
        {
          id:125,
          image: "../../src/images/1.webp",
          description: 'The 2023 Road Glide Special is a classic touring design paired with premium H-D features. Open it up and take it in.'
        }
      ])

      return {
        bikes
      }
    }
  }
</script>ProBox