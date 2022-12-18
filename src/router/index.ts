import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const routes = setupLayouts(generatedRoutes)

console.log({ routes })

const router = createRouter({
  history: createWebHistory(),
  routes
})

// handle something before access the route
// e.g. check accessing permissions
router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.requireAuth
  if (!requireAuth) {
    return next()
  }

  console.log('require auth')
  next()
})

export default router
