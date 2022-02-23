<template>
  <div>
      <h1>Cliquez sur l'image que vous souhaitez !</h1>

      <!-- <nuxt-link v-for="(img, index) in this.tab" :key="index" :to="'/' + index">
            <img :src="img.urls.raw" alt="">
      </nuxt-link >
      <template v-bind:tab="this.tab"></template> -->
  </div>
</template>

<script>
import axios from "axios"
export default {
 name: "First",
 
 computed:{
     tabImg(){
         return this.$store.state.tabImg
     }
 }



}
</script>

<style scoped>
    div{
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    img{
        width: 500px;
        height: 300;
        margin: 10px;

    }
</style>