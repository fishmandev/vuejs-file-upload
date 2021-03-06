import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ImageUploader from '@/components/ImageUploader'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/image-uploader',
      name: 'ImageUploader',
      component: ImageUploader
    }
  ]
})
