<template>
  <div>
    <header>
    
      
        
        <!-- <img src="@/assets/graphics/intro-graphic-left.svg" alt="left"> -->
         <router-link to="/Nav">
        <img src="@/assets/graphics/airbean-landing.svg" alt="title">
        </router-link>|

        <!-- <img src="@/assets/graphics/intro-graphic-right.svg" alt="right">
         -->


        
       <!-- <img src="@/assets/graphics/bag.svg" alt="">
      <img src="@/assets/graphics/add.svg" alt="">
      <img src="@/assets/graphics/arrow-down.svg" alt=""> 
      <img src="@/assets/graphics/drone.svg" alt="">
        
        <img src="@/assets/graphics/graphics-header.svg" alt="">
         <img src="@/assets/graphics/graphics-footer.svg" alt="">
        <img src="@/assets/graphics/close.svg" alt="">
        -->
     
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
header {
   
  display: block;
}
img {
      
    background-color: rgb(40, 153, 115);
}


img[alt="title"] {
  align-items: center;
   justify-content: center;
    text-align: center;
  

  
  

}
img[alt="right"] {
  position: relative;
 text-align: right;
 width: 50%;
 opacity: 0.6;
}
img[alt="left"] {
     position: relative;
   text-align: left; 
   width: 50%;
   opacity: 0.6; 

}

</style>