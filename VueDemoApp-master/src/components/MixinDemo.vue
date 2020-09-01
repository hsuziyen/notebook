<template>
  <div id="mixindemo">

  </div>
</template>
<script>
import MyMixin from "@/components/MyMixin.vue";
export default {
  name: "MixinDemo",
  mixins: [MyMixin],
  created: function() {
    this.hello();
  }
};
</script>
