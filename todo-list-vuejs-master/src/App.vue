<template>
  <div id="app">
    <div class="container">
    <div class="well">
    <label>Enter todo items name page to filter</label>
    <h1 v-text="text"></h1>
     項目文字欄:<input type="text" v-model="newItem" v-on:keyup.enter="addNew" placeholder="Project text field" />
     修改title欄：<input type="text" v-model="text" v-on:keyup.enter="addNew" placeholder="Modify the title bar" />
      <button v-on:click="addNew">請按按鈕新增項目</button>
      <button v-on:click="addNew">請按按鈕查詢列表項目</button>
      <button v-on:click="addNew">請按按鈕刪除全部項目</button>
      <ul>
        <!-- v-for loop -->
        <li v-for="(item, index) in items">
          <span v-bind:class="{finished: item.isFinished}">{{ item.label }}</span>
          <span v-on:click="toggle(item)" class="func first">{{!item.isFinished ? 'done' : 'todo'}}</span>
          <span v-on:click="items.splice(index, 1)"class="func">delete</span>
        </li>
        下拉選單欄：<select id="mySelect">
	<option v-for="item in filtereditems">{{ item.label }}</option>
        </select>
        搜尋過濾項目欄：<input type="text" v-model="search" placeholder="Search List filtering function ..">
      	</ul>
        Copyright @2020-2021 Hello Vue! Web Design By 中國科大實習生 ChihYen_Hsu製作
      </div>
    </div>
  </div>
</template>
<!--  all class attributes only for style -->
<!-- this vuejs cdn link -->
<!-- 
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.12/vue.min.js"></script>
-->

import Store from './store';
<script type="text/javascript">

export default {
  el: '#app',
  mounted() {
     this.hasData = this.items && this.items.length ? true : true;
  },
   created: function() {
     this.filtereditems = this.items;
   },
  data() {
    return {
      text: 'Hello Vue!',
      search: '',
      items: [{label:'101'},{label:'102'},{label:'103'},{label:'201'},{label:'202'},{label:'300'},{label:'aaa'},{label:'abc'},{label:'bbb'}],
      filterArray: "",
      filterText: "",
      newItem: '',
      newItem: '',
      hasData: true
    }
  },
  watch: {
   items: {
	handler(items)  {
        Store.save(items);
        this.hasData = this.items && this.items.length ? true : true;
      },
      deep: true
    }
  },
  methods: {
    toggle(item) {
      item.isFinished = !item.isFinished;
    },
    addNew() {
      if (this.newItem.trim() == '') {           
      return;
      }
      if (!this.items) {
        this.items = []
      }
      this.items.push({label: this.newItem, isFinished: true});
      this.newItem = '';
    },
    del() {
      this.items = null;
    }
  },
  components: {
    filtereditems (){
      var item=this.items;
        for(i=0;i<items.label;i++) {
          var item=this.items.filter(function(items,index,arr) {
            if(items.label==''(this.search)) {
              return true;
                }
                 else {
                   return items.label.indexof(items)>-1;
                     }
                   })            
                      console.log(items);
                        }
            }
         }
      }
</script>

<style>
html, body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 10px;
  margin-top: 16px;
  margin-bottom: 16px;
  margin: 0;
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  -moz-text-size-adjust: none;
  background: -webkit-linear-gradient(left top, #DDD, #777);
  background: -o-linear-gradient(bottom right, #DDD, #777);
  background: -moz-linear-gradient(bottom right, #DDD, #777);
  background: linear-gradient(to bottom right, #DDD, #777);
  background-attachment: fixed;
  font-size:20px;
  line-height: 1.5em;
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #333;
  font-family: "微軟正黑體";
  text-shadow: 0 0 0px;
  color: #fff;
}
.container {
  text-align: center;
}
input {
  box-shadow: 0 0 8px rgb(250, 204, 219);
  border: none;
  padding: 4px 12px;
  color: rgba(0,0,0,.70);
  border: 1px solid rgba(0,0,0,.12);
  transition: .15s all ease-in-out;
  background: white;
}
input[type="text"]:focus {
  border-color: #00aaa6;
  box-shadow:  0 0 8px #00aaa6;
  outline: 0 none;
}
li {
  margin-top: 9px;
}
button {
  border-radius: 14px;
  color: black;
  box-shadow: 0 0 2px rgb(270, 220, 231);
  background: orange;
}
.btn {
  background-color: #00aaa6;
  color: #444;
  font-weight: bold;
  margin: 0;
  padding: 0;
  border: 0;
  min-width: 32px;
  min-height: 32px;
}
.search-wrapper {
    position: relative;
}
 .wrapper {
    display: flex;
    max-width: 444px;
    flex-wrap: wrap;
    padding-top: 12px;
}
  .card {
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    max-width: 124px;
    margin: 12px;
    transition: .15s all ease-in-out;
}
.links-others {
  position: fixed;
  left: 0;
  bottom: 0;
  margin: 10px;
  padding: 10px;
  background-color: #000;
  border-radius: 5px;
  transition: all .2s;
  opacity: .5;
}
.highlight {
  background-color: red;
  color: white;
  padding: 0px 5px;
}
 a {
   color: #aaf;
   font-weight: bold;
   color: #2c3e50;
   color: #42b983;
   text-decoration: none;
   padding: 12px;
   color: #03A9F4;
   font-size: 24px;
   display: flex;
   flex-direction: column;
   align-items: center;
}
 img {
    height: 100px;
 }
 small {
        font-size: 10px;
        padding: 4px;
}
.router-link-exact-active {
      color: #42b983;
}
.hotpink {
    background: hotpink;
  }
 .green {
    background: green;
  }
  .box {
    width: 100px;
    height: 100px;
    border: 1px solid rgba(0,0,0,.12);
  }
span.func {
  cursor: pointer;
  margin-left: 7px;
  text-decoration: underline;
}
span.func.first {
  margin-left: 13px;
}
ul {
  text-align: left;
  margin-left: 50px;
}
.finished {
  text-decoration: line-through;
}
div.delAll {
  text-decoration: none;
}
div#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-family: 'Avenir LT Std',
}
</style>

