<template>
  <div id="filter-by-example">
    <div class="container">
    <div class="well">
    <label>Enter items name to filter</label>
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
         下拉選單欄:<select v-model="searchText">
                <option v-for="item in items" | filterBy searchText in 'label'"></option>
                <h1>{{ item.label }}</h1>
        </option>
	</select>
        搜尋過濾項目欄:<input type="text" v-model="search" placeholder="Search filter column .."/>
      	</ul>
        Copyright @2020 Hello Vue! Web Design By 中國科大實習生 ChihYen_Hsu製作
      </div>
    </div>
  </div>
</template>
<!--  all class attributes only for style -->
<!-- this vuejs cdn link -->
<script src ="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.26/vue.min.js"</script>

import Store from './store';
<script type="text/javascript">
export default {
  el: '#filter-by-example',
  mounted() {
     this.hasData = this.items && this.items.length ? true : true;
  },
  data() {
    return {
      text: 'Hello Vue!',
      items: [
      { label: '101' },
      { label: '102' },
      { label: '103' },
      { label: '201' },
      { label: '202' }, 
      { label: '300' },
      { label: 'aaa' },
      { label: 'abc' },
      { label: 'bbb' }
	],
      searchText: '',
      itemarray: [],
      search: '',
      selected: '',
      filterSearch: '',
      option: '',
      filter: [],
      title: '',
      url: '',
      news: '',
      newItem: '',
      hasData: true
    }
  },
  watch: {
   items: {
	handler(items) {
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
      return 
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
      filterSearch: function() {
    return this.items.title.filter(searchResult => searchResult.items.match(this.search));
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
  background: -webkit-linear-gradient(left top, #DDD, #777); /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(bottom right, #DDD, #777); /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(bottom right, #DDD, #777); /* For Firefox 3.6 to 15 */
  background: linear-gradient(to bottom right, #DDD, #777); /* Standard syntax */
  background-attachment: fixed;
  font-size:20px;
  line-height: 1.5em;
  font-family: 'Helvetica Neue', sans-serif;
}
.container {
  text-align: center;
}
input {
  box-shadow: 0 0 8px rgb(250, 204, 219);
  border: none;
}
input[type="text"]:focus { /*change the bootstrap text box glow color*/
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
.btn { /*default button bahavior (modifies bootstrap defaults)*/
  background-color: #00aaa6;
  color: #444;
  font-weight: bold;
}
.highlight {
  background-color: red;
  color: white;
  padding: 0px 5px;
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
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>

