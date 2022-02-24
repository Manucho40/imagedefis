<template>
          <nav>
              
               <Banner :imgBan="imgBan" />
          </nav> 
          
</template>

<script>

export default {
  computed:{
       imgBan(){
            return this.$store.state.tabImg
       }
   },

  

}
</script>

<style>
img{
        width: 100vw;
        height: 400px;
    }
    
</style>