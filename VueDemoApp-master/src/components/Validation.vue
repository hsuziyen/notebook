<template>
    <div id="validation">
        <div class="row justify-content-center">
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">登入</h3>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label for="userId">UserId</label>
                                <input type="text"
                                       class="form-control"
                                       id="userId"
                                       name="userId"
                                       v-validate="'required'">
                                <div class="invalid-feedback"
                                     style="display:block;">{{ errors.first('userId') }}</div>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="text"
                                       class="form-control"
                                       id="password"
                                       name="password"
                                       v-validate="'required'">
                                <div class="invalid-feedback"
                                     style="display:block;">{{ errors.first('password') }}</div>
                            </div>
                            <button class="btn btn-primary"
                                    @click.prevent="submitProcess()">登入</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "Validation",
  data() {
    return {};
  },
  methods: {
    submitProcess: function() {
      this.$validator.validateAll().then(result => {
        if (result) {
          //可以實作呼叫API
          alert("Form Submitted!");
          return;
        }
        alert("Correct them errors!");
      });
    }
  }
};
</script>
