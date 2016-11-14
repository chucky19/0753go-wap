import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import Index from './Index'
import About from './About'
import Catalog from './Catalog'
import Flow from './Flow'
import User from './User'
import NotFound from './404'

Vue.use(ElementUI)

/* eslint-disable no-new */

const routes = {
  '/': Index,
  '/about': About,
  '/catalog': Catalog,
  '/flow': Flow,
  '/user': User,
  '/app': App
}
new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
