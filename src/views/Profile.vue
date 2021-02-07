<template>
  <div id="all">
    <header>
      <img src="@/assets/graphics/graphics-header.svg" alt="header" />
    <a @click="$router.push({ path: '/nav' })">
      <img src="@/assets/graphics/bag.svg" alt="ham" />
      </a>
    </header>
    <section>
      <img src="@/assets/graphics/user.svg" alt="profile" />
      <h1>Sixten Kaffelover</h1>
      <span>sixten.kaffelover@zocom.se</span>
      <h2>Orderhistorik</h2>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img[alt="profile"] {
  margin: 30px;
  width: 90px;
}
section h2{
text-align: left;
}
</style>