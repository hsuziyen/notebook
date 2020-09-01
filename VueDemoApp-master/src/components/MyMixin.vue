<template>
  <div id="mymixin"></div>
</template>
<script>
export default {
  name: "MyMixin",
  methods: {
    hello() {
      console.log("Hello vue from mixin!");
    }
  }
};
</script>
