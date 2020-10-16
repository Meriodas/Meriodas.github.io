import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta:{
        keepalive: true
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/videodetail',
    name: 'VideoDetail',
    component: () => import('../views/VideoDetail.vue')
  },
  {
    path: '/editcategory',
    name: 'EditCategory',
    component: () => import('../views/EditCategory.vue')
  },
  {
    path: '/userinfo',
    name: 'UserInfo',
    component: () => import('../views/UserInfo.vue'),
    meta:{
        istoken: true
    }
  },
  
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) =>{
    // console.log(to,from)
   
    // if(!localStorage.getItem('CSTK') && !localStorage.getItem('id') && to.meta.istoken == true){
    //     Vue.prototype.$toast.fail('请重新登陆')
    //     Vue.$router.push({name: 'UserInfo'})
    //     return
    // }
        next(vm =>{
            if(!localStorage.getItem('CSTK') && !localStorage.getItem('id') && to.meta.istoken == true){
                vm.prototype.$toast.fail('请重新登陆')
                vm.$router.push({name: 'UserInfo'})
                return
            }
        })
})



export default router
