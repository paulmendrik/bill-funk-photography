import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6460474f = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _29fa7f26 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _9b713f08 = () => interopDefault(import('../pages/feedback.vue' /* webpackChunkName: "pages/feedback" */))
const _43aff324 = () => interopDefault(import('../pages/gallery/index.vue' /* webpackChunkName: "pages/gallery/index" */))
const _39a66064 = () => interopDefault(import('../pages/gallery/2.vue' /* webpackChunkName: "pages/gallery/2" */))
const _398a3162 = () => interopDefault(import('../pages/gallery/3.vue' /* webpackChunkName: "pages/gallery/3" */))
const _396e0260 = () => interopDefault(import('../pages/gallery/4.vue' /* webpackChunkName: "pages/gallery/4" */))
const _73040125 = () => interopDefault(import('../pages/gallery/_uid.vue' /* webpackChunkName: "pages/gallery/_uid" */))
const _49b259eb = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6460474f,
    name: "prismic-preview"
  }, {
    path: "/about",
    component: _29fa7f26,
    name: "about"
  }, {
    path: "/feedback",
    component: _9b713f08,
    name: "feedback"
  }, {
    path: "/gallery",
    component: _43aff324,
    name: "gallery"
  }, {
    path: "/gallery/2",
    component: _39a66064,
    name: "gallery-2"
  }, {
    path: "/gallery/3",
    component: _398a3162,
    name: "gallery-3"
  }, {
    path: "/gallery/4",
    component: _396e0260,
    name: "gallery-4"
  }, {
    path: "/gallery/:uid",
    component: _73040125,
    name: "gallery-uid"
  }, {
    path: "/",
    component: _49b259eb,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
