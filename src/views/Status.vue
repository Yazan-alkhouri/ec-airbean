<template>
  <div id="status">

    <div>
      <p>Ordernummer #99809908</p>
      <img src="@/assets/graphics/drone.svg" alt="drone" />
    </div>

    <div class="order">
      <h1>
        Din beställning <br />
        är på väg
      </h1>
      <p>20 minuter</p>
    </div>
    <button>OK, cool!</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#status {
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
.order h1{
    font-size: 2.5rem;
}
.order p{
    font-size: 1.3rem;
}
button{
    font-family: fantasy;
    padding: 10px 40px;
     font-size: 2rem;
     border-radius: 25px;
     border: white;
}
</style>