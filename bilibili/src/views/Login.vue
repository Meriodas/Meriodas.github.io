<template>
    <div class="login">
        <div class="login-nav">
            <van-nav-bar
              :title="isMsgLogin ? '注册登陆' : '密码登陆'"
              :right-text="isMsgLogin ? '密码登陆' : '注册登陆' "
              left-arrow
              @click-right="changeLoginType"
            />
        </div>
        
        <div class="banner">
            <div class="banner-box">
                <img v-show="!isFocusUser" class="auto-img" src="../assets/img/closeeyes.jpg" alt="">
                <img v-show="isFocusUser" class="auto-img" src="../assets/img/openeyes.jpg" alt="">
            </div>
        </div>
        
        <div class="login-info">
            
            <div class="login-bypsd" v-if="!isMsgLogin">
                <van-cell-group>
                  <van-field
                    clearable
                    label="账号"
                    placeholder="请输入账号"
                    v-model="userLoginInfo.username"
                    @focus="foucus1"
                  />
                  <van-field
                    center
                    clearable
                    label="密码"
                    placeholder="请输入密码"
                    v-model="userLoginInfo.password"
                    type="password"
                    @focus="foucus2"
                  >
                    <template #button v-if="!isMsgLogin">
                      <van-button size="small" type="default">忘记密码?</van-button>
                    </template>
                  </van-field>
                </van-cell-group>
            </div>
            
            <div class="login-byphone" v-if="isMsgLogin">
                <van-cell-group>
                    <van-field
                      clearable
                      label="姓名"
                      placeholder="请输入你的姓名"
                      v-model="userRegister.name"
                      @focus="foucus1"
                    />
                    <van-field
                      clearable
                      label="用户名"
                      placeholder="请输入你的用户名"
                      v-model="userRegister.username"
                      @focus="foucus1"
                    />
                    <van-field
                      clearable
                      label="密码"
                      placeholder="请输入你的密码"
                      v-model="userRegister.password"
                      type="password"
                      @focus="foucus2"
                    />
                </van-cell-group>
            </div>
            
            
            
        </div>
        
        
        <div class="login-control clearfix">
            <div class="login-control-bypsd" v-if="!isMsgLogin">
                <van-button class="fl login-btn theme-bgcolor" @click="login" type="danger">登陆</van-button>
                <van-button class="fl login-btn theme-bgcolor" @click="goHome" type="danger">先逛一逛</van-button>
            </div>
            
            <div class="login-control-byphone" v-if="isMsgLogin">
                <van-button class="fl login-btn theme-bgcolor" type="danger" @click="register">注册登陆</van-button>
                <van-button class="fl login-btn theme-bgcolor" @click="goHome" type="danger">先逛一逛</van-button>
            </div>
            
        </div>
    </div>
</template>


<script>
    import '../assets/less/login.less'
    import { validForm } from '../assets/js/ValidForm'
    import { utils } from '../assets/js/utils'
    
    export default{
        name: 'Login',
        data(){
            return{
                isMsgLogin: false,
                isFocusUser: true,
                userpic: "openeyes",
                pswpic: "closeeyes",
                userLoginInfo: {
                	username: '',
                	password: ''
                },
                userRegister: {
                	name: '',
                    username: '',
                	password: ''
                },
                
            }
        },
        methods:{
            //切换登陆方式
            changeLoginType(){
                this.isMsgLogin = !this.isMsgLogin;
            },
            
            //前往主页
            goHome(){
                this.$router.push({name: 'Home'})
            },
            
            //切换图片
            foucus1(){
                this.isFocusUser = true;
            },
            
            foucus2(){
                this.isFocusUser = false;
            },
            
            // 登陆
            login(){
                let LoginInfo = this.userLoginInfo;
                
                let o = {
                	 username: {
                		value: LoginInfo.username,
                		reg: /^[\w\u4e00-\u9fa5]{1,10}$/,
                		errorMsg: '用户名不正确'
                	 },
                	password:{
                		value: LoginInfo.password,
                		reg: /^[A-Za-z]\w{5,15}$/,
                		errorMsg: '密码首字母开头6到16位'
                	},
                };
               
               if(!validForm.valid(o)){
                   //验证不通过
                   return;
                   
               }
               
               this.$toast.loading({
               	message: '加载中...',
               	//防止穿透
               	forbidClick: true,
               	duration: 0,
               	loadingType: 'spinner',
               })
               
               let info = Object.assign({}, LoginInfo);
               
               let data = utils.queryString(info);
               
               this.axios({
               	method: 'POST',
               	//请求参数
               	url: '/login',
               	data
               
               }).then(result =>{
               	//关闭提示加载
               	this.$toast.clear();
               	this.$toast(result.data.msg);
                   if (result.data.code == 200) {
                    localStorage.setItem('id', result.data.id);
                   	localStorage.setItem('CSTK', result.data.token);
                    setTimeout(() =>{
                        this.$router.push({name: 'UserInfo'})
                    },300)
                   }
               }).catch(err =>{
               	this.$toast.clear();
               })
            },
            
            //注册
            register(){
                let userInfo = this.userRegister;
                
                //验证注册表单
                let o = {
                	name: {
                		value: userInfo.name,
                		reg: /^[\w\u4e00-\u9fa5]{1,10}$/,
                		errorMsg: '姓名格式不正确'
                	  },
                	password:{
                		value: userInfo.password,
                		reg: /^[A-Za-z]\w{5,15}$/,
                		errorMsg: '密码首字母开头6到16位'
                	},
                	username:{
                		value: userInfo.username,
                		reg: /^[\w\u4e00-\u9fa5]{1,10}$/,
                		errorMsg: '昵称1到10位'
                	}
                }
                
                if(!validForm.valid(o)){
                    //验证不通过
                    return;
                    
                }
                
                this.$toast.loading({
                	message: '加载中...',
                	//防止穿透
                	forbidClick: true,
                	duration: 0,
                	loadingType: 'spinner',
                })
                
                let info = Object.assign({}, userInfo);
                
                let data = utils.queryString(info);
                
                this.axios({
                	method: 'POST',
                	//请求参数
                	url: '/register',
                	data
                
                }).then(result =>{
                	//关闭提示加载
                	this.$toast.clear();
                	this.$toast(result.data.msg);
                    if (result.data.code == 200) {
                    	localStorage.setItem('CSTK', result.data.objtoken);
                        localStorage.setItem('id', result.data.id);
                        setTimeout(() =>{
                            this.$router.push({name: 'UserInfo'})
                        },300)
                        
                    }
                }).catch(err =>{
                	this.$toast.clear();
                })
                
                
                
                
            }
            
            
            
        }
    }
</script>

<style>
    
    
</style>
