<template>
  <div class="items">
      <ul>
      <a href="#"  @click="$emit('addNewItem')">
        <img src="@/assets/graphics/add.svg" alt="add" />
      </a>
      <p>{{ menu.title }}</p>
      <p>...................</p>
      <p>{{ menu.price }} kr</p>
      </ul>
    <span>{{ menu.desc }}</span>
  </div>
</template>

<script>
export default {
  props: {
    menu: Object,
  },
};
</script>

<style lang="scss">

ul {
  text-align: center;
  margin-top: 0px;

 
}
ul p {
  display: inline;
  font-size: 27px;
  font-weight: bold;
}
 span {
font-size: 14px;
margin-left:-90px;
margin-top: 0px;

}

img[alt="add"] {
  background-color: black;
  width: 20px;
  border-radius: 50%;
  padding: 10px;
  text-align: left;
  margin-right: 30px;
  margin-bottom: -10px;
  cursor: pointer;
}

</style>