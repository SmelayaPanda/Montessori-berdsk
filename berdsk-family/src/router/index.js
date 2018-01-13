import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import AboutUs from '@/components/about_us/AboutUs'
import Services from '@/components/services/Services'
import News from '@/components/news/News'
import Contacts from '@/components/contacts/Contacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    }, {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    }
  ],
  mode: 'history'
})
