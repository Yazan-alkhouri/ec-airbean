<template>
  <div>
    <header>
      <router-link to="/menu">
        <img
          src="@/assets/graphics/airbean-landing.svg"
          alt="title" /></router-link
      >
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  text-align: center;

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