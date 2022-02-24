<template>
  <div>
      <nuxt-link :to="`/${tabImg.id}`">
             <img :src="tabImg.urls.raw" alt="">
             
      </nuxt-link >
  </div>
</template>

<script>

export default {
 name: "First",

 props: ['tabImg'],
 methods:{
        sendTopage(){
            this.$router.push({path:"/admin/posts/update/"+this.tabImg.id})
        }
 },

 mounted(){
    //  console.log('First - MOUNTED', this.tabImg)
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