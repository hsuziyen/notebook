<template>
  <div id="componentdemo">
    <conditions :insertUrl="insertUrl"
                @searchEmit="searchProcess"></conditions>
  </div>
</template>
<script>
import Conditions from "@/components/Conditions.vue";
export default {
  name: "ComponentDemo",
  components: {
    Conditions
  },
  data() {
    return {
      insertUrl: "http://google.com.tw"
    };
  },
  methods: {
    searchProcess: function(conditions) {
      console.log(conditions);
    }
  }
};
</script>
