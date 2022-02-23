<template>
   <div>
    <First />
    <!-- <nuxt-link :to="maison">
        Maison
    </nuxt-link> -->
   </div>
</template>

<script>
export default {
  name: 'IndexPage',
  
    computed:{
        tabImg(){
            this.$store.state.tabImg;
      }
     },


    mounted(){
          // this.$store.dispatch('getImg')
           this.$store.dispatch('getImg');
    }

     }

</script>
