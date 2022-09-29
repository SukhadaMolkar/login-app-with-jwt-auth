import { createStore } from 'vuex'

export default createStore({
  state: {
    // access:'',
    // refresh:''
    token:'',
    isAuthenticated:false
  },
  mutations: {
    initializeStore(state) {
      if ( localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated=true
      } else{
        state.token = ''
        state.isAuthenticated=false
      }
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated=true
      localStorage.setItem("token", state.token)
    },
    removeToken(state) {
      state.token = ''
      state.isAuthenticated=false
      localStorage.removeItem("token")
    }
  },
  actions: {
  },
  modules: {
  }
})
