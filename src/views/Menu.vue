<template>
  <div>
    <header>
      <img src="@/assets/graphics/graphics-header.svg" alt="header" />
      <router-link to="/nav">
      <Ham />
       </router-link>

     <img src="@/assets/graphics/bag.svg" alt="bag">
    
         

    </header>
    <h1>Meny</h1>
    <!-- <ul
    v-for="one in menu"
    >
        
    </ul> -->
    <img src="@/assets/graphics/graphics-footer.svg" alt="footer" />
  </div>
</template>

<script>
import Ham from "@/components/ham.vue";
export default {
  components: {
    Ham, 
  },

data() {
    return {
        show:false,

     
    };
  },
  methods: {
     /*  navMenu(){
          this.show = !this.show;
      } */

  }

 }; 
</script>

<style scoped>
h1{
    font-size: 3rem;
}
img[alt="bag"] {
     /* position: relative;
     margin-left: 2rem;
    padding: 20px;
    background-color:white;
    border-radius: 50%;
    width:40px;
    height:40px;
    position: absolute;
    top: 3rem;
    cursor: pointer; */
  

}
</style>