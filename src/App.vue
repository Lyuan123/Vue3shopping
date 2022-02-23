<template>
  <div class="container">
    <!-- 1.1使用A模块的state数据 -->
    <p>{{$store.state.moduleA.username}}</p>
    <!-- 1.2使用A模块的getters数据 -->
    <p>{{$store.getters.newName}}</p>
    <!-- 2.1.使用B模块的state数据 -->
    <p>{{$store.state.moduleB.username}}</p>
    <!-- 2.2.使用B模块的getters数据 -->
    <p>{{$store.getters['moduleB/newName']}}</p>
    <button @click="mutationsFn">mutation</button>
    <button @click="actionsFn">action</button>
    <p>哈哈吼吼</p>
  </div>
</template>

<script>
import {useStore} from 'vuex'
export default {
  name:'App',
  setup(){
    const store = useStore()
    const mutationsFn = () => {
      // 提交对B模块的修改
      store.commit('moduleB/updateName')
    }
    const actionsFn = () =>{
      // 调用B模块actions
      store.dispatch('moduleB/updateName')
    }
    return {mutationsFn,actionsFn}
  }
}
</script>

<style>

</style>