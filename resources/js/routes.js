import Viewarticles from "./components/articles/Viewarticles.vue"
import Viewcategorie from "./components/categories/Viewcategorie.vue"
import Addcategorie from "./components/categories/Addcategorie.vue"
import Addaticle from "./components/articles/addarticle.vue"
import Viwearticletable from "./components/articles/Viwearticletable.vue"
export const routes=[
  
    {
        name:"Viewcategorie",
        path:"/listcat",
        component:Viewcategorie
    },
    {
        name:"Addcategorie",
        path:"/addcategorie",
        component:Addcategorie
    },
    {
        name:"Viewarticles",
        path:"/listart",
        component:Viewarticles
    },
    {
        name:"Addarticle",
        path:"/addarticle",
        component:Addaticle
    },
    {
        name:"Viewarticletable",
        path:"/articletable",
        component:Viwearticletable
    }
]
