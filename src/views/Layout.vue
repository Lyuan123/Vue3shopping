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
  <footer>底部组件</footer>
</template>

<script>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
export default {
     components: { AppTopnav ,AppHeader }
}
</script>

<style>

</style>