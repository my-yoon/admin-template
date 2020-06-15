/**
 * about routing configuration
 */
export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/v1.0/dashboard/Dashboard.vue'),
    meta: {
      unauthorized: false
    }
  }
]
