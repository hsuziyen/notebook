<template>
  <div id="axiosdemo">
    <div class="card"
         v-for="post in postInfos"
         :key="post.id">
      <div class="card-header"
           @click="post.show = !post.show">
        <i class="fa fa-plus-square-o"
           v-show="!post.show"></i>
        <i class="fa fa-minus-square-o"
           v-show="post.show"></i> {{post.title}}
      </div>
      <div class="card-body"
           v-show="post.show">
        <p class="card-text">
          {{post.body}}
        </p>
      </div>
    </div>
    <!-- blockui -->
    <BlockUI :message="msg"
             v-show="spinnerStatus">
      <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
    </BlockUI>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AxiosDemo",
  data() {
    return {
      postInfos: [],
      msg: "Loading...",
      spinnerStatus: false
    };
  },
  created: function() {
    let $vue = this;
    axios.interceptors.request.use(
      function(config) {
        $vue.spinnerStatus = true;
        return config;
      },
      function(error) {
        $vue.spinnerStatus = false;
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    axios.interceptors.response.use(
      function(response) {
        setTimeout(function() {
          $vue.spinnerStatus = false;
        }, 3000);
        return response;
      },
      function(error) {
        $vue.spinnerStatus = false;
        return Promise.reject(error);
      }
    );
    axios.get("/posts").then(response => {
      let tempInfos = response.data;
      tempInfos.forEach(item => {
        item.show = false;
        this.postInfos.push(item);
      });
    });
  }
};
</script>
