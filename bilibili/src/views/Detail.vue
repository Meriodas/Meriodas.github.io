<template>
    <div class="detail">

        <div class="userinfo-nav">
            <van-nav-bar @click-left="goHome" @click-right="goUserinfo">
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
                        <img class="auto-img" v-if="!userinfo.user_img" src="../assets/img/01small.jpg" alt="">
                        <img class="auto-img" :src="userinfo.user_img" alt="">
                    </div>
                </template>
            </van-nav-bar>
        </div>

        <div class="userinfo-list">
            <van-cell title="头像" value="内容">
                <div class="avatar fr">
                    <img class="auto-img" :src="userinfo.user_img" alt="">
                    <van-uploader class="uploader-box" :after-read="uploadUserImg" />
                </div>
            </van-cell>
            <van-cell title="昵称" @click="show = true">
                <div class="fr">{{userinfo.name}}</div>
            </van-cell>
            <van-cell title="账号">
                <div class="fr">{{userinfo.username}}</div>
            </van-cell>
            <van-cell title="性别" @click="genderShow = true">
                <div class="fr">{{userinfo.gender == 1 ? '男' : '女'}}</div>
            </van-cell>
            <div class="desc-box">
                <div class="desc-title">个人签名</div>
                <div class="textarea-box">
                    <textarea v-model="userinfo.user_desc" onfocus="this.placeholder=''" onblur="this.placeholder='这家伙很懒,什么东西都没有留下'"
                        placeholder="这家伙很懒,什么东西都没有留下" class="text-area" @change="modifyUserInfo">
            		</textarea>
                </div>
            </div>
        </div>

        <div class="detail-control">
            <button class="logout detail-control-btn" @click="logout">退出登陆</button>
            <button class="back-space detail-control-btn" @click="goUserinfo">返回空间</button>
        </div>

        <van-dialog v-model="show" title="昵称" show-cancel-button @confirm="comfirmClick" @cancel="content = ''">
            <van-field v-model.trim="content" autofocus />
        </van-dialog>


        <van-action-sheet v-model="genderShow" cancel-text="取消" :actions="actions" @select="onSelect" />

    </div>
</template>

<script>
    import '../assets/less/detail.less'
    import utils from '../assets/js/utils'
    export default {
        data() {
            return {
                value: '',
                userinfo: '',
                show: false,
                textshow: false,
                content: '',
                sexContent: '',
                genderShow: false,
                actions: [{
                        name: '男',
                        val: 1
                    },
                    {
                        name: '女',
                        val: 0
                    },
                ],
            }
        },
        created() {
            this.userInfoData();
        },
        methods: {
            //前往个人信息页面
            goUserinfo() {
                this.$router.push({
                    name: 'UserInfo'
                })
            },

            //前往主页
            goHome() {
                this.$router.push({
                    name: 'Home'
                })
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

            //上传头像
            uploadUserImg(file) {

                //获取token
                let tokenString = localStorage.getItem('CSTK');
                if (!tokenString) {
                    return;
                }

                // let fromdata = {
                //     "file": file.file
                // }
                let fromdata = new FormData()
                fromdata.append('file', file.file)

                this.$toast.loading({
                    message: '加载中...',
                    //防止穿透
                    forbidClick: true,
                    duration: 0,
                    loadingType: 'spinner',
                })

                this.axios.post('/upload',
                    fromdata
                ).then(result => {
                    this.$toast.clear();
                    if (result.status == 200) {
                        this.userinfo.user_img = result.data.url
                        this.UserUpdate()
                        this.$toast.success('成功修改')
                    }
                }).catch(err => {
                    this.$toast.clear();
                })
            },

            //更新数据        
            UserUpdate() {
                this.$toast.loading({
                    message: '加载中...',
                    //防止穿透
                    forbidClick: true,
                    duration: 0,
                    loadingType: 'spinner',
                })

                this.axios.post('/update/' + localStorage.getItem('id'), this.userinfo

                ).then(result => {
                    this.$toast.clear();
                    if (result.status == 200) {
                        this.$toast.success('成功修改')
                    }
                }).catch(err => {
                    this.$toast.clear();
                })
            },


            comfirmClick() {
                this.userinfo.name = this.content;
                this.UserUpdate()
                this.content = "";
            },


            modifyUserInfo() {
                // this.userinfo.user_desc;
                this.UserUpdate()
                // this.content = "";
            },


            onSelect(item) {
                this.userinfo.gender = item.val;
                this.UserUpdate()
                this.genderShow = false;

            },

            //退出登陆
            logout(){
                this.$dialog.confirm({
                  title: '警告',
                  message: '是否退出登陆',
                })
                  .then(() => {
                    // localStorage.removeItem("CSTK","id");
                    this.$router.push({name: 'Login'})
                  })
                  .catch(() => {
                    // on cancel
                  });
                
                
            }
        }
    }
</script>

<style>

</style>
