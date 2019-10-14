<template>
  <div id="app">
    <vhead></vhead>
    <!--<tab></tab>-->
    <div class="container" style="padding:0px 10px;margin-bottom: 100px;">
      <div class="row">
        <div class="col-md-9">
          <lunbo></lunbo>
          <all></all>
        </div>
        <div class="col-md-3">
          <qrcode></qrcode>
          <announcement></announcement>
        </div>
      </div>
    </div>
    <!--<footnav></footnav>-->
  </div>
</template>

<script>
import vhead from './components/vhead/vhead'
import tab from './components/tab/tab'
import footnav from './components/footnav/footnav'
import lunbo from './components/lunbo/lunbo'
import all from './components/all/all'
import qrcode from './components/qrcode/qrcode'
import announcement from './components/announcement/announcement'
import littlenav from './components/littlenav/littlenav'
import showdetail from './components/showdetail/showdetail'
import Vue from 'vue'

export default {
  name: 'App',
  data(){
    return{
      Bus:new Vue()
    }
  },
  components:{
    vhead,
    tab,
    footnav,
    lunbo,
    qrcode,
    announcement,
    littlenav,
    showdetail,
    all
  },
  mounted(){
    this.getData();
  },
  methods:{
    getData:function(){
      this.$http({
        methods:'get',
        url:'https://www.vue-js.com/api/v1/topics',
        params:{
          page:1,
          tab:'ask',
          limit:20,
          mdrender:true
        }
      }).then(function(data){
        //console.log(data);
      })
    }
  }
}
</script>

<style>

</style>
