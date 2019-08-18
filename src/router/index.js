import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import mainRouter from './main'
import chinemaRouter from './chinema'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,//这里可以更改路径
  routes: [
    movieRouter,
    mainRouter,
    chinemaRouter,
    {
      path:'/*',
      redirect:"/movie"

    }
    
  ]
})
