export const actions = {
  async nuxtServerInit ({ commit }) {
    
  let tabImg = await this.$axios.get('https://api.unsplash.com/search/photos/?query=person&client_id=KhmBQyxSIrmHcVo3LRMfSgTnjmco3ah1uDFnw3RhicY')
  // console.log("ACTION", tabImg)  
  commit('GET_IMG', tabImg.data.results)
}



  
}


export const state = () => ({
    tabImg: []
  })

  export const mutations = {
    GET_IMG(state, tabImg){
        state.tabImg = tabImg
        // console.log("MUATIONS", tabImg)
    },
  }

