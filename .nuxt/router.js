import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _658fa440 = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _59eba7b7 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _79b1bb6a = () => interopDefault(import('../pages/feedback.vue' /* webpackChunkName: "pages/feedback" */))
const _39340dff = () => interopDefault(import('../pages/gallery/index.vue' /* webpackChunkName: "pages/gallery/index" */))
const _b0ff7918 = () => interopDefault(import('../pages/gallery/_uid.vue' /* webpackChunkName: "pages/gallery/_uid" */))
const _79a3827c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _658fa440,
    name: "prismic-preview"
  }, {
    path: "/about",
    component: _59eba7b7,
    name: "about"
  }, {
    path: "/feedback",
    component: _79b1bb6a,
    name: "feedback"
  }, {
    path: "/gallery",
    component: _39340dff,
    name: "gallery"
  }, {
    path: "/gallery/:uid",
    component: _b0ff7918,
    name: "gallery-uid"
  }, {
    path: "/",
    component: _79a3827c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
