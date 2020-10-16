<template>
    <div class="video-detail">
        <div class="userinfo-nav">
            <van-nav-bar @click-left="goHome" @click-right="goUserInfo">
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
                        <img class="auto-img" v-if="!myuser.user_img" src="../assets/img/01small.jpg" alt="">
                        <img class="auto-img" :src="myuser.user_img" alt="">
                    </div>
                </template>
            </van-nav-bar>
        </div>

        <div class="video-url">
            <div class="video">
                <video :src="videoData.content" :poster="videoData.img" controls>
                </video>
            </div>

            <div class="video-info">
                <div class="info-collapse">
                    <van-collapse v-model="activeNames">
                        <van-collapse-item name="1" :border="false">
                            <template #title>
                                <van-tag round color="#f4f4f4" text-color="#fb7299" size="large">
                                    {{category.title}}
                                </van-tag>
                                <span class="video-name">{{videoData.name}}</span>
                                <div class="up" v-if="videoData.userinfo">
                                    <van-tag color="#212121" plain>up</van-tag>
                                    <span class="upname" v-if="userinfo.name">{{userinfo.name}}</span>
                                    <span class="vd">123.8万观看</span>
                                    <span class="vd">1735弹幕</span>
                                    <span class="vd">{{videoData.date}}</span>
                                </div>

                            </template>
                            
                            <div v-if="userinfo">
                                简介:<span class="up-desc" v-if="!userinfo.user_desc">这个人很神秘，什么都没有留下</span>
                                <span class="up-desc">{{userinfo.user_desc}}</span>
                            </div>
                        </van-collapse-item>
                    </van-collapse>
                    
                    <div class="toolbar">
                        <div class="toolbar-left clearfix">
                            <div class="">
                                <div @click="collectVideo" :class="{activecolor:collectionActive}" >
                                    <div class="icon-bar fl"  >
                                        <van-icon name="star" />
                                    </div>
                                    <div class="fl item-bar">收藏</div>
                                </div>
                                <div @click="followUp" :class="{activecolor:followActive}" >
                                    <div class="icon-bar fl">
                                        <van-icon name="like" />
                                    </div>
                                    <div class="fl item-bar">关注</div>
                                </div>
                                <div class="icon-bar fl">
                                    <van-icon name="share" />
                                </div>
                                <div class="fl " @click="showShare = true">分享</div>
                                <van-share-sheet
                                  v-model="showShare"
                                  title="立即分享给好友"
                                  :options="options"
                                  @select="onSelect"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="swithcher">
            <van-tabs v-model="active" sticky animated swipeable>
                <van-tab title="相关推荐">
                    <div class="commend-box">
                        <div class="commend-item clearfix">
                            <div class="commend-item-box fl" v-for="(item,index) in commondList" :key="index" @click="goItemDetail(item),backtop()">
                                <div class="img-box">
                                    <img class="auto-img" :src="item.img" alt="">
                                </div>
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
                                <div class="name-box">
                                    {{item.name}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <van-list :finished="true" finished-text="我也是有底线的">
                    </van-list>
                </van-tab>
                <van-tab :title="`评论 ${String(commentLength)}`">
                    <div class="comment">
                        <div class="comment-box">
                            <div class="comment-input clearfix">
                                <span class="avatar fl">
                                    <img class="auto-img" v-if="!myuser.user_img" src="../assets/img/01small.jpg" alt="">
                                    <img class="auto-img" :src="myuser.user_img" alt="">
                                </span>
                                <div class="inputs fl">
                                    <van-field class="inputs" v-model="comments" placeholder="试着说点什么" @focus="onfoucus" />
                                </div>
                                <van-button color="#fb7299" class="customized" round @click="postComment">发表</van-button>
                            </div>

                            <div class="comment-list">
                                <div class="comment-list-box" v-for="(item,index) in commentData.slice(0,10)" :key="index">
                                    <div class="comment-item-once">
                                        <div class="avatar">
                                            <img class="auto-img" v-if="!item.userinfo.user_img" src="../assets/img/01small.jpg" alt="">
                                            <img class="auto-img" :src="item.userinfo.user_img" alt="">
                                        </div>
                                        <div class="comment-content">
                                            <p>
                                                <span class="name" v-if="item.userinfo">{{item.userinfo.name}}</span>
                                                <span class="name" v-else>匿名用户</span>
                                                <span class="time">{{item.comment_date}}</span>
                                            </p>
                                            <div class="content">
                                                {{item.comment_content}}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="comment-item-second">
                                        <div class="second-box">
                                            <div class="second-item" v-for="(sitem,sindex) in item.child.slice(0,3)" v-if="sitem.comment_content">
                                                <p><span class="pname" >{{sitem.userinfo.name}}:</span><span class="msg">{{sitem.comment_content}}</span></p>
                                            </div>
                                            <a href="javascript:void(0)" v-if="item.child.length > 3">共{{item.child.length}}条回复 ></a>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>


    </div>
</template>

<script>
    import '../assets/less/videodetail.less'
    export default {
        data() {
            return {
                id: '',
                value: '',
                videoData: [],
                activeNames: ['0'],
                userinfo: [],
                category: [],
                active: 0,
                commondList: [],
                comments: '',
                myuser: [],
                commentData: [],
                secondComment: [],
                commentLength: '',
                Postcom:{
                    comment_content: '',
                    comment_date: '',
                    article_id: '',
                    parent_id: null,
                },
                collectionActive: false,
                followActive: false,
                showShare: false,
                    options: [
                         [
                            { name: '微信', icon: 'wechat' },
                            { name: '微博', icon: 'weibo' },
                            { name: 'QQ', icon: 'qq' },
                          ],
                          [
                             { name: '复制链接', icon: 'link' },
                             { name: '分享海报', icon: 'poster' },
                             { name: '二维码', icon: 'qrcode' },
                          ],
                     ],
            }
        },

        created() {
            this.id = this.$route.query.id;
            this.getVideoUrl()
            this.getCommondList()
            this.getUserInfo()
            this.getCommentData()
            this.collectionInit()
        },

        methods: {

            //回到首页
            goHome() {
                this.$router.push({
                    name: 'Home'
                })
            },

            //前往个人详情页
            goUserInfo() {
                this.$router.push({
                    name: 'UserInfo'
                })
            },

            //获取视频链接
            getVideoUrl() {
                this.$toast.loading({
                    message: '加载中...',
                    //防止穿透
                    forbidClick: true,
                    duration: 0,
                    loadingType: 'spinner',
                })

                this.axios({
                    method: 'get',
                    url: '/article/' + this.id
                }).then(result => {
                    this.$toast.clear();
                    if (result.status == 200) {
                        this.videoData = result.data[0]
                        this.userinfo = result.data[0].userinfo
                        this.category = result.data[0].category
                        
                        //在获取到数据就执行
                        this.followInit();
                    }

                }).catch(err => {
                    this.$toast.clear();
                })

            },

            //获取相关推荐
            getCommondList() {

                this.$toast.loading({
                    message: '加载中...',
                    //防止穿透
                    forbidClick: true,
                    duration: 0,
                    loadingType: 'spinner',
                })

                this.axios({
                    method: 'get',
                    url: '/commend'
                }).then(result => {
                    this.$toast.clear();
                    if (result.status == 200) {
                        this.commondList = result.data;
                    }

                }).catch(err => {
                    this.$toast.clear();
                })

            },

            //切换相关视频
            goItemDetail(item) {
                this.id = item.id;
                if (this.$route.query.id != item.id) {
                    this.$router.push({
                        name: 'VideoDetail',
                        query: {
                            id: item.id
                        }
                    })
                }
                this.getCommentData();
            },

            //获取个人信息
            getUserInfo() {

                //检查是否有token
                let tokenString = localStorage.getItem('CSTK');
                if (!tokenString) {
                    return;
                }

                this.$toast.loading({
                    message: '加载中...',
                    forbidClick: true,
                    duration: 0,
                    loadingType: 'spinner'
                })

                this.axios({
                    method: 'get',
                    //请求参数
                    url: '/user/' + localStorage.getItem('id')

                }).then(result => {
                    //关闭提示加载
                    this.$toast.clear();
                    if (result.status == 200) {
                        this.myuser = result.data[0];
                    }
                }).catch(err => {
                    this.$toast.clear();
                })

            },

            //获取焦点时候判断是否登陆
            onfoucus() {
                if (!localStorage.getItem('CSTK')) {
                    this.$toast.fail("请先登陆")
                }
            },
            
            //发送评论
            async postComment(){
                
                if(this.comments == ""){
                    this.$toast.fail("你还没输入")
                    return;
                }
                
                let date = new Date();
                let m = date.getMonth() + 1
                let d = date.getDate()
                
                if(m < 10) {
                    m = '0' + m
                }
                if(d < 10) {
                    d = '0' + d
                }
                
                let str = `${m}-${d}`
                
                
                
                this.Postcom.comment_content =  this.comments
                this.Postcom.comment_date =  str
                this.Postcom.article_id = this.$route.query.id
                
                
                let result = await this.$http.post('/comment_post/' + localStorage.getItem('id'),this.Postcom)
                
                if(result.status == 200){
                    this.$toast.success("发表评论成功")
                    this.comments = ""
                    this.getCommentData()
                }
            },
            

            //获取评论数据
            getCommentData() {

                this.$toast.loading({
                    message: '加载中...',
                    forbidClick: true,
                    duration: 0,
                    loadingType: 'spinner'
                })

                this.axios({
                    method: 'GET',
                    //请求参数
                    url: '/comment/' + this.id

                }).then(result => {
                    //关闭提示加载
                    this.$toast.clear();
                    this.commentLength = result.data.length
                    if(result.status == 200){
                        // this.commentData = result.data;
                       this.commentData =  this.changeCommentData(result.data)
                       
                    }

                }).catch(err => {
                    this.$toast.clear();
                })
            },
            
            
            //数据改造
            changeCommentData(data){
                function fn(temp){
                    let arr1 = [];
                    for(let i = 0; i < data.length; i++) {
                        if(data[i].parent_id == temp) {
                            arr1.push(data[i]);
                            data[i].child = fn(data[i].comment_id)
                        }
                    }
                    return arr1;
                }
                return fn(null)
            },
            
            
            //收藏视频
            async collectVideo(){
                if(!localStorage.getItem('CSTK')){
                    this.$toast.fail("请先登陆")
                    return;
                }
                this.collectionActive = !this.collectionActive;
                let res =  await this.$http.post('/collection/' + localStorage.getItem('id'),{article_id:this.$route.query.id})
                
                if(res.status == 200){
                    this.$toast.success(res.data.msg)
               }
            },
            
            
            //获取是否收藏
            async collectionInit(){
                if(localStorage.getItem('CSTK')){
                    let res = await this.$http.get('/collection/' + localStorage.getItem('id'),{
                        params:{
                            article_id: this.$route.query.id
                        }
                    })
                    this.collectionActive = res.data.success
                }
            },
            
            
            //关注up
            async followUp(){
                if(!localStorage.getItem('CSTK')){
                    this.$toast.fail("请先登陆")
                    return;
                }
                this.followActive = !this.followActive;
                let res =  await this.$http.post('/sub_scription/' + localStorage.getItem('id'),{sub_id:this.userinfo.id})
                
                if(res.status == 200){
                    this.$toast.success(res.data.msg)
               }
            },
            
            
            // 获取是否关注
            async followInit(){
                if(localStorage.getItem('CSTK')){
                    let res = await this.$http.get('/sub_scription/' + localStorage.getItem('id'),{
                        params:{
                            sub_id: this.userinfo.id
                        }
                    })
                    this.followActive = res.data.success
                }
            },
 
            //打开分享面板
            onSelect(option) {
                  this.$toast(option.name);
                  this.showShare = false;
            },
            
            //点击视频回到顶部     
            backtop(){
                var timer = setInterval(function(){
                let osTop = document.documentElement.scrollTop || document.body.scrollTop;
                let ispeed = Math.floor(-osTop / 5); 
                document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
                this.isTop = true;
                if(osTop === 0){
                    clearInterval(timer);
                  }
                      },30)
                  }


        },

        watch: {
            $route() {
                this.getVideoUrl()
                this.getCommondList()
                this.collectionInit()
                this.followInit()
            }
        },
        
    }
</script>

<style>
</style>
