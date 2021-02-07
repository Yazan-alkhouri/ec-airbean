<template>
  <div class="myorder" :class="{ visible: visible }">
    <h1>Din beställning</h1>
    <OrderItems
      class="orderItems"
      v-for="thing in orderItems"
      :thing="thing"
      :key="thing.id"
      @increase="increaseOrder(thing)"
      @minimize="minimizeOrder(thing)"
      @delete="deleteOrder(thing)"
    ></OrderItems>
    <div class="total">
        <h5>Total: .................{{ total }} kr</h5>
    </div>
        
    <router-link to="/status"
      ><a href="#" v-on:click="$emit('getData')"
      class="button"
        >Take my money!</a
      ></router-link
    >
  </div>
</template>

<script>
import OrderItems from "../components/OrderItems.vue";
export default {
  components: {
    OrderItems,
  },
  data() {
    return {
        
    };
  },
  props: {
    visible: Boolean,
  },
  computed: {
    orderItems() {
      return this.$root.orderInfo;
    },
    total(){
        return this.$root.total
    }
  },
  methods: {
    minimizeOrder(drink) {
      let changing = this.orderItems.find(
        (changing) => changing.id === drink.id
      );
      if (changing.value >= 1) {
        changing.value--;
       this.$root.total = this.$root.total - drink.price;
      } else {
        changing.value = 0;
      }
    },
    increaseOrder(drink) {
      let changing = this.orderItems.find(
        (changing) => changing.id === drink.id
      );
      changing.value++;
      this.$root.total = this.$root.total + drink.price;
    },
    
    deleteOrder(drink) {
      this.$root.orderInfo = this.$root.orderInfo.filter(changing => changing.id != drink.id);
      this.$root.total = this.$root.total - drink.price * drink.value; 
    },
  },
};
</script>

<style scoped>
.myorder {
    width: 25rem;
    height: 40rem;
  position: absolute; 
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 5px 5px 20px 20px rgba(27, 146, 126, 0.75);
  border-radius: 30px;
  background-color: white;

}
h1 {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 40px;
  font-size: 2.2rem;
  font-weight: bold;
}
.visible {
  display: flex;
}
.orderItems {
  padding: 0px;
  display: flex;
  align-self: start;
  margin-left: 30px;
}
.total {
  color: rgba(11, 9, 41, 0.849);
  font-weight: bold;
  font-size: 1.6rem;
  
}

.button {
  color: rgb(255, 255, 255);
  background-color: rgb(117, 16, 16);
  font-weight: bold;
  border-radius: 15px;
  padding: 15px;
  font-size: 1.2rem;
}
a:link {
  text-decoration: none;
}

</style>