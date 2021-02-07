<template>
  <div class="all">
    <div id="close">
      <img src="@/assets/graphics/close.svg" alt="" 
    
      />
    </div>
    <div class="list">
      
      <router-link to="/menu"><p>Meny</p></router-link>
      <hr />
     
      <router-link to="/about"> <p>Vårt kaffe</p></router-link>
      <hr />
      
      <router-link to="/profile"><p>Min profil</p></router-link>
      <hr />
      
       <router-link to="/status"><p>Orderstatus</p></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  computed: {

  },
  methods: {
    
  },
};
</script>

<style scoped>
.all {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.788);
  color: white;
  height: 1000px;
  
}
.list{
   margin-top: 5rem;

}
#close {
  
    padding: 20px;
    position: relative;
  
    width:20px;
    height:20px;
    background-color:white;
    border-radius: 50%;
    cursor: pointer;
    
 
}
hr {
  width: 40px;
  color: rgb(146, 140, 140);
  
  
}
a{
  color: white;
  text-decoration: none;
  font-size: 2.5rem;
  
}

</style>