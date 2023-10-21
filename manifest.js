export const manifestForPlugIn = {
    registerType:'prompt',
    // includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
    manifest:{
      name:"Calculator",
      short_name:"Calculator",
      description:"Calculator",
      icons:[{
        src: '/android-chrome-192x192.png',
        sizes:'192x192',
        type:'image/png',
      },
      {
        src:'/android-chrome-512x512.png',
        sizes:'512x512',
        type:'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes:'180x180',
        type:'image/png',
      },
      {
        src: '/maskable_icon.png',
        sizes:'512x512',
        type:'image/png',
      }
    ],
    theme_color:'#171717',
    background_color:'#f0e7db',
    display:"standalone",
    scope:'/',
    start_url:"/",
    orientation:'portrait'
    }
  }