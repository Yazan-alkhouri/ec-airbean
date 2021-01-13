<template>
  <div id="all">
    <Nav v-if="show" />
    <div v-if="about">
      <header>
        <img src="@/assets/graphics/graphics-header.svg" alt="header" />

        <img src="@/assets/graphics/bag.svg" alt="bag" @click="openHamMenu" />
      </header>
      <article>
        <h1>Vårt Kaffe</h1>
        <h6>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et
        </h6>
        <p>
          n enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
          dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
          Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra
        </p>
        <p>
          nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam
          eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
          rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed
          ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
          lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
          ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
          eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet
          nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum
          sodales, augue velit cursus nunc,
        </p>
      </article>
      <div class="img-info">
        <img src="@/assets/graphics/eva-cortado.jpg" alt="Eva" />
        <p>Eva Cortado</p>
        <span>VD &amp; Grundare</span>
      </div>

      <img src="@/assets/graphics/graphics-footer.svg" alt="footer" />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  components: {
    Nav,
  },
  data() {
    return {
      show: false,
      about: true,
    };
  },
  computed: {},
  methods: {
    openHamMenu() {
      this.show = true;
      this.about = false;
    },
  },
};
</script>


<style >
#all {
  text-align: center;
  color: black;
  background-color: rgb(238, 225, 226);
}

article {
  margin-left: 2rem;
}
article h1 {
  text-align: left;
  padding-top: 3rem;
  font-size: 3rem;
  color: rgba(0, 0, 0, 0.726);
}

article p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 26px;
  text-align: center;
}
article h6 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
}

.img-info p {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.5rem;
}
.img-info span {
  font-size: 0.8rem;
}
.img-info {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
img[alt="Eva"] {
  border-radius: 50%;
}
img[alt="header"] {
  width: 100%;
}
img[alt="footer"] {
  width: 100%;
}
img[alt="bag"] {
  text-align: left;
  width: 70px;
  cursor: pointer;
}
</style>