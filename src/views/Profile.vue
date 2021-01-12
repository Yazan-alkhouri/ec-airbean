<template>
<div id="all">
    <header>
    <img src="@/assets/graphics/graphics-header.svg" alt="header" />
    
     <router-link to="/nav"><Ham />
     </router-link>
    
    </header>

    
</div>
</template>

<script>
import Ham  from '@/components/ham.vue'
export default {
    components: {
    Ham, 
  },

}
</script>

<style scoped>
#all{
    background-color: rgb(46, 39, 39);
}
</style>