<template>
  <div class="shoppingCart">
    <a
      v-on:click="$emit('showAllorder')"
    >
      <img  src="@/assets/graphics/clock-padlock.svg"  alt="bag" />
      <div class="number">
        {{ shoppingCart.length }}
      </div>
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    shoppingCart() {
      return this.$root.orderInfo;
    },
  },
};
</script>

<style scoped>
.shoppingCart {
  width: 50px;
  height: 50px;
  position: relative;
    bottom: 7rem;
    left: 12rem;
    
}
img[alt="bag"] {
 position: absolute;
 width: 80px;
}

.number {
  position: relative;
  color: white;
  border-radius: 50%;
  background-color: rgb(199, 35, 35);
  padding: 10px 15px;
  left: 5rem;
 
}

</style>