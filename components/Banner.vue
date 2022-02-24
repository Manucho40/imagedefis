<template>
   <div>
          <nav>
              <img :src="img.urls.raw">
          </nav> 

         
    </div>
</template>

<script>
export default {
   props: ['imgBan'],
   computed:{
       img(){
            for(let i = 0; i < this.imgBan.length; i++){
            if(this.imgBan[i].id == this.$route.params.id){
              return this.imgBan[i]
            }
        }       }
   }
}
</script>

<style scoped>
    img{
        width: 100vw;
        height: 400px;
    }
</style>