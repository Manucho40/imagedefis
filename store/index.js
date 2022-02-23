export const state = () => ({
    tabImg: []
  })

  export const mutations = {
    GET_IMG(state, ip){
        state.tabImg = ip;
    },
  }

  export const actions = {
      async getImg ({ commit }) {
        console.log('serveur')
      let ip = await this.$axios.get('https://api.unsplash.com/search/photos/?query=person&client_id=KhmBQyxSIrmHcVo3LRMfSgTnjmco3ah1uDFnw3RhicY')
      commit('GET_IMG', ip)
    }
    


      
  }