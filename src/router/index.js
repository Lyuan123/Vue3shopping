import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home')
const routes = [
  // 一级路由布局容器
  {
    path: '/', component: Layout, 
    children: [
      { path: '/', component: Home }
    ]
  }
]

const router = createRouter({
  // 使用hash的路由模式
  history: createWebHashHistory(),
  routes
})

export default router
