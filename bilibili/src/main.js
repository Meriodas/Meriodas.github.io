import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'


//导入vant框架的组件
import {
	NavBar,
	Form,
	Field,
	Button,
	Popup,
	Cell,
	Toast,
	ActionSheet,
	CellGroup,
	Icon,
	Tabbar,
	TabbarItem,
	Notify,
	Swipe,
	SwipeItem,
	Lazyload,
	Grid,
	GridItem,
	Search,
	Sidebar,
	SidebarItem,
	GoodsAction,
	GoodsActionIcon,
	GoodsActionButton,
	Stepper,
	SwipeCell,
	Card,
	Checkbox,
	SubmitBar,
	Empty,
	AddressList,
	AddressEdit,
	Uploader,
	Tab,
	Tabs,
	Dialog,
    List,
    Collapse,
    CollapseItem,
    Tag,
    Divider,
    ShareSheet 
} from 'vant'

//全局注册
Vue
	.use(NavBar,Form)
	.use(Field)
	.use(Button)
	.use(Popup)
	.use(Cell)
	.use(Toast)
	.use(ActionSheet)
	.use(CellGroup)
	.use(Icon)
	.use(Tabbar)
	.use(TabbarItem)
	.use(Notify)
	.use(Swipe)
	.use(SwipeItem)
	.use(Lazyload)
	.use(Grid)
	.use(GridItem)
	.use(Search)
	.use(Sidebar)
	.use(SidebarItem)
	.use(GoodsAction)
	.use(GoodsActionButton)
	.use(GoodsActionIcon)
	.use(Stepper)
	.use(SwipeCell)
	.use(Card)
	.use(Checkbox)
	.use(SubmitBar)
	.use(Empty)
	.use(AddressList)
	.use(AddressEdit)
	.use(Uploader)
	.use(Tab)
	.use(Tabs)
	.use(Dialog)
    .use(List)
    .use(Collapse)
    .use(CollapseItem)
    .use(Tag)
    .use(Divider)
    .use(ShareSheet)

//关闭生产环境提示
Vue.config.productionTip = false

//注册axios, ajax方案，用于请求数据
Vue.use(VueAxios,axios)

//设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'

//设置请求基础路径
axios.defaults.baseURL = 'http://112.74.99.5:3000/web/api'


//  添加请求拦截器
axios.interceptors.request.use(function (config) {
    //  在发送请求之前先做点事
    
    if(localStorage.getItem('CSTK') && localStorage.getItem('id')){
        config.headers.Authorization = 'Bearer ' + localStorage.getItem('CSTK')
    }
    return config;
  }, function (error) {
    //  发生请求错误
    return Promise.reject(error);
  });
 
//  添加响应拦截器
axios.interceptors.response.use(function (response) {
    //  任何2xx范围内的状态码都会触发此函数
    //  对响应数据进行处理
    return response;
  }, function (error) {
    //  任何超出2xx范围的状态代码都会触发此函数
    //  做一些响应错误
        if(error.response.status == 401 || error.response.status == 500 || error.response.status == 402){
            router.push('/login')
            vue.prototype.$toast(error.response.data.message)
        }
    
    return Promise.reject(error);
  });


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
