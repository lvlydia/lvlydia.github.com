<template>

  <div class="container-fluid" style="background:#34495e;">
    <div class="container">
      <div class="row row-box">
        <div class="col-md-6 tab1">
          <img class="tab1-img" src="../../assets/logo.png" alt="">
        </div>
        <div class="col-md-6 tab" style="padding:0px;">
          <router-link to="/all" tag='span'>首页</router-link>
          <router-link to="/good" tag='span'>技术中心</router-link>
          <router-link to="/weex" tag='span'>媒体中心</router-link>
          <router-link to="/share" tag='span'>下载中心</router-link>
          <router-link to="/ask" tag='span'>关于我们</router-link>
        </div>
      </div>
    </div>
  </div>

</template>



<script>
	export default{

	}
</script>



<style lang='stylus' rel='stylesheet/stylus'>
 .tab1
   height:80px
   .tab1-img
      height:60px
      display :block
      line-height 80px
      padding-top 15px
      padding-left:20px
	.tab
		height:80px
		font-size:16px
		span
      line-height 80px
      font-weight bold
      font-size 18px
      color: #fff
      margin-right 50px

		.router-link-exact-active
       color #41b883
       font-size 20px
       .menu-box
          position absolute
          z-index 999

</style>
