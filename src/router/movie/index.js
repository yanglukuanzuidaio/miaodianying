export default {
    path : '/movie',
    component : () => import('@/page/Movie'),
    children:[
        {
                  path:'city',
                 component:() =>import('@/components/City')
         },
         {
                path:'commingsoon',
                component:() =>import('@/components/CommingSoon')
          },
          {
                path:'newplaying',
                component:() =>import('@/components/NewPlaying')
          },
          {
                path:'seach',
                component:() =>import('@/components/Seach')
          },
          {
            path:'/movie',
            redirect:"/movie/newplaying"
      
          }
     ]
}