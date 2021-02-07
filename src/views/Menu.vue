<template>
  <div class="menu">
    <header>
        <div class="firstbackground">
          <img src="@/assets/graphics/graphics-header.svg" alt="header" />
        </div>
       <a
        href="#"
        class="a-tag d-flex flex-column text-decoration-none align-items-center"
        @click="$router.push({ path: '/nav' })"
      >
      <img src="@/assets/graphics/bag.svg" alt="ham" />
      </a>
         <h1>Meny</h1>
   </header>
    <ShoppingIcon @showAllorder="showAllorder"></ShoppingIcon>
    <Myorder v-bind:visible="shownOrder"></Myorder>
    <MenuItems
      :menu="item"
      v-for="item in menu"
      :key="item.id"
       @addNewItem="addNewItem(item)"
    ></MenuItems>
    <img src="@/assets/graphics/graphics-footer.svg" alt="footer" />
  </div>
</template>

<script>
import ShoppingIcon from "@/components/ShoppingIcon.vue";
import MenuItems from "@/components/MenuItems.vue";
import Myorder from "@/components/Myorder.vue";
export default {
  name: "Menu",
  components: {
    ShoppingIcon,
    MenuItems,
    Myorder
  },
  props: {},
  data() {
    return {
      shownOrder: false,
    };
  },
  methods: {
    addNewItem(drink) {
      let changing = this.menu.find(
        (changing) => changing.id === drink.id
      );
      let value = { value: "" };
      let cartItem = { ...changing, ...value };
      if (this.orderItems.find((element) => element.id === cartItem.id)) {
        cartItem.value += 1;
      } else {
        this.$root.total = this.$root.total + cartItem.price;
        this.$root.orderInfo.push(cartItem);
        cartItem.value++;
      }
    },
    showAllorder() {
      this.shownOrder = !this.shownOrder;
    },
  },
  computed: {
    menu() {
      return this.$root.menu;
    },
    orderItems() {
      return this.$root.orderInfo;
    },
  },
};
</script>
<style scoped>
.menu {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   
}

h1{
    font-size: 2rem;
    margin: 0px;

}

img[alt="ham"] {
  width: 50px;
  right: 12.5rem;
  bottom: 5px;
  position: relative;
  cursor: pointer;

}
.info{
display: block;
}
img[alt="header"] {
 width: 25rem;

}


</style>