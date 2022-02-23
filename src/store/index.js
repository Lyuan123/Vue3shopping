import { createStore } from 'vuex'

// a模块
const moduleA = {
  state:{
    username:'moudleA'
  },
  getters:{
    newName(state){
      return state.username +'!!!'
    }
  },
  mutations:{
    updateName (state){
      stete.username = "moduleAAAAAA"
    }
  }
}
// b模块
const moduleB = {
  namespaced: true,
  state:{
    username:'moudleB'
  },
  getters:{
    newName(state){
      return state.username +'!!!'
    }
  },
  mutations: {
        updateName(state) {
          state.username = 'ls'
        }
      },
      actions: {
        updateName (ctx) {
          // 发请求
          setTimeout(()=>{
            ctx.commit('updateName')
          },1000)
        }
      },
}
export default createStore({
  modules:{
    moduleA,
    moduleB
  }
})
// export default createStore({
//   state: {
//     username: 'zs'
//   },
//   getters:{
//     newName (state){
//       return state.username + "!!!"
//     }
//   },
//   mutations: {
//     updateName(state) {
//       state.username = 'ls'
//     }
//   },
//   actions: {
//     updateName (ctx) {
//       // 发请求
//       setTimeout(()=>{
//         ctx.commit('updateName')
//       },1000)
//     }
//   },
//   modules: {
//   }
// })
