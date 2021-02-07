<template>
    <div class="all">
        <div class="info">
      <div class="name">{{ thing.title }}</div>
      <div class="price">{{ thing.value * thing.price }} kr</div>
      </div>
        <span class="line">.................</span>
      <div class="modify">
        <a  @click="$emit('increase', thing.id)">
          <img src="@/assets/graphics/arrow-up.svg" alt="up" />
        </a>
        <div >{{ thing.value }}</div>
        <a  @click="$emit('minimize', thing.id)">
          <img src="@/assets/graphics/arrow-down.svg" alt="down" />
        </a>
      </div>
      <a  @click="$emit('delete', thing.id)">
          <img src="@/assets/graphics/close.svg" alt="close" />
        </a>
        
    </div>
</template>

<script>
export default {
  props: {
    thing: Object,
  },
};
</script>

<style scoped>

.info{
    margin: 10px;
    
}
.name{
    font-size: 18px;
     font-weight: bold;
}
.price {
  text-align: left;
  font-size: 15px;
}
.line{
    opacity: 0.5;
   margin: 30px;

}

img[alt="up"] {
  height: 10px;
}
img[alt="down"] {
  height: 10px;

}
img[alt="close"] {
  height: 13px;
  margin: 15px;
  margin-top: 3px;
  cursor: pointer;
}
.modify {
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  cursor: pointer;
  font-size: 1rem;
  height: 8px;
}



</style>