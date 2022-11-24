<template>
  <!-- 顶部通栏 -->
   <AppTopnav/>
   
  <!-- 头部组件 -->
  <AppHeader/>
  <!-- 内容容器 -->
  <div class="main">
      <!-- 二级路由 -->
      <RouterView />
  </div>
  <!-- 底部组件 -->
  <div ref="target">哈哈吼吼</div>
  <div style="height:1000px;width:100%;background:red"></div>
  <div ref="targetw" style="height:100px;width:100%">
asdas
  </div>
  <footer>底部组件</footer>
</template>

<script>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from '@vue/reactivity'
export default {
     components: { AppTopnav ,AppHeader },
     setup(){
         const target = ref(null)
         const targetw = ref(null)
         console.log("target",target);
          const targetIsVisible = ref(false)

    const { stopt } = useIntersectionObserver(
      target,
      ([{ isIntersecting }], observerElement) => {
          console.log("进入了可视区");
        targetIsVisible.value = isIntersecting
      },
    )
    const { stop } = useIntersectionObserver(
      targetw,
      ([{ isIntersecting }], observerElement) => {
          console.log("进入了可视区2");
        targetIsVisible.value = isIntersecting
      },
    )
         return {target}
     }
}
</script>

<style>

</style>