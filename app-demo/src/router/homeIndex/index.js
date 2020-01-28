export default {
  path: '/HomeIndex',
  name: 'HomeIndex',
  redirect: '/txt',
  component: () => import('../../views/HomeIndex'),
  children: [
    {
      path: '/txt',
      name: 'Txt',
      // redirect: '/HomeIndex/txt.vue',
      component: () => import('../../views/HomeIndex/txt.vue')
    },
    {
      path: '/jpg',
      name: 'Jpg',
      component: () => import('../../views/HomeIndex/jpg.vue')
    },
    {
      path: '/gif',
      name: 'Gif',
      component: () => import('../../views/HomeIndex/gif.vue')
    }
  ]
};
