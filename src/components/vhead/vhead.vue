<template>
  <div class="container-fluid head-box">
    <div class="container" style="height:80px">
      <div class="row">
        <div class="col-md-4 displays" style="height:80px">
          <img class="tab1-img" src="../../assets/logo.png" alt="" >
        </div>
        <div class="col-md-8" style="height:80px;padding: 0px">
          <header class="am-topbar am-topbar-inverse .am-topbar-fixed-top Lydia-header ">
            <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: '#doc-topbar-collapse'}"><span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span></button>
            <div class="am-collapse am-topbar-collapse" id="doc-topbar-collapse">
              <ul class="am-nav am-nav-pills am-topbar-nav">
                <router-link to="/all" tag='li' class=""><a href="">首页</a></router-link>

                <li class="am-dropdown" data-am-dropdown>
                  <a class="am-dropdown-toggle title" data-am-dropdown-toggle href="javascript:;">
                    技术中心 <span class="am-icon-caret-down"></span>
                  </a>
                  <ul class="am-dropdown-content">
                    <router-link to="/good" tag='li'><a href="#">新手入门</a></router-link>
                    <router-link to="/weex" tag='li'><a href="#">技术文章</a></router-link>
                    <router-link to="/share" tag='li'><a href="#">FAQ</a></router-link>
                  </ul>
                </li>

                <li class="am-dropdown" data-am-dropdown>
                  <a class="am-dropdown-toggle title" data-am-dropdown-toggle href="javascript:;">
                    媒体中心 <span class="am-icon-caret-down"></span>
                  </a>
                  <ul class="am-dropdown-content">
                    <li><a href="#">柯南快讯</a></li>
                    <li><a href="#">媒体报道</a></li>
                    <li><a href="#">行业新闻</a></li>
                  </ul>
                </li>

                <li class="am-dropdown" data-am-dropdown>
                  <a class="am-dropdown-toggle title" data-am-dropdown-toggle href="javascript:;">
                    下载中心 <span class="am-icon-caret-down"></span>
                  </a>
                  <ul class="am-dropdown-content">
                    <li><a href="#">白皮书</a></li>
                    <li><a href="#">社区源码</a></li>
                    <li><a href="#">柯南App</a></li>
                  </ul>
                </li>

                <li class="am-dropdown" data-am-dropdown>
                  <a class="am-dropdown-toggle title" data-am-dropdown-toggle href="javascript:;">
                    关于我们 <span class="am-icon-caret-down"></span>
                  </a>
                  <ul class="am-dropdown-content">
                    <li><a href="#">团队</a></li>
                    <li><a href="#">联系我们</a></li>
                  </ul>
                </li>

              </ul>
            </div>
          </header>
        </div>
      </div>

    </div>
  </div>


</template>


<script>
  export  default {

  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .head-box
    height:80px
    background rgb(52, 73, 94)
    .tab1-img
       height:50px
       margin-top 15px
    .Lydia-header
       height 80px
       line-height 80px
       background rgb(52, 73, 94)
      .am-topbar-inverse .am-topbar-nav>li.am-active>a:after, .am-topbar-inverse .am-topbar-nav>li.am-active>a:focus:after, .am-topbar-inverse .am-topbar-nav>li.am-active>a:hover:after
         display none
      .am-topbar-inverse .am-topbar-nav>li>a:after
         display none
    .am-topbar-nav>li>a
      font-size 18px
      line-height 80px
      font-weight bold
      padding 0px 30px
    .am-topbar-inverse .am-topbar-nav>li.am-active>a, .am-topbar-inverse .am-topbar-nav>li.am-active>a:focus, .am-topbar-inverse .am-topbar-nav>li.am-active>a:hover
      background none
      font-size 20px
      color #41b883


  @media all and (max-width: 599px)
    .displays
      display none
    #doc-topbar-collapse
      background rgb(52, 73, 94)
      position relative
      z-index 999
    .am-btn-success
      margin-top 20px

</style>
