<template>
   <div>
    <h1>Cliquez sur l'image que vous souhaitez !</h1>

    <!-- <img :src="tabImg[0].urls.raw" alt="">
     -->
     <div v-for="img in tabImg" :key="img.id">
              <First :tabImg="img" />
     </div>
     <!-- <div>
       {{tabImg}}
     </div> -->
    <!-- <nuxt-link :to="maison">
        Maison
    </nuxt-link> -->
   </div>
</template>

<script>
import Vue from "vue"
export default Vue.extend({
  name: 'IndexPage',
  
    computed:{
        tabImg(){
            // console.log('INDEX VUE - computed', this.$store.state.tabImg) 
            return this.$store.state.tabImg;

     }
     },
     mounted(){
    
     }



     })

</script>
