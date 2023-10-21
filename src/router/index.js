import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HodLoginViews from '../views/HodLoginViews.vue'
import BursaViews from '../views/BursaViews.vue'
import StudentsFeesPayment from '../views/StudentsFeesPayment.vue'
import SuccessPageViews from '../views/SuccessPageViews.vue'
import DashBoardViews from '../views/DashBoardViews.vue'
import BursaPageView from '../views/BursaPageView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    { path: '/hodlogin',
    name: 'hodlogin',
    component: HodLoginViews
    },

    { path: '/bursalogin',
    name: 'bursalogin',
    component: BursaViews
    },

    { path: '/StudentsFeesPayment',
    name: 'fps',
    component: StudentsFeesPayment
    },


    {
      path: '/SuccessPage',
      name: 'success',
      component: SuccessPageViews
 
      },

      {
        path: '/dashboard',
        name: 'dashboard',
        component: DashBoardViews
   
        },

        {
          path: '/bursalandingpage',
          name: 'bursalandingpage',
          component: BursaPageView
        },
    {
      path: '/about',
      name: 'about',
      // component: SignUpView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
