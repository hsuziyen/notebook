<template>
  <div id="layout">
    <navigation></navigation>
    <!-- router-view -->
    <div class="row"
         style="margin-top:60px;">
      <div class="col">
        <router-view/>
      </div>
    </div>
    <!-- footer -->
  </div>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  name: "Layout",
  components: {
    navigation: Nav
  },
  data() {
    return {};
  }
};
</script>
