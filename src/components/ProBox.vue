<template>
  <div class="pro-box">
    <div class="pro-img-container">
      <img :src="image" alt="" />
    </div>
    <div class="pro-details-container">
      <h3>ROAD GLIDE<span>&#174;</span> SPECIAL</h3>
      <p>
        {{ description }}
      </p>
      <router-link :to="pageRoute" class="pro-box">SEE THE BIKE</router-link>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  props: ["id", "image", "description"],
  setup(props) {
    const id = ref(props.id);
    const image = ref(props.image);
    const description = ref(props.description);

    const pageRoute = computed(() => `bike/${id.value}`);
    return {
      id,
      image,
      description,
      pageRoute,
    };
  },
};
</script>