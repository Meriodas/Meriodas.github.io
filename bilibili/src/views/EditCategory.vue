<template>
    <div class="editcategory">
        
       <div class="userinfo-nav">
            <van-nav-bar @click-right="goDetail" @click-left="goHome">
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
        
        <div class="addorde">
            <van-divider dashed :style="{ color: '#1a73e8', borderColor: '#1a73e8', padding: '0 16px' }">添加栏目</van-divider>
            <div class="category addcategory">
                <p @click="handleCategoryClick(index)" v-for="(item,index) in newcategory" :key="index" >{{item.title}}</p>
            </div>
        </div>
        <div class="addorde">
            <van-divider  dashed :style="{ color: '#ee0124', borderColor: '#ee0124', padding: '0 16px' }">已删除栏目</van-divider>
            <div class="category deletecategory">
                   <p @click="deleteCategoryClick(index)" v-for="(item,index) in dedcategory" :key="index" >{{item.title}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../assets/less/editcategory.css'
    export default {
        data() {
            return {
                value: '',
                newcategory: [],
                dedcategory: [],
                userinfo: []
            }
        },
        
        created() {
            this.userInfoData()
            if(localStorage.getItem('newcategory') && localStorage.getItem('dedcategory')){
                this.newcategory = JSON.parse(localStorage.getItem('newcategory'))
                this.dedcategory = JSON.parse(localStorage.getItem('dedcategory'))
                return
            }
            this.selectCategory()
        },
        
        methods: {
            //前往个人详情页
            goDetail() {
                this.$router.push({name: 'Detail'})
            },
            
            //前往主页
            goHome() {
                this.$router.push({name: 'Home'})
            },
            
            //获取栏目分类
            selectCategory() {
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
                    // console.log(result)
                    if (result.status == 200) {
                        this.newcategory = result.data
                    }
                }).catch(err => {
                    this.$toast.clear();
                })
            },
            
            //点击删除栏目
            handleCategoryClick(index){
                if(this.newcategory.length < 4){
                    this.$toast.fail("最少要保存三个栏目")
                    return
                }
                this.dedcategory.push(this.newcategory[index]);
                this.newcategory.splice(index,1);
            },
            
            //点击添加栏目
            deleteCategoryClick(index){
                this.newcategory.push(this.dedcategory[index]);
                this.dedcategory.splice(index,1);
            },
            
            //获取用户的信息
            userInfoData() {
                // 检查是否有token
                let tokenString = localStorage.getItem('CSTK');
                if (!tokenString) {
                    this.$router.push({
                        name: 'Login'
                    })
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
            
                }).then(result => {
                    //关闭提示加载
                    this.$toast.clear();
                    if (result.status == 200) {
                        this.userinfo = result.data[0];
                    }
            
                }).catch(err => {
                    this.$toast.clear();
                })
            
            },
            
        },
        
        watch: {
            newcategory(){
                localStorage.setItem('newcategory',JSON.stringify(this.newcategory))
                localStorage.setItem('dedcategory',JSON.stringify(this.dedcategory))
            }
        }
        
    }
</script>

<style>
</style>
