import dashboard from './biz/dashboard'

/**
 * about routing configuration
 */
const appId = process.env.APP_ID

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Index',
    component: () => import('@/views/v1.0/layout/TheContainer.vue'),
    meta: {
      unauthorized: false,
    },
    children: [
      ...dashboard,
    ]
  }, {
    path: '/sign',
    name: 'SignIn',
    component: () => import('@/views/v1.0/sign/Login.vue'),
    meta: {
      unauthorized: true
    }
  }

]

export default routes
