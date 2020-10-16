<template>
  <div id="app">
    <keep-alive>
        <router-view v-if="$route.meta.keepalive" />
    </keep-alive>
        <router-view v-if="!$route.meta.keepalive" />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: 100vh;
}

#nav {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


.fl{
    float: left;
  }

  .fr{
    float: right;
  }

  .clearfix::after{
    content: "";
    display: block;
    clear: both;
  }

  .auto-img{
    width: 100%;
    // height: 100%;
	display: block;
  }
  
  .item-center{
	  text-align: center !important;
  }
  
  .one-text{
	  white-space: nowrap;
	  overflow: hidden;
	  text-overflow: ellipsis;
  }
  
   .theme-bgcolor{
       background-color: #fb7299;
   }
   
   .theme-color{
       color: #fb7299;
   }
   
   .theme-border{
       border: 1px solid #fb7299;
   }
   
</style>
