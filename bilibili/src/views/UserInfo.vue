<template>
    <div class="userinfo">

        <div class="userinfo-nav">
            <van-nav-bar
                @click-left="goHome"
                >
                <template #left>
                    <div class="logo-box">
                        <img class="auto-img" src="../assets/img/bilibili.png" alt="">
                    </div>
                </template>
                <template #title>
                    <van-search v-model="value" placeholder="请输入搜索关键词" />
                </template>
                <template #right >
                    <div class="head-portrait">
                        <img class="auto-img" src="../assets/img/01small.jpg" alt="" v-if="!userinfo.user_img">
                        <img class="auto-img" :src="userinfo.user_img" alt="">
                    </div>
                </template>
            </van-nav-bar>
        </div>

        <div class="space">
            <div class="banner">
                <div class="banner-box"></div>

                <div class="avatar">
                    <div class="part1 clearfix">
                        <div class="face fl">
                            <img class="auto-img" src="../assets/img/01small.jpg" alt="" v-if="!userinfo.user_img">
                            <img class="auto-img" :src="userinfo.user_img" alt="">
                        </div>

                        <div class="relation fr">
                            <div class="relation-box">
                                <span class="fans">
                                    <span class="num">7</span>
                                    <span class="type">粉丝</span>
                                </span>
                                <span class="split"></span>
                                <span class="follow">
                                    <span class="num">308</span>
                                    <span class="type">关注</span>
                                </span>
                                <span class="split"></span>
                                <span class="likes">
                                    <span class="num">7308</span>
                                    <span class="type">获赞</span>
                                </span>
                            </div>
                            <div class="edit-btn">
                                <van-button plain class="theme-border" color="#fb7299" type="primary" @click="goEdit">编辑资料</van-button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="part2">
                        <div class="base">
                            <span class="name">{{userinfo.name}}</span>
                        </div>
                        <div class="desc">
                            <span class="content">{{userinfo.user_desc}}</span>
                            <span class="content" v-if="!userinfo.user_desc">这人很懒，什么东西都没有留下</span>
                        </div>
                    </div>
                    
                    <div class="tabs">
                        <van-tabs v-model="activeName">
                          <van-tab title="动态" name="a"></van-tab>
                          <van-tab title="视频" name="b"></van-tab>
                        </van-tabs>
                    </div>
                    

                </div>

            </div>
        </div>


    </div>
</template>


<script>
    import '../assets/less/userinfo.less'
    export default {
        name: "UserInfo",
        data() {
            return {
                value: '',
                activeName: 'a',
                userinfo: []
            }
        },
        
        created() {
            this.userInfoData()
        },
        
        methods:{
            
            //回到主页
            goHome(){
                this.$router.push({name: 'Home'})
            },
            
            userInfoData(){
                //
                let tokenString = localStorage.getItem('CSTK');
                if(!tokenString){
                	this.$router.push({name: 'Login'})
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
            },
            
            goEdit(){
                this.$router.push({name: 'Detail'})
            },
            
        }
        
    }
</script>

<style>
</style>
