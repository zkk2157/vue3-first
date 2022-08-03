import { createRouter,createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import ShowTime from '../components/ShowTime.vue'
import OurPhotos from '../components/OurPhotos.vue'


const routes = [
  {
    path:'/',
    name:'Login',
    component:Login
    
  },
  {
   path:'/main',
   name:'main',
   component:Main

  },
  {
    path:'/time',
    name:'showtime',
    component:ShowTime
  },
  {
    path:'/photo',
    name:'showphoto',
    component:OurPhotos
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
