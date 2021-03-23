<template>
  <div id="app">
    <div class="container">
    <div class="form" title="Person"row="0" col="0">
    <label>Enter todo items name page to filter and sqlite database(New Supported OS Listed)</label>
    <h1 v-text="text" class="input-field"></h1>
     項目文字欄:<input type="text" v-model="newItem" v-on:keyup.enter="addNew" placeholder="Project text field" class="label font-weight-bold m-b-5" />
     修改title欄：<input type="text" v-model="text" v-on:keyup.enter="addNew" placeholder="Modify the title bar" class="label font-weight-bold m-b-5" />
      <button v-on:click="addNew" @tap="addNew" class="btn btn-primary" row="0" col="0">請按按鈕新增項目</button>
      <button v-on:click="addNew" @tap="addNew" class="btn btn-primary" row="0" col="1" >請按按鈕查詢列表項目</button>
      <button v-on:click="del" @tap="del" class="btn btn-primary" row="1" col="0" colSpan="2">請按按鈕刪除全部項目</button>
      <ul>
        <!-- v-for loop -->
        <li v-for="(item, index) in items" class="hr-light">
          <span v-bind:class="{finished: item.isFinished}">{{ item.label }}</span>
          <span v-on:click="toggle(item)" class="func first">{{!item.isFinished ? 'done' : 'todo'}}</span>
          <span v-on:click="items.splice(index, 1)"class="func">delete</span>
        </li>
        下拉選單欄：<select id="mySelect" rows="auto, auto" columns="*, *">
        <option class="list-group-item" v-for="item in itemArray" row="1" col="0">{{ item.SBU }}</option>
        </select>
        搜尋過濾項目欄：<input type="text" v-model="search" class="list-group-item" placeholder="Search List filtering function ..">
         </a>
         <br>
          <span style="color: red">{{ errorMsg }}</span>
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
<script src='js/sql.js'></script>
-->

import Store from './store';
import SQL from 'sql.js';
<script type="text/javascript"> 
class item {
  constructor(label) {
    this.label = label;
  }
}
 export default {
  el: 'app',
  mounted() {
     this.hasData = this.items && this.items.length ? true : true;
  },
   created: function() {
     this.itemArray = this.items;
   },
  data() {
    return {
      text: 'Hello Vue!',
      items: [{SBU:'DMS'},{SBU:'ECD'},{SBU:'SPD'},{SBU:'IPC'},{SBU:'NSD'},{SBU:'RMD'}],
      search: '',
      filterArray: "",
      filterText: "",
      itemArray:[],
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
      },
      search: function(value) {
        console.log('prefix = ' + value);
          this.doFilter(value);
     }
  },
  methods: {
    toggle(item) {
      item.isFinished = !item.isFinished;
    },
    addNew() {
      console.log('addnew');
      if (this.newItem.trim() == '') {           
      }
      if (!this.items) {
        this.items = []
      }
      this.items.push({SBU: this.newItem, isFinished: true});
      this.newItem = '';
    },
    del() {
      this.items = null;
    }
  },
  components: {
    doFilter: function(prefix) {
        return this.itemArray = items.filter(item => item.SBU.startsWith(prefix));
          console.log('itemArray.length = ' + this.itemArray.length).includes(this.search);
            if (this.itemArray.length === 0) {
              this.errorMsg = '找不到 ' + prefix + ' 開頭的資料';
                this.itemArray = this.items;
                  } else {
                      this.errorMsg = '';
                        }
                        console.log(itemArray);
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
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
.container {
  text-align: center;
  margin: 10px;
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
.box {
    background-color: #1b64aa;
    background-image: -webkit-gradient(
      linear,
      0% 0%,
      0% 100%,
      color-stop(25%, #004c73),
      color-stop(75%, #0a1233)
    );
    border: 1px solid #00ffff;
    border-radius: 5px;
    position: relative;
    padding: 2px;
    margin: 10px;
    width: 200px;
    height: 108px;
    overflow: hidden;
}
 img {
    height: 100px;
    vertical-align: middle;
    max-width: 100%;
    background-size: cover;
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

