import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import AboutUs from '@/components/about_us/AboutUs'
import Services from '@/components/services/Services'
import Contacts from '@/components/contacts/Contacts'
import Meetups from '@/components/meetup/Meetups'
import Meetup from '@/components/meetup/Meetup'
import CreateMeetup from '@/components/meetup/CreateMeetup'
import Profile from '@/components/user/Profile'
import Signin from '@/components/user/Signin'
import Signup from '@/components/user/Signup'
import AuthGuard from '../router/auth-guard'

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
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: CreateMeetup,
      beforeEnter: AuthGuard // check user is login
    },
    {
      path: '/meetups/:id',
      name: 'Meetup',
      props: true,
      component: Meetup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard // check user is login
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
    }
  ],
  mode: 'history'
})
