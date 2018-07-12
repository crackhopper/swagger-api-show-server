<template>    
  <div class="index">
    <a href='/static/api-table.json' >link to api-table</a>
    <Swagger :urls="urls"></Swagger>
  </div>
</template>
<script>
  import Swagger from '../components/Swagger/main.vue'
  import util from '../libs/util';
  import config from '../config/config';
  export default {
    data(){
      return {
        urls:[]
      }
    },
    computed:{
    },
    methods: {
    },
    created(){
      util.ajax({url:'/static/api-table.json',method:'get'})
        .then(json=>{
          let res = [];
          let ApiMap= json.data;
          for(let v in ApiMap){
            res.push({name:v,url:`http://${config.host}:${config.port}/static/${ApiMap[v]}`});
          }
          this.urls = res;
        });
    },
    components: {
      Swagger
    }
  };
</script>
<style scoped>
</style>