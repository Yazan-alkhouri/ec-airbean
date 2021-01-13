<template>
  <div id="menu">
    <header>
      <img src="@/assets/graphics/graphics-header.svg" alt="header" />
      <div>
        <img src="@/assets/graphics/bag.svg" alt="bag" />
        <img
          src="@/assets/graphics/clock-padlock.svg"
          alt="clock"
          @click="showOrders"
        />
        <span>{{ count }}</span>
      </div>
    </header>
    <h1>Meny</h1>

    <section v-for="m in menu" :key="m.id">
      <ul>
        <div>
          <img
            src="@/assets/graphics/add.svg"
            alt="add"
            @click="incrementCount"
          />
          <p>{{ m.title }}</p>
          <p class="light">............</p>
          <p>{{ m.price }} Kr</p>
        </div>

        <span>{{ m.desc }} </span>
      </ul>
    </section>

    <img src="@/assets/graphics/graphics-footer.svg" alt="footer" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      menu: this.$root.menu,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    count() {
      return this.$store.state.count;
    },
    /*  menu(){
        return this.$store.state.menu;
    } */
  },
  methods: {
    incrementCount() {
      // use it when user click new item increase one for every click
      this.$store.commit("Increment_Count"); // Increment_Count are en mutations in store.js
    },

    showOrders() {
      // here open the orders from component order.vue
    },
  },
};
</script>

<style scoped>
#menu {
  text-align: center;
}

img[alt="bag"] {
  width: 100px;

  cursor: pointer;
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
img[alt="clock"] {
  position: relative;
  padding-left: 20rem;
  width: 100px;
  cursor: pointer;
}

header span {
  position: relative;
  color: white;
  border-radius: 50%;
  background-color: rgb(199, 35, 35);
  padding: 10px 15px;
  right: 2rem;
  bottom: 5rem;
}
ul {
  text-align: center;
  margin: 50px;
}
ul p {
  display: inline;
  font-size: 24px;
  font-weight: bold;
}
ul span {
  margin-right: 80px;
  font-size: 12px;
}

.light {
  opacity: 0.4;
}
</style>