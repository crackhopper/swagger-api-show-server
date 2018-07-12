<template>
  <div id="swagger-ui-container">
    <div id="uvi-swagger-ui"></div>
  </div>
</template>
<script>
  import SwaggerUIBundle from 'swagger-ui'
  import SwaggerUIStandalonePreset from 'swagger-ui/dist/swagger-ui-standalone-preset'
  const DOM_ID='#uvi-swagger-ui';
  export default {
    props: {
      urls: { // urls should be like this : [{name:'',url:''}]
        validator: function(value){
          if(value instanceof Array){
            for(let v of value){
              if (!v.name || !v.url){
                return false;
              }
            }
            return true;
          }
          return false;
        }
      }
    },
    data(){
      return {
      }
    },
    methods: {
      createSwaggerUI(){
        if(this.urls){
          const ui = SwaggerUIBundle({
            urls:this.urls,
            dom_id: DOM_ID,
            deepLinking: false,
            presets: [
              SwaggerUIBundle.presets.apis,
              SwaggerUIStandalonePreset,
            ],
            plugins: [
              SwaggerUIBundle.plugins.DownloadUrl
            ],
            layout: "StandaloneLayout"
          });
          this.$Swagger = ui;
        }
      }
    },
    mounted: function () {
      this.createSwaggerUI();
    },
    watch: {
      'urls' : function(){
        this.createSwaggerUI();
      }
    }
  };
</script>
<style>
  @import "./swagger-ui.css";
</style> 
