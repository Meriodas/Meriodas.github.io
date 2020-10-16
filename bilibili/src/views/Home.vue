<template>
    <div class="home">
        <div class="userinfo-nav">
            <van-nav-bar
                @click-right="goUserInfo"
            
            >
                <template #left>
                    <div class="logo-box">
                        <img class="auto-img" src="../assets/img/bilibili.png" alt="">
                    </div>
                </template>
                <template #title>
                    <van-search v-model="value" placeholder="请输入搜索关键词" />
                </template>
                <template #right>
                    <div class="head-portrait">
                        <img class="auto-img" src="../assets/img/01small.jpg" alt="" v-if="!userinfo.user_img">
                        <img class="auto-img" :src="userinfo.user_img" alt="">
                    </div>
                </template>
            </van-nav-bar>
        </div>

        

        <div class="banner">
            <div class="banner-box">
                <div class="tab-control" @click="goEditCategory"><van-icon size="20" name="setting-o" color="#fb7299" /></div>
                <van-tabs v-model="active" animated swipeable>
                    <van-tab v-for="(item,index) in category" :key="index" :title="item.title">
                        <div class="detail-video">
                            <div class="detail-type clearfix">
                                
                                <div class="item-video fl" 
                                    v-for="(citem,cindex) in item.list" 
                                    :key="cindex"
                                    @click="goItemDetail(citem)"
                                    >
                                    <div class="item-pic" >
                                        <img class="auto-img ite m-img" :src="citem.img" alt="">
                                        <div class="count">
                                            <span class="watch ">
                                                <van-icon name="video-o" />
                                                111
                                            </span>
                                            <span class="barrage ">
                                                <van-icon  name="other-pay" />
                                                111
                                            </span>
                                        </div>
                                    </div>
                                    <div class="item-title">
                                        {{citem.name}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <van-list
                              v-model="item.loading"
                              :finished="item.finished"
                              finished-text="我也是有底线的"
                              :immediate-check="false"
                              @load="onLoad"
                            >
                              <van-cell v-for="item in list" :key="item" :title="item" />
                            </van-list>
                        </div>
                        
                    </van-tab>
                </van-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    import '../assets/less/home.less'
    export default {
        name: 'Home',
        data() {
            return {
                value: '',
                active: 0,
                category: [],
                list: [],
                loading: false,
                finished: false,
                userinfo: []
            }
        },

        created() {
            // this.selectArticle()
            this.selectCategory();
            this.categoryItem();
            this.userInfoData();
        },
        
        activated() {
          if(localStorage.getItem('newcategory')){
              let newcategory = JSON.parse(localStorage.getItem('newcategory'))
              this.changeCategory(newcategory);
              this.selectArticle()
              
          } 
        },
        
        methods: {
            
            //前往个人详情页
            goUserInfo() {
                this.$router.push({name: 'UserInfo'})
            },
            
            //前往修改栏目
            goEditCategory() {
                this.$router.push({name: "EditCategory"})
            },
            
            //请求获取视频栏目
            selectCategory() {
                
                if(localStorage.getItem('newcategory')){
                    return
                }
                this.$toast.loading({
                    message: '加载中...',
                    //防止穿透
                    forbidClick: true,
                    duration: 0,
                    loadingType: 'spinner',
                })
                
                this.axios({
                    method: 'get',
                    //请求参数
                    url: '/category'

                }).then(result => {
                    //关闭提示加载
                    this.$toast.clear();
                    if (result.status == 200) {
                        // this.category = result.data
                        this.changeCategory(result.data);
                    }
                }).catch(err => {
                    this.$toast.clear();
                })
            },

            changeCategory(data) {
                let categorys = data.map((item, index) => {
                    item.list = []
                    item.page = 0
                    item.finished = false
                    item.load = false
                    item.pagesize = 10
                    return item
                })
                this.category = categorys
                this.selectArticle()
            },

            categoryItem() {
                let categoryItem = this.category[this.active]
                return categoryItem
            },

            selectArticle() {
                let categoryItem = this.categoryItem();

                this.axios({
                    method: 'get',
                    //请求参数
                    url: '/detail/' + categoryItem._id,
                    params: {
                        page: categoryItem.page,
                        pagesize: categoryItem.pagesize
                    }

                }).then(result => {
                    categoryItem.list.push(...result.data)
                    setTimeout(() =>{
                        categoryItem.loading = false;
                    },1000)
                    if(result.data.length < categoryItem.pagesize) {
                        categoryItem.finished = true;
                    }

                }).catch(err => {
                })
            },

            goItemDetail(citem){
                this.$router.push({name: 'VideoDetail',query: {id:citem.id} })
            },
            
            onLoad() {
                  // 异步更新数据
                  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                let categoryItem = this.categoryItem();
                setTimeout(() => {
                    categoryItem.page += 1;
                    this.selectArticle();
                 }, 2000);
            },
            
            //获取个人信息
            userInfoData(){
                // 检查是否有token
                let tokenString = localStorage.getItem('CSTK');
                if(!tokenString){
                    this.userinfo.user_img=""
                    return;
                }    
                    this.$toast.loading({
                    	message: '加载中...',
                    	//防止穿透
                    	forbidClick: true,
                    	duration: 0,
                    	loadingType: 'spinner',
                    })
                    this.axios({
                    	method: 'get',
                    	//请求参数
                    	url: '/user/' + localStorage.getItem('id')
                        
                    }).then(result =>{
                    	//关闭提示加载
                    	this.$toast.clear();
                        if(result.status == 200){
                            this.userinfo = result.data[0];
                        }
                        
                    }).catch(err =>{
                    	this.$toast.clear();
                    })
              }      
            
        },
        

        watch: {
            active() {
                this.selectArticle();
            }
        }



    }
</script>
