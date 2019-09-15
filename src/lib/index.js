import Header from "./header/index.vue"
import Bscroll from "./bscroll/index.vue";
import ZYDBscroll from "./moreScroll/index.vue";
const components = [
    Header,
    Bscroll,
    ZYDBscroll
]


const install = (Vue)=>{
    if(Vue){
        components.map(item=>{
            Vue.component(item.name,item);
        })
    }
}

export default install;