import Vue from 'vue'
import Router from 'vue-router'
import all from '../components/all/all'
import release from '../components/release/release'
import message from '../components/message/message'
import personal from '../components/personal/personal'
import showdetail from '../components/showdetail/showdetail'
import personalcenter from '../components/personalcenter/personalcenter'



Vue.use(Router)


export default new Router({
  routes: [
  	{
  		path:'/',
      name: '首页',
  		redirect:'all'
  	},
    {
      path: '/all',
      name: '最新发布',
      component: all,
    },
    {
      path: '/good',
      name: '新手入门',
      component: all
    },
    {
      path: '/weex',
      name: '技术文章',
      component: all
    },
    {
      path: '/share',
      name: 'FAQ',
      component: all
    },
    {
      path: '/ask',
      component: all
    },
    {
      path: '/job',
      component: all
    },
    {
      path: '/release',
      component: release
    },
    {
      path: '/message',
      component: message
    },
    {
      path: '/personal',
      component: personal
    },
    {
      path: '/personalcenter',
      component: personalcenter
    },
    {
      path: '/showdetail/:id',
      component: showdetail
    },

  ]
})
