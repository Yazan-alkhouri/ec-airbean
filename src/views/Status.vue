<template>
  <div id="status">
    <div>
      <p>Ordernummer {{orderNumber}}</p>
      <img src="@/assets/graphics/drone.svg" alt="drone" />
    </div>

    <div class="order">
      <h1>
        Din beställning <br />
        är på väg
      </h1>
      <p>{{e}} minuter</p>
    </div>
      <a v-on:click="$router.push({ path: '/' })">
     <button>OK, cool!</button> </a>
  </div>
</template>

<script>
import { generateOrderNr, generateETA } from "../backend/utils/utils.js";
export default {
  data() {
    return {
      e: 0,
      orderNumber:""
    };
  },
   methods: {
    getData() {
      this.orderNumber = generateOrderNr();
      this.e = generateETA();
    },
  },
  async mounted() {
    this.getData();
  },
};
</script>

<style scoped>
#status {
  text-align: center;
  color: whitesmoke;
  background-color: rgba(236, 109, 92, 0.986);
  padding: 2rem;
}

img[alt="drone"] {
  margin: 2rem;
}
.order {
  margin-bottom: 4rem;
}
.order h1 {
  font-size: 2.5rem;
}
.order p {
  font-size: 1.3rem;
}
button {
  font-family: fantasy;
  padding: 10px 40px;
  font-size: 2rem;
  border-radius: 25px;
  border: white;
  cursor: pointer;
}
</style>