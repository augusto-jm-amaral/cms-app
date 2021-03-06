import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Post from '@/components/Post'
import SinglePost from '@/components/SinglePost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/post',
      name: 'Post',
      component: Post,
      meta: { requiresAuth: true }
    },
    {
      path: '/post/:_id',
      name: 'Post',
      component: Post,
      meta: { requiresAuth: true }
    },
    {
      path: '*',
      name: 'SinglePost',
      component: SinglePost
    }
  ],
  mode: 'history'
})
