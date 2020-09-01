<template>
  <div id="conditions">
    <div class="card">
      <div class="card-header">
        <!-- 外部連結 -->
        <a :href="insertUrl"
           class="btn btn-secondary"
           target="_blank">
          <i class="fa fa-plus"></i> 新增
        </a>
        <!-- 內部vue router path -->
        <!-- <router-link :to="{ path: insertUrl }">
        <i class="fa fa-plus"></i> 新增
      </router-link> -->
      </div>
      <div class="card-body">
        <form class="form form-horizontal">
          <div class="row">
            <div class="col-4 form-group">
              <label>查詢條件一</label>
              <input type="text"
                     class="form-control"
                     v-model="conditions.query1">
            </div>
            <div class="form-group col-4">
              <label>查詢條件二</label>
              <select class="form-control"
                      v-model="conditions.query2">
                <option value=""></option>
                <option value="1">下拉選單一</option>
                <option value="2">下拉選單二</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <button class="btn btn-danger">
                <i class="fa fa-times"></i> 取消
              </button>
              <button class="btn btn-primary"
                      @click.prevent="searchProcess()">
                <i class="fa fa-search"></i> 查詢
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Conditions",
  // 使用props宣告可以使父component傳的參數
  props: ["insertUrl"],
  data() {
    return {
      conditions: {}
    };
  },
  methods: {
    searchProcess: function() {
      this.$emit("searchEmit", this.conditions);
    }
  }
};
</script>
